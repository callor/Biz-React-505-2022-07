/*
DietMain 에서 전달받은 foods 를
props 에서 직접 분해하며(비구조화, spread) 직접
foods 변수에 받기
*/
const DietList = ({ params }) => {
  const { foods, removeFoodItem } = params;
  const removeEvent = (e, d_id) => {
    // 표준 JS 함수중에 react 에서 사용할수 없는 함수들이 일부 있다
    // 그중 confirm 함수도 자체지원이 되지 않아 browse 의 함수를
    // 호출하기 위해 window.confirm()
    if (window.confirm(d_id + "데이터 삭제??")) {
      removeFoodItem(d_id);
    }
  };

  // map 을 사용하여 foods 배열의 데이터를
  // tr, td 를 갖는 list body 요소르 생성하기
  const foodsBody = foods.map((food) => {
    return (
      <tr key={food.d_id}>
        <td>{food.d_date}</td>
        <td>{food.d_food}</td>
        <td>{food.d_qty}</td>
        <td>{food.d_cal}</td>
        <td>{food.d_qty * food.d_cal}</td>
        <td
          style={{ cursor: "pointer" }}
          onClick={(e) => removeEvent(e, food.d_id)}
        >
          &times;
        </td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>단위 칼로리</th>
          <th>총 칼로리</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{foodsBody}</tbody>
    </table>
  );
};
export default DietList;
