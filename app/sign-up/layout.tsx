import "../../styles/SignUpPage.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="sign-up-section">
      <div className="sign-up-effect">{children}</div>
    </section>
  );
}
