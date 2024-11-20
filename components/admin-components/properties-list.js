/** @format */
import classes from "./properties-list.module.css";

function NoProperties() {
  return <p>Client currently does not have access to any property records</p>;
}

function RecordList({ properties }) {
  return (
    <ul>
      {properties.map((item) => (
        <>
          <li key={item.id} className={classes.listWrapper}>
            <div className={classes.listWrapperinner}>
              <p>Title:&nbsp;&nbsp;</p>
              <p>{item.title}</p>
            </div>
            <div className={classes.listWrapperinner}>
              <p>Name:&nbsp;&nbsp;</p>
              <p>{item.name}</p>
            </div>
          </li>
          <hr className={classes.horizontal} />
        </>
      ))}
    </ul>
  );
}

export default async function AdminClientPropertyList({ properties }) {
  return (
    <>
      {Object.keys(properties).length != 0 ? (
        <RecordList properties={properties} />
      ) : (
        <NoProperties />
      )}
    </>
  );
}
