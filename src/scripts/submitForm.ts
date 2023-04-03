import { FormEvent } from "react";
import POSTForm from "../services/POSTForm";
import TFormData from "../types/formData";

const handleSubmit = (e: FormEvent, formData: TFormData) => {
  e.preventDefault();
  POSTForm(formData);
};

export default handleSubmit;
