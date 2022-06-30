function End(props) {
  // props 에서 name 변수를 분해하여 선언하기
  const { name } = props;

  return (
    <>
      <h3>Sub에서 받은 name = {name} </h3>
    </>
  );
}

export default End;
