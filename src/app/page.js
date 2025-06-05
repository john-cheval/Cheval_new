import Clients from "@/components/Home/Clients";
// import Hero from "@/components/Home/Hero";
import { fetchData } from "./lib/fetchData";
import SectionThree from "@/components/Home/Section3";
import SectionFour from "@/components/Home/Section4";
import Capabilities from "@/components/Home/Capabilities";
import Gallery from "@/components/Home/Gallery";
import Technologies from "@/components/Home/Technologies";
import HeroCode from "@/components/Old/Hero";
import Work from "@/components/Home/Work";
import GoogleReviews from "@/components/Shared/Reviews";
import Blogs from "@/components/Home/Blogs";

export default async function Home() {
  const clients = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );

  const homeContent = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homepage_details?ID=8"
  );

  const projects = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/homeprojects"
  );

  const reviews = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/google_reviews"
  );

  const blogs = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/wp/v2/posts?_embed"
  );

  return (
    <>
      {/* <Hero /> */}
      <HeroCode
        title={homeContent.web_title}
        subTitle={homeContent.web_sub_title}
        linkText={homeContent.web_link_text}
        link={homeContent.web_link}
        fullVideo={homeContent.web_video}
        shortVideo={homeContent.web_video_short}
      />
      <Clients clientsData={clients} />
      <SectionThree />
      <SectionFour />
      <Capabilities />
      <Gallery />
      <Technologies />
      {/* <Work data={projects} /> */}
      <GoogleReviews data={reviews} />
      <Blogs blogData={blogs} />
    </>
  );
}
