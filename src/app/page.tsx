import Head from "next/head";
import CountriesContainer from "../containers/CountriesContainer";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Countries App</title>
        <meta
          name="description"
          content="A simple app to display countries and data"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ErrorBoundary>
          <CountriesContainer />
        </ErrorBoundary>
      </main>
    </div>
  );
}
