import { useState, ChangeEvent } from "react";

const ConditionalText = () => {
  const [text, setText] = useState<string>();
  const overText = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 5) {
      setText(event.currentTarget.value);
    }
  };
  const eventText = text;
  return (
    <>
      <input type="text" onChange={overText} />
      <article>{eventText}</article>
    </>
  );
};

export default ConditionalText;
