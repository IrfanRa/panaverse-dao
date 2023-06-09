import Header from "./components/layout/Header";
import "./globals.css";

export const metadata = {
  title: "Panaverse Dao",
  description: "Project to learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

       

        {children}
      </body>
    </html>
  );
}
