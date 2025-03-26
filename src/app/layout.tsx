import type { Metadata } from 'next';
import './globals.css';
import MobileNavigation from '@/components/MobileNavigation';
import DesktopNavigation from '@/components/DesktopNavigation';

export const metadata: Metadata = {
  title: 'Create book form',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <DesktopNavigation />
          <div className="container mx-auto pt-7 px-5">{children}</div>
          <MobileNavigation />
        </main>
      </body>
    </html>
  );
}
