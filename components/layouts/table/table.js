/** @format */
import TableHeadItem from "./table-head-item";
import TableRow from "./table-row";

export default function Table({ theadData, tbodyData, customClass }) {


  return (
    <>
      <table className={customClass}>
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
