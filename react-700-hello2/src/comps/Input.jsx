const Input = ({ text, setText }) => {
  const onChangeEvent = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <input onChange={onChangeEvent} placeholder="Text 입력" value={text} />
    </>
  );
};
export default Input;
