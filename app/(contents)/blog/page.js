/** @format */

import Image from "next/image";
import { blogData } from "@/data/blog-data";
import classes from "./page.module.css";

function Blog({ blogData }) {
  return (
    <>
      <div className={classes.imageContainer}>
        <div>
          {/* <h2>{blogData.title}</h2> */}
          <Image
            key={blogData.image}
            className={classes.image}
            src={blogData.image}
            alt="alt"
            width={750}
            height={500}
          />
          <h2>{blogData.title}</h2>
          <p>{blogData.description}</p>
          <p>{blogData.date}</p>
        </div>
      </div>
    </>
  );
}

export default function BlogPage() {
  return (
    <>
      <div className={classes.subHeader}>
        <h1>Blogs</h1>
      </div>
      <div className={classes.blogPageContainer}>
        <ul>
          {blogData.map((element) => (
            <li key={element.title}>
              <Blog blogData={element} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
