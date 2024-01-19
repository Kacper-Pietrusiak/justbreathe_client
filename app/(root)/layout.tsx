import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="body-screen">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
