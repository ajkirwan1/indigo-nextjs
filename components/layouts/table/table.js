/** @format */
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css"

export default function Table({ theadData, tbodyData, customClass }) {
let value = customClass
console.log(customClass)
  return (
    <>
      <table className={classes[customClass]}>
        <thead>
          <tr>
            {theadData.map((h) => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
    </>
  );
}