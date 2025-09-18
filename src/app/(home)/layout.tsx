import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}