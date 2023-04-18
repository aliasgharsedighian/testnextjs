import "../../styles/login-page.css";
import PageWrapper from "../pageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="login-page-section">
      <PageWrapper>
        <div className="login-page-container shadow-2xl">{children}</div>
      </PageWrapper>
    </section>
  );
}
