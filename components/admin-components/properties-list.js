/** @format */
import classes from "./properties-list.module.css"


export default async function AdminClientPropertyList({ properties }) {
  return (
    <>
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
              <div className={classes.listWrapperinner}>
                <input type="checkbox"></input>
              </div>
            </li>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
}
