/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";

export default function ContentLayout({ children }) {
  return (
    <>
      <Header className="non-hero"></Header>
      <div className="properties-loading-layout">
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
}
