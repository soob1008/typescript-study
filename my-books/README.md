# React로 나의 책장 만들기 (TypeScript) 인강

### `npm start`

### Redux

**redux**  
상태 업데이트와 관련된 로직을 효율적으로 관리하는 라이브러리

**react-redux**  
redux 연동을 해서 사용하기 편리하도록 만든 라이브러리

**redux-saga**  
리덕스의 미들웨어.
러덕스가 액션을 수행하면 redux-saga에서 디스패치하여 redux의 액션을 가로챈 뒤,
액션의 역할을 수행하고 다시 액션을 발행하여 데이터를 저장하거나 다른 이벤트를 수행시킵니다.

**redux-devtools-extension**  
리덕스 개발자 도구.
현재 스토어의 상태를 개발자 도구에서 조회할 수 있고 지금까지 어떤 액션들이 디스패치 되었는지, 액션에 따라 상태가 어떻게 변화했는지 확인할 수 있습니다. 액션을 직접 디스패치할 수 도 있다.
(크롬 웹스토어에서 확장 프로그램을 설치)

**redux-actions**  
createAction , handleAction 등의 함수를 제공하며 액션 생성 자동화, 분기 코드 간소화 등의 작업을 도와주는 역할을 한다.

> npm i @types/react-redux @types/redux-actions -D

### antd

> npm i antd  
> npm i @ant-design/icons
