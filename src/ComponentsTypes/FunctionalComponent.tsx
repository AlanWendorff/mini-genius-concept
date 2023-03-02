import { FC } from "react";

interface Props {
  text: string;
}

const FunctionalComponent: FC<Props> = ({ text }) => {
  console.log("Hello world, I'm a Functional Component");
  console.log("I have some limitations like:");
  console.log("i cannot return a bare string or an array of ReactElements.");

  return (
    <>
      <p>{text}</p>
    </>
  );
};

export default FunctionalComponent;
