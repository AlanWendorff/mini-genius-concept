import { TSections } from "types/sections";

interface IProps {
  section?: TSections;
  handleSection: (section: TSections) => void;
}

export default IProps;
