import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg:black">
        <div className="md:flex">
        <Sidebar />
            {children}
        </div>
        <Footer />
    </div>
  );
}
