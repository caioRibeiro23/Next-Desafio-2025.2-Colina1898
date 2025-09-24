import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";
import { SidebarWrapper } from "@/components/sidebar/sidebarWrapper";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black">
        <div className="md:flex">
          <SidebarWrapper />
            {children}
        </div>
        <Footer />
    </div>
  );
}
