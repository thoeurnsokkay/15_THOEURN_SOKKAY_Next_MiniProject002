import "../globals.css";
import CardComponent from "@/components/card";
import { Button } from "@/components/ui/button";
import FavoriteList from "@/components/favorite";

import Logo from "@/components/logo";
export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">{children}</body>
    </html>
  );
}
