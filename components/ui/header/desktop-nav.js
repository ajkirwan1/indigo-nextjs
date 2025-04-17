/** @format */
import classes from "./sub-header.module.css";
import NavigationItems from "./navigation-items";
import { SignIn } from "@/components/forms/sign-in/sign-in-form";
import { SignOutButton } from "@/components/auth/sign-out-button";

export default function DesktopNav({ data, session }) {
  return (
    <>
      <div className={classes.desktopNav}>
        <ul className={classes.menus}>
          {data.map((menu, index) => {
            return <NavigationItems items={menu} key={index} />;
          })}

          {session ? (
            <li>
              <SignOutButton>Sign Out</SignOutButton>
            </li>
          ) : (
            <li>
              <SignIn>asdasdsad</SignIn>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
