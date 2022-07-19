# React Navigation

- React 에서 메뉴화면 구현하기
- yarn add react-router-dom

## 일반적인 html 로 만든 메뉴와 react 메뉴 시스템의 차이점

- 일반적인 html 은 메뉴를 클릭하면 일단 서버로 요청이 되고, 서버에서 응답이 올때까지 화면에 delay 가 발생할 수 있다.
- 메뉴를 클릭하고 화면이 전환될때 만약 input box 무엇인가 입력하고 있는 중이라면 내용이 모드 clear 된다.
- React 의 메뉴시스템은 메뉴를 클릭해도 화면에 전환되는 부문만 바뀌고 나머지 부분은 그대로 유지 된다.
- react 에서의 화면은 메뉴가 있지만 single 화면으로 구성되어 있다.
