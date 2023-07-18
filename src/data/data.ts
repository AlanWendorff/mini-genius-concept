import IMAGE_1 from "../assets/images/albums/wt.jpg";
import IMAGE_2 from "../assets/images/albums/thrpy.jpg";
import IMAGE_3 from "../assets/images/albums/company.jpg";
import IMAGE_4 from "../assets/images/albums/dvsr.png";

const ALBUMS = [
  {
    id: 19,
    image: IMAGE_1,
    name: "West Technique",
    release_year: 2020,
    release_date: "August 7",
    band: "DVSR",
    colors: { primary: "#8e2a29", secondary: "#6f2929" },
    tracklist: [
      "No Sugar",
      "Bloodlust (Ft. CJ McMahon)",
      "Off Tap",
      "TN Tax",
      "Devil on My Shoulder",
      "What’s the Proof? (Ft. Frankie Palmeri)",
      "Liberate Me",
      "Redrum",
      "Rack 'em Up",
      "Black Magic",
      "Respect on the Name",
      "Homesic",
      "Leave and Die Slowly",
    ],
  },
  {
    id: 59,
    image: IMAGE_2,
    name: "Therapy",
    release_year: 2017,
    release_date: "November 20",
    band: "DVSR",
    colors: { primary: "#7f7f7f", secondary: "#424242" },
    tracklist: [
      "Endless",
      "Detox",
      "Slave To The Beat",
      "First-Degree",
      "Devil in 95's",
      "Therapy",
      "Ready For War",
    ],
  },
  {
    id: 152,
    image: IMAGE_3,
    name: "Bad Company",
    release_year: 2016,
    release_date: "August 7",
    band: "DVSR",
    colors: { primary: "#0485e5", secondary: "#0c040b" },
    tracklist: ["Bad Company"],
  },
  {
    id: 707,
    image: IMAGE_4,
    name: "D.V.S.R",
    release_year: 2015,
    release_date: "November 23",
    band: "DVSR",
    colors: { primary: "#35c1d8", secondary: "#90d9f4" },
    tracklist: [
      "Six Figures Deep",
      "Fatal Attraction",
      "Shutdown...",
      "Life and Death",
      "Beneath the Skin",
      "Remission (Ft. Matt Gelsomino)",
      "Hooded Race",
      "The Forked Tongue",
      "React",
      "Unconscious",
    ],
  },
];

export default ALBUMS;
