/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";



export default function AdminLayout({ children }) {
  return (
    <>
      <Header className="non-hero"></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
