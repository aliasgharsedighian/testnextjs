import "../../styles/login-page.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="login-page-section">
      <div className="login-page-container shadow-2xl">{children}</div>
    </section>
  );
}
