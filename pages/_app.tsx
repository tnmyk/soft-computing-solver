import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  useEffect(() => {
    const pathArr = router.pathname
      .split("/")
      .filter((str) => str.trim() !== "");
    if (pathArr[0] !== "solve") return;
    const titleTemp = pathArr[2].split("-").join(" ");
    setTitle(titleTemp.charAt(0).toUpperCase() + titleTemp.slice(1));
  }, [router.pathname]);
  return (
    <>
      <Head>
        {title && (
          <>
            (<title>{title}</title>
            <meta
              name="description"
              content={`Soft Computing - ${title} step-by-step online solver`}
            ></meta>
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="article" />
            <meta
              property="og:title"
              content={`Soft Computing - ${title} step-by-step online solver`}
            />
            <meta
              property="og:description"
              content={`Soft Computing - ${title} step-by-step online solver`}
            />
            )
          </>
        )}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-59P6ZD0ZLF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59P6ZD0ZLF');
          `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
