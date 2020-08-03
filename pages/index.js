import Head from "next/head";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage";
import Portfolio from "../components/Portfolio";
import CreateProcess from "../components/CreateProcess";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Sterling Studio</title>
          <meta property="og:site_name" content="William Diffey" />
          <meta property="og:title" content="Welcome to williamdiffey.com" />
          <meta property="og:latitude" content="" />
          <meta property="og:longitude" content="" />
          <meta property="og:locality" content="" />
          <meta property="og:country-name" content="" />
          <meta property="og:url" content="https://www.williamdiffey.com" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="Digital and blended learning consultant and developer"
          />
          <meta property="og:image" content="//imageurl" />
          <meta property="og:image:width" content="317" />
          <meta property="og:image:height" content="316" />
          <meta itemProp="name" content="//page content" />
          <meta itemProp="url" content="//page url" />
          <meta itemProp="description" content="//page description" />
          <meta itemProp="thumbnailUrl" content="http://" />
          <link rel="image_src" href="http://" />
          <meta itemProp="image" content="http://" />
          <meta itemProp="author" content="William Diffey" />
          <meta itemProp="datePublished" content="2020-07-20T13:18:20+0900" />
          <meta itemrop="headline" content="//headline" />
          <meta name="twitter:title" content="//twitter title" />
          <meta name="twitter:image" content="http:" />
          <meta name="twitter:url" content="https: //page url" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="" />
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Homepage />
          <Portfolio />
          <CreateProcess />
          <CaseStudies />
          <Contact />
        </main>

        <footer></footer>
      </div>
    </Layout>
  );
}
