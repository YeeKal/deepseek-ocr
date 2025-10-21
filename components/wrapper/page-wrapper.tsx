import Footer from "@/components/wrapper/footer";
import { Header } from "@/components/wrapper/header";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[0rem]">
        <div className=" absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
      </main>
      <Footer />
    </>
  );
}
