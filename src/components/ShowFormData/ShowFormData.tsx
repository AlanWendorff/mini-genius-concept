import TFormData from "../../types/formData";
import styles from "./ShowFormData.module.scss";

interface IProps {
  submitted: boolean;
  formData: TFormData;
}

const ShowFormData = ({ submitted, formData }: IProps) => (
  <div className={submitted ? styles.containerShow : styles.containerHided}>
    {submitted && (
      <>
        <h3>Your data:</h3>
        {formData.nick_name !== "" && <p>Nick name: {formData.nick_name}</p>}
        {formData.fav_game !== "" && <p>Favourite Game: {formData.fav_game}</p>}
        {formData.fav_song !== "" && <p>Favourite Song: {formData.fav_song}</p>}
      </>
    )}
  </div>
);

export default ShowFormData;
