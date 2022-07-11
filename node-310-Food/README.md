# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- MongoDB + Express + MongoDB + React + NodeJS 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 : express-21c node-310-Food
- 프로젝트 폴더에서 : npm install

## React Frontend Project 를 생성하기 위하여

- node-310-Food 폴더에서 React client 생성
- client 폴더에서 터미널 열기
- yarn 실행하여 update
- yarn build 실행하여 build 생성하기
- node-310-Food/client/build 폴더 생성 확인

## nodeJS 에서 client 인식시키기

- nodejs-310-Food/app.js 파일 열기
- `app.use(express.static(path.join('./client/build')));` 변경하기
- `app.use('/', indexRouter);` 라인 삭제 또는 주석처리
- nodejs-310-Food 폴더에서 서버 Start : nodemon 실행하기
- Web Browser 에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- App._ 으로 시작되는 파일을 모두 ReactJS._ 로 변경

## MongoDB 연동하기

- mongoose dependency 설치 : npm install mongoose
- 날짜와 시간 도구 설치 : client/yarn add moment
- UUID Key 생성 도구 설치 : client/yarn add react-uuid
