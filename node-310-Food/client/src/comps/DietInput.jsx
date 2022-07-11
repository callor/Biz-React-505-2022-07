const DietInput = () => {
  return (
    <>
      <input type="date" name="d_date" />
      <input type="text" name="d_food" placeholder="메뉴를 입력하세요" />
      <input type="text" name="d_qty" placeholder="섭취수량을 입력하세요" />
      <input type="text" name="d_cal" placeholder="단위 칼로리를 입력하세요" />
      <button>저장하기</button>
    </>
  );
};
export default DietInput;
