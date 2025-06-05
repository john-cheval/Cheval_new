import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import { fetchData } from "./lib/fetchData";
import SectionThree from "@/components/Home/Section3";
import SectionFour from "@/components/Home/Section4";
import Capabilities from "@/components/Home/Capabilities";

export default async function Home() {
  const clients = await fetchData(
    "https://d331b20430.nxcli.net/chevalapi/wp-json/custom/v1/all_clients"
  );
  return (
    <>
      <Hero />
      <Clients clientsData={clients} />
      <SectionThree />
      <SectionFour />
      <Capabilities />
    </>
  );
}
