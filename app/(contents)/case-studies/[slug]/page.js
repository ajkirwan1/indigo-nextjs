/** @format */
import classes from "./page.module.css";
import heroImage from "/public/images/croppednight.jpg";
import ProjectCarousel from "@/components/pages/projects/project-carousel";
import Link from "next/link";
import { getAllProjects } from "@/server/actions/contentful/get-all-projects";
import { getSingleProject } from "@/server/actions/contentful/get-single-project-action";
import Image from "next/image";
import Header from "@/components/ui/header/header";
import SwiperComponent from "@/components/pages/projects/swiper";

export async function generateStaticParams() {
  const posts = await getAllProjects();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export async function generateMetadata({ params }, parent) {
  // read route params
  const { slug } = await params;
  const result = await getSingleProject(slug);
  const { fields } = result;
  const { title } = fields;

  return {
    title: title,
  };
}

// function Success({ result }) {
//   const { fields } = result;
//   const { title, secondaryImages, description } = fields;
//   let carouselImagesUrls = [];

//   Object.entries(secondaryImages).map((entry) => {
//     carouselImagesUrls.push(entry[1].fields.file.url);
//   });
//   return (
//     <>
//       <div className={classes.heroWrapper}>
//         <ProjectCarousel images={carouselImagesUrls}>
//           <div className={classes.titleHeader}>
//             <h1>{title}</h1>
//             {/* <p>{description}</p> */}
//           </div>
//           <div className={classes.propertyInfo}>
//             <p>{description}</p>
//           </div>
//           <div className={classes.linkContainer}>
//             <Link href="/projects">Back</Link>
//           </div>
//         </ProjectCarousel>
//       </div>
//       <div className={classes.mobileContainer}>
//         <div className={classes.titleHeader}>
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </div>
//         <div className={classes.swiperContainer}>
//           <SwiperComponent images={carouselImagesUrls} />
//         </div>
//         {/* <div className={classes.linkContainer}>
//           <Link href="/projects">Back</Link>
//         </div> */}
//       </div>
//     </>
//   );
// }

// async function BlogItem({ blogData }) {
//   const { title, publishDate, primaryImage, author, slug } = blogData.fields;

//   return (
//     <li>
//       <Link href={`blog/${slug}`}>
//         <div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             transition: { duration: 2 },
//           }}
//         >
//           <div className={classes.imageContainer}>
//             <Image
//               className={classes.image}
//               src={`https:${primaryImage.fields.file.url}`}
//               alt={title}
//               width={750}
//               height={500}
//             />
//             <div className={classes.backdropHover} />
//           </div>
//           <h2>{title}</h2>
//           <p>{publishDate}</p>
//         </div>
//       </Link>
//     </li>
//   );
// }

export default async function Page({ params }) {
  // const { params } = props;
  const { slug } = await params;

  const result = await getSingleProject(slug);
  // const backupImage = [heroImage];
  const { fields } = result;
  const { title, secondaryImages, description, inProgressImages } = fields;
  let carouselImagesUrls = [];
  let inProgressImagesUrls = [];
  Object.entries(secondaryImages).map((entry) => {
    carouselImagesUrls.push(entry[1].fields.file.url);
  });

  if (inProgressImages) {
    Object.entries(inProgressImages).map((entry) => {
      inProgressImagesUrls.push(entry[1].fields.file.url);
    });
  }

  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        <hr />
      </div>
      <p className={classes.description}>{description}</p>
      <section className={classes.blogPageContainer}>
        <h2>COMPLETED PROJECT</h2>
        <ul>
          {carouselImagesUrls.map((element) => (
            <li key={element}>
              <div className={classes.imageContainer}>
                <Image
                  alt=""
                  src={element}
                  className={classes.image}
                  width={750}
                  height={500}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      {inProgressImagesUrls.length > 0 ? (
        <section className={classes.blogPageContainer}>
          <h2>FULL RENOVATION</h2>
          <ul>
            {inProgressImagesUrls.map((element) => (
              <li key={element}>
                <div className={classes.imageContainer}>
                  <Image
                    alt=""
                    src={element}
                    className={classes.image}
                    width={750}
                    height={500}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {/* {result.message ? (
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
      )} */}
    </>
  );
}
