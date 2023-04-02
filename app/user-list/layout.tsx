import "../../styles/UserList.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="userList-section">
      <div className="usersList-container">{children}</div>
    </section>
  );
}
