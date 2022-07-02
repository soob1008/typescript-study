# typscript 초기 세팅

#### node.js

Chrome's V8 Javascript Engin을 사용하여, 자바스크립트를 해석하고 OS 레벨에서의 API를 제공하는 서버사이드 용 자바스크립트 런타임 환경

#### browser

HTML을 동적으로 만들기 위해 브라우저에서 자바스크립티를 해석하고, DOM을 제어할 수 있도록 하는 자바스크립트 런타임환경

## 1. 타입스크립트 컴파일러 설치

1. NPM

   > npm i typscript -g
   > 내 피씨 어디에서든 타입스크립트 사용
   > node_modules/.bin/tsc
   > tsc source.ts
   > 실행 source.ts(파일 이름)

2. Visual Studio plugin 설치

=> npm으로 설치하자.

### 2. 글로벌로 설치

> npm i typescript -g
> **실행**
> tsc test.ts
> js 파일이 생긴다.

#### 설정파일

> tsc --init
> tsconfig.json 파일이 생성된다.

#### 즉시 실행

> tsc -w
> 파일이 수정될 때마다 바로 반영

### 3. 프로젝트에 설치

> npm init -y
> npm i typscript
> npx tsc --init
> tsconfig.json을 만들어준다.
