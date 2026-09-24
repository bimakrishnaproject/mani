"use client";

import { useEffect } from "react";
import Link from "next/link";
import { VideoItem } from "@/data/videos";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="bg-editorial-white border border-mist-grey rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-soft-white border border-mist-grey flex items-center justify-center text-ink-black hover:bg-mist-grey transition-colors"
          aria-label="Close Video Player"
        >
          ✕
        </button>

        {/* Video Player Area with HTML5 controls */}
        <div className="w-full bg-black aspect-video relative flex items-center justify-center overflow-hidden rounded-t-2xl">
          <video
            key={video.id}
            controls
            autoPlay
            playsInline
            poster={video.thumbnailUrl ? encodeURI(video.thumbnailUrl) : undefined}
            src={`/api/video-stream?title=${encodeURIComponent(video.title)}`}
            onError={(e) => {
              // Fallback to sample if stream is unavailable
              const target = e.currentTarget;
              if (!target.src.endsWith("sample-video.mp4")) {
                target.src = "/assets/videos/sample-video.mp4";
              }
            }}
            className="w-full h-full object-contain bg-black"
          >
            Your browser does not support HTML5 video streaming.
          </video>
        </div>

        {/* Modal Info Section */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold tracking-widest uppercase bg-soft-signal-green text-deep-green px-3 py-1 rounded-full">
              {video.category}
            </span>
          </div>

          <h2 className="font-serif-heading text-3xl md:text-4xl text-deep-green">
            {video.title}
          </h2>

          <p className="text-base text-[#1C2826] leading-relaxed">
            {(video.summary || "").replace(/\s*\*?\*?!\[\]\[image\d+\]\*?\*?/g, "").trim()}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {(video.keywords || []).map((kw, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-soft-white border border-mist-grey px-3 py-1 rounded-md text-ink-black"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Deeper Support CTA Box */}
          <div className="bg-soft-white border border-mist-grey rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div>
              <h4 className="font-serif-heading text-xl text-deep-green mb-1">
                Looking for Deeper Support?
              </h4>
              <p className="text-xs text-[#1C2826]">
                Explore our guided 5-part collections or get early access to the <strong className="font-bold lowercase">mani</strong> Beta App.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/collections"
                onClick={onClose}
                className="px-4 py-2.5 bg-deep-green text-editorial-white text-xs font-semibold rounded-md hover:bg-[#143d28] transition-colors"
              >
                Explore Collections
              </Link>
              <Link
                href="/app"
                onClick={onClose}
                className="px-4 py-2.5 border border-ink-black text-xs font-semibold rounded-md hover:bg-mist-grey transition-colors"
              >
                Join Beta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
