/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";

export default function ContentLayout({ children }) {
  return (
    <>
      <div className="properties-loading-layout">
        <Header className="non-hero"></Header>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
}
