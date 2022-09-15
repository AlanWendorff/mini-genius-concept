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

const SOCIAL_STATES = {
  true: styles.social,
  false: styles.hide,
};

interface IProps {
  distanceOfSocials?: number;
  msg: string;
}

const index: NextPage<IProps> = ({ distanceOfSocials, msg }) => {
  const [showSocials, setShowSocials] = useState(false);
  console.log(msg);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowSocials(!showSocials)}
        className={styles.shareButton}
      >
        <ShareVariantIcon size={"20px"} />
      </button>

      <div
        className={SOCIAL_STATES[`${showSocials}`]}
        style={{ transform: `translate(-${distanceOfSocials ?? 200}%, -75%)` }}
      >
        <FacebookShareButton
          url={window.location.href}
          hashtag="#csgo"
          quote={msg}
          className={styles.BTN3}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
          url={window.location.href}
          hashtags={["csgo"]}
          title={msg}
          className={styles.BTN2}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton url={msg} className={styles.BTN1}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default index;
