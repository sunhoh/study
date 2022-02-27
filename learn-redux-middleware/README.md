## Code Desc.

----

1. 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리.

2. 리덕스 관련 코드 작성하기
Ducks Pattern 사용. (Action type, Action creator, reducer를 기능 별로 한 파일 안에 작성하는 방식.)

3. 루트 리듀서 만들기 

4. React Application 리덕스 적용하기.

5. Redux DevTools Chrome Extention + redux-devtools-extension 설치.

6. thunk 모듈화하고 thunk에서 라우터 연동하기 
재활용성과 가독성을 위해서 모듈화 

7. json-server 
백엔드 없이 더미데이터를 만들어서 이용하자 
평소에는 그냥 더미 데이터는 만들고 가져다가만 쓰는 형식으로 했지만 포트까지 띄워서 통신까지 

$ npx json-server ./data.json --port 4000

$ yarn global add json-server
$ json-server ./data.json --port 4000

