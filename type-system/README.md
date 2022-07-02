# 타입시스템

- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
  두 가지로 나뉜다.

## 타입스크립트 시스템

- 타입을 명시적으로 지정할 수 있다.
- 지정하지 않으면 컴파일러가 자동으로 타입을 추론한다.

### 타입 스크립트의 추론에 의지하는 경우

```typescript
/*
    타입스크립트 코드지만,
    a의 타입을 명시적으로 지정하지 않은 경우엔 a는 any로 추론됩니다.
    함수의 리턴 타입을 number로 추론됩니다. (NaN도 number의 하나입니다.)
*/

function f3(a) {
  return a * 10;
}
// 사용자는 a가 any이기 때문에, 사용법에 맞게 문자열을 사용하여 함수를 실행했습니다.
console.log(f3(10)); // 100
console.log(f3("sbkim" + 5)); //NaN
```

any로 추론되지 않도록 수정한다.

#### noImplicitAny 옵션

타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 **any**라고 판단하게 되면 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

```typescript
/*
   error TS7006: Parameter 'a' implicitly has an 'any' type.
*/
function f3(a) {
  return a * 10;
}
// 사용자의 코드를 실행할 수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 합니다.
console.log(f3("sbkim" + 5));
```

#### number 타입으로 추론된 리턴 타입

```typescript
//매개변수 타입은 명시했습니다.
//명시적으로 지정하지 않은 리턴 타입은 number로 추론됩니다.
function f4(a: number) {
  return a * 10;
}
//해당 함수의 리턴 타입이 넘버이기 때문에 연산을 할 수 있습니다.
//하지만 실제론 undefined + 5 => NaN이 됩니다.
console.log(f4(2) + 5); // undefined + 5 => NaN
```

#### strictNullChecks 옵션

모든 타입에 자동으로 포함되어 있는 **null**과 **undefined**를 제거해줍니다.

```typescript
function f4(a: number) {
  return a * 10;
}

console.log(f4(2) + 5); // error
```

#### 명시적으로 리턴 타입 지정

```typescript
function f5(a: number): number {
  if (a > 0) {
    return a * 10;
  }
}
```

조건문이 아닌 경우엔 리턴 값이 없다.
Not all code paths return a value.

#### noImplicitReturns 옵션

함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.

### 나만의 타입을 만드는 방법

```typescript
interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
};

function f8(a: PersonInterface): string {
  return `이름은 ${a.name}이고 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}

console.log(f8({ name: "sbkim", age: 22 }));
console.log(f8("sbkim")); // error : Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
```
