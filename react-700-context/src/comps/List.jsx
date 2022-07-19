import { useAppContext } from "../context/AppContext";
import Item from "./Item";
const List = () => {
  const { text, bucketList } = useAppContext();

  const bucketBody = bucketList.map((bucket) => {
    return <Item bucket={bucket} />;
  });

  return (
    <>
      <h3>{text}</h3>
      <ul>{bucketBody}</ul>
    </>
  );
};

export default List;
