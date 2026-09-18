import { redirect } from "next/navigation";

// Per docs/website_copy.md Line 287:
// "Do not create another collection overview page. Visitors scroll through all three on the same Collections page."
export default function ByeByeNarcissistRedirect() {
  redirect("/collections#featured-collection");
}
