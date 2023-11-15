import Image from "next/image";
import Head from "next/head";
import CountryFilter from "../components/CountryFilter";
import CountriesContainer from "../containers/CountriesContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Countries App</title>
        <meta name="description" content="A simple app to display countries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CountriesContainer />
      </main>
    </div>
  );
}
