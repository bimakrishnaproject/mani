import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DROPBOX_BASE = "https://www.dropbox.com/scl/fo/2wl7v6mye8f42rmbbxgzv/AM4hm20GnZAUHWqcJkU3HCE/Video%20Files?dl=1&rlkey=ukuzc6zvrimwbx9ccb2ai5l4u";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");

  if (!title) {
    return new NextResponse("Title is required", { status: 400 });
  }

  const cleanTitle = title.replace(/\.mp4$/i, "").trim();
  const localVideoPath = path.join(process.cwd(), "public", "assets", "videos", `${cleanTitle}.mp4`);

  // Check if a real client video file (>5MB) exists locally
  if (fs.existsSync(localVideoPath)) {
    const stats = fs.statSync(localVideoPath);
    if (stats.size > 5 * 1024 * 1024) {
      const range = req.headers.get("range");
      const fileSize = stats.size;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = end - start + 1;

        const fileStream = fs.createReadStream(localVideoPath, { start, end });
        const readable = new ReadableStream({
          start(controller) {
            fileStream.on("data", (chunk) => controller.enqueue(chunk));
            fileStream.on("end", () => controller.close());
            fileStream.on("error", (err) => controller.error(err));
          },
        });

        return new NextResponse(readable, {
          status: 206,
          headers: {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize.toString(),
            "Content-Type": "video/mp4",
          },
        });
      } else {
        const fileStream = fs.createReadStream(localVideoPath);
        const readable = new ReadableStream({
          start(controller) {
            fileStream.on("data", (chunk) => controller.enqueue(chunk));
            fileStream.on("end", () => controller.close());
            fileStream.on("error", (err) => controller.error(err));
          },
        });

        return new NextResponse(readable, {
          status: 200,
          headers: {
            "Content-Length": fileSize.toString(),
            "Content-Type": "video/mp4",
            "Accept-Ranges": "bytes",
          },
        });
      }
    }
  }

  // Otherwise, resolve and stream from client's Dropbox
  const straightTitle = cleanTitle.replace(/[‘’]/g, "'");
  const curlyTitle = cleanTitle.replace(/'/g, "’");

  const candidateNames = Array.from(
    new Set([
      `${cleanTitle}.mp4`,
      ` ${cleanTitle}.mp4`,
      `${straightTitle}.mp4`,
      ` ${straightTitle}.mp4`,
      `${curlyTitle}.mp4`,
      ` ${curlyTitle}.mp4`,
    ])
  );

  for (const cName of candidateNames) {
    const dropboxUrl = `${DROPBOX_BASE}&preview=${encodeURIComponent(cName)}`;

    try {
      // Follow redirects to obtain the direct video stream URL
      const headRes = await fetch(dropboxUrl, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        },
        redirect: "follow",
      });

      const cType = headRes.headers.get("content-type") || "";
      const cLen = headRes.headers.get("content-length");

      if (
        headRes.status === 200 &&
        (cType.includes("binary") || cType.includes("video") || cType.includes("octet") || (cLen && parseInt(cLen, 10) > 1000000))
      ) {
        // Redirect client browser directly to the signed CDN stream
        return NextResponse.redirect(headRes.url, 307);
      }
    } catch (err) {
      console.error(`Error resolving Dropbox video for ${cName}:`, err);
    }
  }

  // Fallback to local sample or existing asset if resolution failed
  return NextResponse.redirect(new URL(`/assets/videos/sample-video.mp4`, req.url), 302);
}
