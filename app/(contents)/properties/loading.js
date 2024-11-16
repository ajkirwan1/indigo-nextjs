import { Spinner } from "@nextui-org/spinner";
// import { Loading } from "@nextui-org/react";
export default function LoadingProperties() {
  return (
    <>
      <p>Please wait while we find your properties</p>

      <Spinner color="secondary" size="lg" className="spinner" />

      {/* <Loading /> */}
    </>
  );
}
