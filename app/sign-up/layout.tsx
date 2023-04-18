import "../../styles/SignUpPage.css";
import PageWrapper from "../pageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="sign-up-section">
      <PageWrapper>
        <div className="sign-up-effect">{children}</div>
      </PageWrapper>
    </section>
  );
}
