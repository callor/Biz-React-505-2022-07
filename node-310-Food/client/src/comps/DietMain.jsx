import DietInput from "./DietInput";
import DietList from "./DietList";
const DietMain = () => {
  return (
    <>
      <DietList />
      <DietInput />
    </>
  );
};

// 다른 컴포넌트에서 import 하기 위하여
// 함수를 export 해주기
export default DietMain;
