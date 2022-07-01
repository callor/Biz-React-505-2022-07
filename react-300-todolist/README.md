# TodoList Project

## Components 구조

- TodoMain 이 TodoInput 과 TodoList 를 감싸고 있고
- TodoInput과 TodoList 는 같은 level 에 있다

```
|---------TodoMain-----------|
|                            |
|   |-----TodoInput----|     |
|   |-----TodoList-----|     |
|                            |
|----------------------------|
```

## 데이터 흐름 정의

- TodoInput 에서 데이터를 입력하고 추가를 하면 todoList 배열에 추가하고
- todoList 배열은 TodoList 에서 표출한다
- TodoInput 와 TodoList 가 Parents-child 관계에 있다면 TodoInput 에서 todoList State 에 값을 추가하면 자연히 TodoList 에 변경된 값이 표출 될 것이다 하지만 2개의 Compoent 가 같은 level 에 있기 때문에 TodoInput 에서 todoList State 를 정의하면 데이터를 공유하는데 어려움이 있다
- 이러한 경우는 TodoMain 에서 todotList State 를 선언하고 TodoInput 과 TodoList 가 공유할 수 있는 방법으로 진행해야 한다

## todoList State 의 추가

- TodoMain 에서 todoList State 를 선언하고, 데이터를 입력하는 함수를 선언하여 데이터를 입력하는 함수를 TodoInput 에 props 로 전달해 주어야 한다
- TodoInput 은 input box 에 입력된 데이터를 TodoMain 으로 부터 전달받은 함수를 통해 TodoMain 에 선언된 todoList State 에 추가하는 과정이 필요하다
