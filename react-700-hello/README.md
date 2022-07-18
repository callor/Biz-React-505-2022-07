# React 시작하기

## React Project 도구 설치

- nodejs 가 설치되어 있어야 한다.
- 관리자 권한으로 cmd 창을 열고 시작
- npm install -g create-react-app : 프로젝트 작성 도구 설치
- npm install -g yarn : 프로젝트 관리 도구 설치, npm 으로 대신해 된다.

## create-react-app 을 사용하여 프로젝트 생성

- create-react-app 프로젝트명 : 새로운 프로젝트 생성
- 생성된 프로젝트 폴더에서 터미널 열기
- yarn 실행 : update 실행하기
- yar start 실행 : 개발자 모드로 프로젝트 시작하기, 편집후 저장 하면 자동 재시작

## 최초 프로젝트 실행

- public/index.html 실행되고
- src/index.js 실행되고
- src/App.js 실행된다

## 컴포넌트

- html 에서 사용하는 tag 와 같은 이름의 도구가 있는데 이 도구들을 모두 컴포넌트라고 한다
- react 에서 기본으로 제공하는 컴포넌트는 첫글자가 모두 소문자이다
- 기본 컴포넌트를 모아서 하나의 파일에 구성하고, 만든 컴포넌트를 사용자 정의형 컴포넌트라고 한다
- 사용자 정의형 컴포넌트는 기본 컴포넌트와 혼동을 막기 위해서 첫글자를 대문자로 사용한다
- 사용자 정의형 컴포넌트는 확장자를 js 또는 jsx(Javascript Extention)
- 사용자 정의형 컴포넌트는 반시 export 해 주어야 한다
