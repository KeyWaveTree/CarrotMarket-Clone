type KeyType = {
  keyName: string;
  callback: (key: string) => void;
};

const Pad = (props: KeyType) => {
  const { keyName, callback } = props;
  return (
    <>
      <button onClick={() => callback(keyName)}>{keyName}</button>;
    </>
  );
};
export default Pad;
