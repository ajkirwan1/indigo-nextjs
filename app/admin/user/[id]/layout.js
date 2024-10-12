
export default function Layout({ children, modal }) {
  return (
    <>
      <div>{children}</div>
      <div>{modal}</div>
    </>
  );
}
