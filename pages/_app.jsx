import "@/styles/globals.css";
import { Main } from "next/document";
import { Toaster } from "sonner";
export default function App({ Component, pageProps }) {
  return (
    <main>
      <Toaster />
      <Component {...pageProps} />;
    </main>
  );
}
