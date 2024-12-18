import { useState, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState<string>("0");
  const nameState = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const newName = name;
  return (
    <>
      <article>반갑습니다 {newName}님</article>
      <input type="text" onChange={nameState} />
    </>
  );
};

export default WelcomeName;
