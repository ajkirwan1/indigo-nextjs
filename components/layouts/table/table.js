/** @format */
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";
import classes from "./table.module.css";

export default function Table({ theadData, tbodyData, customClass }) {
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
            return <TableRow id={item.userId} key={item.userId} data={item.items} />;
          })}
        </tbody>
      </table>
    </>
  );
}
