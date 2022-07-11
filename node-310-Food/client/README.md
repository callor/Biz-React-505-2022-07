# React 에서 외부 파일 연결결하기

- html 에서는 css, js 등을 link href 등을 사용하여 연결한다
- React public 폴더에 있는 index.html 파일에 css, js 등을 연결할수 있지만 React 에서는 권장하지 않는다.
- React 에서는 특히 css 파일을 src 폴더에 저장하고, index.js 또는 App.js(ReactJS.js) 파일에서 import 하여 사용하는 것을 권장한다
- React 프로젝트를 build(yarn build) 하면 css, js 파일들을 Transpiling 하여 build 폴더에 저장하는데, 대부분의 파일을 압축, 난독화 하여 저장한다
- 압축된 css, js 파일은 client 로 전송될때 용량이 상대적으로 작아저서 네트워에 전송된다
- public 폴더에 저장되거나 연결된 파일도 압축이 되기는 하지만 css, script 등을 외부 연결을 통해 사용하면 압축이 되지 않아 네트웨크에 노출되는 현상이 발생한다
