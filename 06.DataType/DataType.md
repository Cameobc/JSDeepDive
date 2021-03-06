# 06. 데이터 타입(Data Type)

### 1. 데이터 타입
- 값의 종류를 말하며 JS의 모든 값은 데이터 타입을 갖는다.
- JS는 7개의 데이터 타입을 제공하며 이는 원시 타입과 객체 타입으로 분류할 수 있다.

| 구분    | 데이터 타입 | 설명                                 |
|-------|--------|------------------------------------|
| 원시타입  | 숫자타입   | 숫자. 정수와 실수 구분 없이 숫자 타입만 존재         |
| 원시타입  | 문자열타입  | 문자열                                |
| 원시타입  | 불리언 타입 | 논리적 참과 거짓                          |
| 원시타입  | undefined | var, let 키워드로 선언된 변수에 암묵적으로 할당되는 값 |
| 원시타입  | null   | 값이 없다는 것을 의도적으로 명시할 때 사용하는 값       |
| 원시타입  | symbol | ES6에서 추가된 7번째 타입                   |
| 객체 타입 |  | 객체, 함수, 배열 등                       |

### 2. 숫자 티입(Number)
- 모든 수를 실수로 처리함
- 추가로 세 가지 특별한 값도 표현 가능하다
    - Infinity : 양의 무한대
    - -Infinity : 음의 무한대
    - NaN : 산술 연산 불가(Not A Number)

### 3. 문자열 타입(String)
- 작은따옴표, 큰따옴표 혹은 백틱으로 텍스트를 감싸서 표현함
- JS의 문자열은 변경 불가능한 값이다

### 4. 템플릿 리터럴
- 백틱을 사용하여 표현한다.
- 멀티라인 문자열(개행 문자를 쉽게 표현 가능)
 ```javascript
  let template = `<ul>
    <li><a href="#">Home</a></li>
  </ul>`;
```
- 표현식 삽입을 통해 문자열을 삽입 가능하다.
- 표현식을 사입하려면 ${} 로 표현식을 감싸며, 표현식의 평과 결과가 문자열이 아니더라도 문자열로 타입이 강제 변환되어 삽입된다.
- 표현식은 반드시 템플릿 리터럴 내에서 사용해야 하며, 템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급된다.
```javascript
    console.log(`1 + 2 = ${1 + 2}`);
    console.log('1 + 2 = ${1 + 2}');
```
### 5. 불리언 타입
- 논리적 참, 거짓을 나타내는 true, false

### 6. undefined 타입
- let, var 키워드로 선언한 변수는 암묵적으로 undefined 로 초기화된다
- 즉 변수를 참조했을 때 undefined 가 반환된다면 초기화된 적이 없는 변수라고 할 수 있다
- 변수에 값이 없다는 것을 명시하고 싶을 경우는 null 을 할당해야 한다.

### 7. null 타입
- null 을 할당하는 것은 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하는 것을 의미하며 이때 JS 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행할 것이다.
- 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null 을 반환하기도 한다.

### 8. 심벌 타입
- ES6 에서 추가된 타입으로 변경 불가능한 원시 타입이다.
- 다른 값과 중복되지 않는 유일무이한 값이기 때문에 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용함
- 심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 호출해 생성한다
- 생성된 심벌 값은 외부에 노출되지 않으며 다른 값과 중복되지 않는 유일무이한 값이다.
```javascript
    let key = Symbol('key');
    console.log(typeof key);
    
    let obj = {};
    obj[key] = 'value';
    console.log(obj[key]);
```

### 9. 데이터 타입의 필요성
- 메모리에 값을 저장하려면 확보해야 할 메모리 공간의 크기를 결정해야 함
- 값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정해야 함
- 메모리에서 읽어 들인 2진수를 어떻게 해석할 지 결정해야 함

### 10. 동적 타이핑
- C, JAVA 와 같은 정적 타입 언어는 컴파일 시점에 타입 체크를 수행하기 때문에 데이터 타입을 사전에 선언(명시적 타입 선언) 해야 함
- JS 는 정적 타입 언어와는 다르게 선언 이후 어떠한 값이라도 자유롭게 할당 가능하다
- 즉, JS 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론)되며, 재할당에 의해 변수의 타입이 언제든 동적으로 변할 수 있는 동적 타입 언어이다.
- 동적 타입 언어는 유연성은 높지만 신뢰성은 떨어진다는 단점이 존재함