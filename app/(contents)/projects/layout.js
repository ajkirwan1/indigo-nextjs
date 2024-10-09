/** @format */

export default function Layout({ children, loginModal, modal }) {
  return (
    <>
      {loginModal}
      {modal}
      {children}
    </>
  );
}
