/** @format */
import { validateRequest } from "@/auth/lucia";

export default async function UserInfo() {
  const { user } = await validateRequest();

  const {username, firstname } = user

  // console.log(user);
  return (
    <>
      <title>INDIGO CONSULTING Logged-in User Information</title>
      <div className="header">
        <h1>Your Details</h1>
        <hr />
      </div>
      <div>
        <h2>{username}</h2>
      </div>
      <div>
        <h2>{firstname}</h2>
      </div>
    </>
  );
}
