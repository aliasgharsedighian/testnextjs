import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import { ReduxProviders } from "./GlobalRedux/provider";
import ThemeProviders from "./ThemeProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <ThemeProviders>
        <body className="bg-gray-100 dark:bg-zinc-800 transition-all duration-700">
          <ReduxProviders>
            <Header />
            <div>{children}</div>
            <Footer />
          </ReduxProviders>
        </body>
      </ThemeProviders>
    </html>
  );
}
