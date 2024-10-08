/** @format */
// "use client";

import { useSession } from "../contexts/session-context";


const withAuthentication = (WrappedComponent) => {
  return (props) => {
    // const { user } = useSession();
    // // const router = useRouter();

    // console.log("user", user)

    // if (!user && router.pathname !== "/login") {
    //         router.push("/login");
    //       }

    // if (!user && router.pathname !== "/login") {
    //   router.push("/login");
    // }
    // useEffect(() => {
    //   if (!isAuthenticating) {
    //     if (!user && router.pathname !== "/login") {
    //       router.push("/login");
    //     }
    //   }
    // }, [user, isAuthenticating, router]);

    // if (isAuthenticating) {
    //   return <>LOADING</>;
    // }
    // console.log("authentication component", user);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
