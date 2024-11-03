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
              <h2>Title:</h2>
              <p>{item.title}</p>
            </div>
            <div className={classes.listWrapperinner}>
              <h2>Name:</h2>
              <p>{item.name}</p>
            </div>
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
}

export default async function AdminClientPropertyList({ properties }) {
  return (
    <>
      {Object.keys(properties).length != 0 ? <RecordList properties={properties} /> : <NoProperties />}
    </>
  );
}
