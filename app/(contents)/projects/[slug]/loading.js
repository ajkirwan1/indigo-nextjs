import { Spinner } from "@nextui-org/spinner";
// import { Loading } from "@nextui-org/react";
export default function LoadingProperties() {
  return (
    <>
      <title>INDIGO Consulting Projects Page</title>
      <div className="header">
        <h1>SAMPLES OF PROJECTS</h1>
        <hr />
      </div>
      <p>Please wait while we find your properties</p>
      <Spinner color="default" size="lg" className="spinner" />
    </>
  );
}
