/** @format */

import { getUser } from "@/server/actions/db/client";
import classes from "./page.module.css";
import AdminUserInfo from "@/components/admin-components/user-info/admin-user-info";
import { Spinner } from "@nextui-org/spinner";
import { listDriveFiles } from "@/lib/google/get-drive-files";

export default async function AdminClientPage({ params }) {
  const userInfo = await getUser(parseInt(params.id));

  const files = await listDriveFiles()

  console.log(files, "FILES")

  function UserInfo ({userInfo, files}) {
    return userInfo ? <AdminUserInfo userInfo={userInfo} files={files}/> : <Spinner color="default" size="lg" className="spinner" />;
  };

  return (
    <div className={classes.pageContainer}>
      {userInfo?.dbFetchError ? (
        <p>{userInfo.dbFetchError}</p>
      ) : (
        <UserInfo userInfo={userInfo} files={files}/>
      )}
    </div>
  );
}
