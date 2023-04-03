import { ChangeEvent, FormEvent } from "react";
import POSTForm from "../../services/POSTForm";
import styles from "./FunctionalParadigm.module.scss";

const FunctionalParadigm = () => {
  let formData = {
    nick_name: "",
    fav_game: "",
    fav_song: "",
  };

  const handleSaveData = (e: ChangeEvent<HTMLInputElement>) => {
    formData = {
      ...formData,
      [e.target.id]: e.target.value,
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    POSTForm(formData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  );
};

export default FunctionalParadigm;
