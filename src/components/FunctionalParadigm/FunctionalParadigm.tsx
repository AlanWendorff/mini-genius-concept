import { ChangeEvent, useState } from "react";
import ShowFormData from "../ShowFormData";
import handleSubmit from "../../scripts/submitForm";
import styles from "./FunctionalParadigm.module.scss";

const FunctionalParadigm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nick_name: "",
    fav_game: "",
    fav_song: "",
  });

  const handleSaveData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          handleSubmit(e, formData), setSubmitted(true);
        }}
      >
        <label htmlFor="nick_name">
          Nick Name{" "}
          <input
            id="nick_name"
            type="text"
            onChange={(e) => handleSaveData(e)}
          />
        </label>

        <label htmlFor="fav_game">
          Favourite Game{" "}
          <input
            id="fav_game"
            type="text"
            onChange={(e) => handleSaveData(e)}
          />
        </label>

        <label htmlFor="fav_song">
          Favourite Song{" "}
          <input
            id="fav_song"
            type="text"
            onChange={(e) => handleSaveData(e)}
          />
        </label>

        <button type="submit">SUBMIT</button>
      </form>

      <ShowFormData submitted={submitted} formData={formData} />
    </div>
  );
};

export default FunctionalParadigm;
