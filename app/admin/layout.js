/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import { AdminProvider } from "@/contexts/admin-confirm-context";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminProvider>
        <Header className="non-hero"></Header>
        <main>{children}</main>
        <Footer></Footer>
      </AdminProvider>
    </>
  );
}
