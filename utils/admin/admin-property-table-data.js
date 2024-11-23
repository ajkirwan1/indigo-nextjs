/** @format */

export default function PrepareAdminPropertyData(data) {
  let headerData = ["Title", "Location", "Price", "Creation Date"];
  let bodyData = [];

  data.forEach((element, index) => {
    console.log(element);
    let arr = {};
    let dataList = [];

    arr.id = element["id"];

    // const fullName = joinName(element["firstname"], element["lastname"]);
    dataList.push(element["title"]);

    dataList.push(element["location"]);

    // const propertyAccessString = convertAccessToString(
    //   element["propertyaccess"]
    // );

    dataList.push(element["price"]);

    // const consultingAccessString = convertAccessToString(
    //   element["consultingaccess"]
    // );
    // dataList.push(consultingAccessString);

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    dataList.push(today.toDateString());

    arr.items = dataList;

    bodyData.push(arr);
  });

  return { headerData, bodyData };
}

// function joinName(firstName, lastName) {
//   const capitalisedFirstName =
//     firstName.charAt(0).toUpperCase() + firstName.slice(1);
//   const capitalisedLastName =
//     lastName.charAt(0).toUpperCase() + lastName.slice(1);
//   return capitalisedFirstName + " " + capitalisedLastName;
// }

// function convertAccessToString(accessInt) {
//   if (accessInt == 0) {
//     return "Not requested";
//   } else if (accessInt == 1) {
//     return "Pending";
//   } else if (accessInt == 2) {
//     return "Granted";
//   } else {
//     return "Declined";
//   }
// }
