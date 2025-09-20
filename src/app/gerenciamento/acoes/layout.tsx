import Footer from "@/components/footer/footer";
import Sidebar from "@/components/sidebar/sidebar";

export default function CrudLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg:black">
        {children}
        <Footer />
    </div>
  );
}
