import { ChangeEvent } from "react";
import styles from "./ObjectParadigm.module.scss";
import handleSubmit from "../../scripts/submitForm";

const ObjectParadigm = () => {
  let formData = {
    nick_name: "",
    fav_game: "",
    fav_song: "",
  };

  class FormField {
    id: string;
    name: string;

    constructor(id = "", name = "") {
      this.id = id;
      this.name = name;
    }

    save(e: ChangeEvent<HTMLInputElement>) {
      formData = {
        ...formData,
        [e.target.id]: e.target.value,
      };
    }

    render() {
      return (
        <label htmlFor={this.id}>
          {this.name}{" "}
          <input id={this.id} type="text" onChange={(e) => this.save(e)} />
        </label>
      );
    }
  }

  const renderNickName = new FormField("nick_name", "Nick Name").render();
  const renderFavGame = new FormField("fav_game", "Favourite Game").render();
  const renderFavSong = new FormField("fav_song", "Favourite Song").render();

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e, formData)}>
        {renderNickName}
        {renderFavGame}
        {renderFavSong}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ObjectParadigm;
