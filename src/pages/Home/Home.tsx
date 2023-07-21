import type { NextPage } from "next";
import Card from "@components/Card";
import BANDS from "data/bands.data";

const Home: NextPage = () => (
  <>
    <Card band={BANDS.dvsr} />
  </>
);

export default Home;
