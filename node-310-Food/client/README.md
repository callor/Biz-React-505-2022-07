# React 에서 외부 파일 연결결하기

- html 에서는 css, js 등을 link href 등을 사용하여 연결한다
- React public 폴더에 있는 index.html 파일에 css, js 등을 연결할수 있지만 React 에서는 권장하지 않는다.
- React 에서는 특히 css 파일을 src 폴더에 저장하고, index.js 또는 App.js(ReactJS.js) 파일에서 import 하여 사용하는 것을 권장한다
- React 프로젝트를 build(yarn build) 하면 css, js 파일들을 Transpiling 하여 build 폴더에 저장하는데, 대부분의 파일을 압축, 난독화 하여 저장한다
- 압축된 css, js 파일은 client 로 전송될때 용량이 상대적으로 작아저서 네트워에 전송된다
- public 폴더에 저장되거나 연결된 파일도 압축이 되기는 하지만 css, script 등을 외부 연결을 통해 사용하면 압축이 되지 않아 네트웨크에 노출되는 현상이 발생한다

## React 의 parents 와 child 간의 데이터 공유

- React 의 변수를 state 라고 하는데, state 변수는 부모가 만들고, child 가 공유하여 사용하는 구조이다
- 부모가 생성한 state 변수는 child 가 변경하거나 할 수 없다.
- state 변수를 어디에 생성할 것인가는 전체적인 구조를 확정하는 매우 중요한 사항이다.
- 일반적으로 state 변수는 부모 컴포넌트에서 생성하고, 부모 컴포넌트에서 변경하는 함수를 만들어서 child 에게 전파 하는 것이 좋다
