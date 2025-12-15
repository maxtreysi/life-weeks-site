export const metadata = {
  title: "Life Weeks",
  description: "Календарь жизни в неделях",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
