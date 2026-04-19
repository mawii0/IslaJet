import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--isla-sand-light)]">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}