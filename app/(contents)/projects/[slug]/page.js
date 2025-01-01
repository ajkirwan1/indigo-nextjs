/** @format */
import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import ProjectCarousel from "@/components/pages/projects/project-carousel";
import Link from "next/link";
import { getAllProjects } from "@/server/actions/contentful/get-all-projects";
import { getSingleProject } from "@/server/actions/contentful/get-single-project-action";
import Header from "@/components/ui/header/header";
import SwiperComponent from "@/components/pages/projects/swiper";

export async function generateStaticParams() {
  const posts = await getAllProjects();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

function Success({ result }) {
  const { fields } = result;
  const { title, secondaryImages, description } = fields;
  let carouselImagesUrls = [];

  Object.entries(secondaryImages).map((entry) => {
    carouselImagesUrls.push(entry[1].fields.file.url);
  });
  return (
    <>
      <div className={classes.heroWrapper}>
        <ProjectCarousel images={carouselImagesUrls}>
        <div className={classes.titleHeader}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={classes.propertyInfo}>
          <h2>KEY FEATURES</h2>
          <ul>
            <li>
              <p>The most desirable location in the Athens Riviera</p>
            </li>
            <li>
              <p>High quality finish </p>
            </li>
            <li>
              <p>Panoramic view</p>
            </li>
            <li>
              <p>Stain-proof carpets in bedrooms</p>
            </li>
            <li>
              <p>Heated marble flooring</p>
            </li>
          </ul>
        </div>
        <div className={classes.linkContainer}>
          <Link href="/projects">Back</Link>
        </div>
      </ProjectCarousel>
      </div>
      <div className={classes.swiperContainer}>
        <SwiperComponent images={carouselImagesUrls} />
      </div>
    </>
  );
}

export default async function Page({ params }) {
  // const { params } = props;
  const { slug } = await params;
  const result = await getSingleProject(slug);
  const backupImage = [heroImage];

  return (
    <>
      <title>Indigo Consulting Project Item</title>
      {result.message ? (
        <div className={classes.heroWrapper}>
          <ProjectCarousel backup={true} images={backupImage}>
            <div className={classes.headerContainer}>
              <Header className={classes.heroHeader}></Header>
            </div>
            <div className={classes.errorInfo}>
              <h2>Something went wrong!</h2>
              <p>{result.message}</p>
              <Link href="/">
                <p>Return to home page</p>
              </Link>
            </div>
          </ProjectCarousel>
        </div>
      ) : (
        <Success result={result} />
      )}
    </>
  );
}
