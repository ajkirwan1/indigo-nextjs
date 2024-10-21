/** @format */

const withAuthentication = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
