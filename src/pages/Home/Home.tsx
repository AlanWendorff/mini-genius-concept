import type { NextPage } from "next";
import Card from "@components/Card";
import BANDS from "data/bands.data";

const Home: NextPage = () => (
  <div>
    <Card band={BANDS.dvsr} />
  </div>
);

export default Home;
