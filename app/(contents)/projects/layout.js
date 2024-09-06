/** @format */

export default function Layout({ children, loginModal, modal }) {
  console.log("login modal");
  return (
    <>
      {loginModal}
      {modal}
      {children}
    </>
  );
}
