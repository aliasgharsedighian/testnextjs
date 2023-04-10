import "../../styles/scss files/Products.scss";
import "../../styles/flexboxgrid.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="">{children}</section>;
}
