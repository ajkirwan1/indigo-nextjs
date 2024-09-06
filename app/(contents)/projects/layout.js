/** @format */

export default function Layout({ children, loginModal }) {
  console.log("login modal");
  return (
    <>
      {loginModal}
      {children}
    </>
  );
}
