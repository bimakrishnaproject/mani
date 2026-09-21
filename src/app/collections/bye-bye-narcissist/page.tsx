import { redirect } from "next/navigation";

export default function ByeByeNarcissistRedirectPage() {
  redirect("/collections#featured-collection");
}
