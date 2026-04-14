import { redirect } from "next/navigation";

// Alias page — redirect ke halaman kanonik
export default function Page() {
  redirect("/machinery-breakdown");
}
