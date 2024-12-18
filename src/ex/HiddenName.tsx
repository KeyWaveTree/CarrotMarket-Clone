// 잘라내는 함수 하나
// 문자를 반복시키는 함수 하나 필요
import { useState, ChangeEvent } from "react";

const HiddenName = () => {
  const [name, ChangeName] = useState<string>();
  const checkName = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length >= 3) {
      const startName = newName.substring(0, 1);
      const endName = newName.substring(newName.length - 1, newName.length);
      const hiddenPart = "*".repeat(newName.length - 2);
      newName = startName + hiddenPart + endName;
    }
    ChangeName(newName);
  };

  return (
    <>
      <input type="text" onChange={checkName} />
      <article>{name}</article>
    </>
  );
};

export default HiddenName;
