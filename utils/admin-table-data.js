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

  data.forEach((element, index) => {
    let arr = {};
    let dataList = [];

    arr.userId = element["id"];

    const fullName = joinName(element["first_name"], element["last_name"]);
    dataList.push(fullName);

    dataList.push(element["email"]);

    const propertyAccessString = convertAccessToString(
      element["property_access"]
    );
    dataList.push(propertyAccessString);

    const consultingAccessString = convertAccessToString(element["consulting_access"]);
    dataList.push(consultingAccessString);

    dataList.push(element["access_request_date"]);

    arr.items = dataList

    bodyData.push(arr)
  });

  return {headerData, bodyData}
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
  } else {
    return "Granted";
  }
}
