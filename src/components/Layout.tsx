import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ToastProvider, ToastViewport } from "./ui/toast";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <section className="min-h-screen flex flex-col">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </section>
      <ToastViewport />
    </ToastProvider>
  );
}
