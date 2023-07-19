import Head from "next/head";

const MetaTags = () => (
  <Head>
    <title>Mini Genius</title>

    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="assets/images/web/icon-512.png" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#ffff64" />
    <meta name="author" content="Alan Wendorff" />
    <meta property="og:url" content="https://next-match-ez.vercel.app" />

    <meta property="og:title" content="Mini Genius" />
    <meta name="twitter:title" content="Mini Genius" />

    {/*  <meta
      property="og:image"
      content="https://voxelarchitects.com/website_og.png"
    />

    <meta
      name="twitter:image"
      content="https://voxelarchitects.com/website_og.png"
    />

    <meta
      property="og:image:secure_url"
      content="https://voxelarchitects.com/website_og.png"
    /> */}

    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="description"
      content="Your favorite site for consulting lyrics."
    />
    <meta
      property="og:description"
      content="Your favorite site for consulting lyrics."
    />
    <meta
      name="twitter:description"
      content="Your favorite site for consulting lyrics."
    />
  </Head>
);

export default MetaTags;
