import React from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function BucketItem(props) {
  const { item, functions } = props;
  const { bucket_delete, bucket_flag_toggle, bucket_complete } = functions;
  /*
  react code 에서 Component 간의 계층구조가 매우 복잡할 수 있다
  복잡한 계층구조에서 데이터의 CRUD 를 구현할때
  데이터를 표촐하기 위하여 변수={값} 형식으로 자식 comp 에게 전달하고
  자식 comp는 props 를 통해 데이터를 받아서 표출한다
  이때 만약 자식 comp 에서 부모 comp 가 생성 선언한 state 변수를 변경해야할
  경우가 발생하면
  부모 comps 에서 state 변수를 변경하는 함수를 함께 만들어
  자식 comps 에게 전달해 주어야 한다

  지금 <td onClick = {()=>bucket_complet(id)}> 의 코드를 보면
  현재 화면(comp) 에 선언된 td 가 클릭되었을때 bucket_complete 함수를 
  실행하고 있지만 이 함수는 BucketMain 에서 만들어 내려보낸 함수이다

  */
  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      <td>{item.b_bucket}</td>
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}

export default BucketItem;
