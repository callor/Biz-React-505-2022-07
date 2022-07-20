# Nodejs + Express WAS( Web Application Server )

- EN Was 서버의 핵심 요소 : app.js 의 설정을
- Controller 역할 수행 : app.use("/", userRouter)와 app.use("/users", userRouter)
- http://localhost:3000/ 로 요청이 들어오면 indexRouter 에게 전달하고
- http://localhost:3000/users 로 요청이 들어오면 userRouter 에게 전달하라

## indexRouter

- routes/index.js 파일에 있다

## userRouter

- routes/user.js 파일에 있다
