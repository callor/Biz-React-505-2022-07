# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- MySQL + Express + React + NodeJS 연동 프로젝트

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

## MySQL DB 연동하기

- MySQL DB 와 연동하기 위해 Dependency 설치

```
npm install mysql2
npm install sequelize
npm install moment
```

- Sequelize 도구 설치 : 반드시 관리자 권한에서 global 로 설치

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

- Sequelize 도구를 사용하여 mysql Db 연동 정보 자동화 : 터미널

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u callor -x '!Korea8080' -e mysql -l esm
```

- sequelize-auto 사용할때 끝에 `-l esm` 옵션을 생략하면 CommonsJS(ES5 이전)버전으로 모듈이 생성이 된다
- 사용자의 password 에 특수문자가 포함된 경우 반드시 작은따옴표로 묶어 줄것
- 선택사항들

```
-o 폴더 : model 설정 파일이 출력될곳
-d DB명 : 사용할 mysql DB
-h Host : MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속할 권한이 있는 사용자
-x PASSWORD : MySQL 접속 사용자 비번
-e mysql : 사용할 데이터베이스 소프트웨어(engine)
-l ems : ES6+ 버전으로 생성하기
-l es5 : ES5 버전으로 생성하기
-p PORTNUM : port 3306 이외의 다른포트로 사용하는 경우
```
