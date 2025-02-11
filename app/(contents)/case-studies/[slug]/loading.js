import { Spinner } from "@nextui-org/spinner";
export default function LoadingProperties() {
  return (
    <>
      <div className="header">
        <h1>SAMPLES OF SERVICES</h1>
        <hr />
      </div>
      <p>Please wait while we find your properties</p>
      <Spinner color="default" size="lg" className="spinner" />
    </>
  );
}
