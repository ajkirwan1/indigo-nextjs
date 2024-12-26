/** @format */

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer";
import { AdminProvider } from "@/contexts/admin-confirm-context";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <AdminProvider>
        <div className="admin-page-wrapper">
          <Header className="non-hero"></Header>
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </AdminProvider>
    </div>
  );
}
