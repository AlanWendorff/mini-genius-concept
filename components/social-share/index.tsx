import { useState } from "react";
import ShareVariantIcon from "mdi-react/ShareVariantIcon";
import type { NextPage } from "next";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import styles from "./social-share.module.scss";

const index: NextPage = () => {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowSocials(!showSocials)}
        className={styles.shareButton}
      >
        <ShareVariantIcon size={"20px"} />
      </button>

      <div className={styles.social}>
        <FacebookShareButton
          url={`${window.location.href}`}
          hashtag="#csgo"
          /* quote={Facebook} */
          className={styles.BTN3}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={`${window.location.href}`} /* title={Twitter} */
          className={styles.BTN2}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton url="" /* url={Wapp} */ className={styles.BTN1}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default index;
