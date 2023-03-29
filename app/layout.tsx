import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';

export const metadata = {
  title: {
    default: 'Jamie Davies',
    template: '%s — Jamie Davies',
  },
  description:
    "Jamie Davies' personal website. Full-stack software engineer, creator and coffee-lover.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200 font-mono font-light transition-colors duration-300 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />

          <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-3xl p-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
