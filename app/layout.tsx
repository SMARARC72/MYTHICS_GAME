import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Mythic · Glass Harbor", description: "A living mythic superhero RPG" };
export const viewport: Viewport = { colorScheme: "dark", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to current world</a>{children}</body></html>;
}
