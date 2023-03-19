export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>
        <div>Ben Root Layout'um</div>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
