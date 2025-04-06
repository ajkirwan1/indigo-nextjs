/** @format */

export default function PrepareAdminClientData(data) {
  let headerData = [
    "Name",
    "Email",
    "Property access",
    "Consulting access",
    "Date of request",
  ];
  let bodyData = [];
  let bodyData2 = []

  data.forEach((element, index) => {
    let arr = {};
    let arr2 = {};
    let dataList = [];
    let dataArr = {}
    let dataList2 = [];

    arr.userId = element["id"];
    dataArr.userId = element["id"];

    const fullName = joinName(element["firstname"], element["lastname"]);
    dataList.push(fullName);

    dataArr.name = fullName;

    dataList.push(element["email"]);

    dataArr.email = element["email"];

    const propertyAccessString = convertAccessToString(
      element["propertyaccess"]
    );
    dataList.push(propertyAccessString);

    dataArr.propertyAccess = propertyAccessString;


    const consultingAccessString = convertAccessToString(
      element["consultingaccess"]
    );
    dataList.push(consultingAccessString);

    dataArr.consultingAccess = propertyAccessString;

    dataList.push(element["accessrequestdate"].toLocaleDateString('en-GB'));

    dataArr.dateOfRequest = element["accessrequestdate"].toLocaleDateString('en-GB');

    arr.items = dataList;

    bodyData.push(arr);
    bodyData2.push(dataArr)
  });





  return { headerData, bodyData, bodyData2 };
}

function joinName(firstName, lastName) {
  const capitalisedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const capitalisedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return capitalisedFirstName + " " + capitalisedLastName;
}

function convertAccessToString(accessInt) {
  if (accessInt == 0) {
    return "Not requested";
  } else if (accessInt == 1) {
    return "Pending";
  } else if (accessInt == 2) {
    return "Granted";
  } else {
    return "Declined";
  }
}
