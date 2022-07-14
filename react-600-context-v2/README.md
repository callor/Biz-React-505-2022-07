# React Props Drilling

- React Component 가 여러겹으로 감싸고 있을때, 상위 Component state 를 생성하고, 그 state 를 사용하여 하위(child) 컴포넌트들이 rendering 을 하거나 state 를 변경해야 하는 경우가 아주 많다
- 상위 Component 에서 여러겹의 하위 Component 로 state 를 전달할때 중간에 위치한 Component 들은 실제로를 필요하지 않지만 부모 Component 로 부터 props 로 받아서 자식 Component 에게 계속해서 props 를 Toss 해야하는 경우가 발생한다

* 이러한 Drilling 현상을 방지하기 위하여 Store 라는 개념이 생겨났다. Drilling 현상을 방지하기 위하여 기본 React 기능 외에 `Redux`, `Mobx`, `recoil` 등의 3rd part LIB 를 사용한다.
* 3rd part LIB 들이 오히려 React 를 학습하는 것보다 많은 어려운 경우가 많다. 그래서 React 에서는 Context.Provider 라는 도구를 제공하여 단지 Store 기능만을 수행하도록 마련을 해 놓았다

# React Context.Provider 를 사용하여 Drilling 문제 해결하기

- 3rd part LIB 를 사용하여 Drilling 문제를 해결 할수 있지만, 학습곡선 매우 커서 큰 프로젝트가 아니면 오히려 불편할 수 있다
- 현재 React 에서는 Context.Provider 를 사용하여 일부 문제를 해결할 수 있다
- 하지만 Context.Provider 를 무분별하게 사용한다면 Project 의 유지보수성이 떨어지는 문제가 발생할 수 있다.
- 또한 React 버전이 올라갈수록 여러가지 문제가 해결 되고 있기때문에 잘 선택해서 사용하면 좋은 도구가 된다.
- context-v0 에서는 일반적인 Drilling 이 적용되는 코드를 보았고 context-v2 에서는 매우 간단하게 Context.Provider 를 적용해 본다
