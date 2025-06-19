/** @format */

export default function PrepareAdminClientData(data) {
  let headerData = [
    "Name",
    "Email",
    "Registration",
    "Date of request",
  ];
  let bodyData2 = []

  data.forEach((element, index) => {

    let dataArr = {}

    dataArr.userId = element["id"];
    dataArr.name = element["name"];
    dataArr.email = element["email"];
    dataArr.registration = element["registration"];
    dataArr.dateOfRequest = element["createdAt"].toLocaleDateString('en-GB');

    bodyData2.push(dataArr)
  });
  return { headerData, bodyData2 };
}
