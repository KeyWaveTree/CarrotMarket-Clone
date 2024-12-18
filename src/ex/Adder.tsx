import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [num1, setNumOne] = useState<number>(0);
  const [num2, setNumTwo] = useState<number>(0);

  const numberOne = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberOne = Number.parseInt(event.currentTarget.value);
    setNumOne(newNumberOne);
  };

  const numberTwo = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberTwo = Number.parseInt(event.currentTarget.value);
    setNumTwo(newNumberTwo);
  };
  const calculated = num1 + num2;
  return (
    <section>
      <article>계산 결과:{calculated}</article>
      <section>
        <input type="text" onChange={numberOne} />
        +
        <input type="text" onChange={numberTwo} />
      </section>
    </section>
  );
};

export default Adder;
