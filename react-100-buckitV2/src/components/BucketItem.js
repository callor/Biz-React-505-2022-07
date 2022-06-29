import React from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function BucketItem(props) {
  const { item, functions } = props;
  const { bucket_delete, bucket_flag_toggle, bucket_complete } = functions;
  return (
    <tr>
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
