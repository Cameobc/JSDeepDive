# 07. 연산자(Operator)

### 1. 산술 연산자
- 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자값을 만든다. 산술 연산이 불가능한 경우 NaN을 반환한다.
- 이항 산술 연산자 : 2개의 피연산자를 산술 연산하여 숫자 값을 만든다.
    - +, -, *, /, %
- 단항 산술 연산자 : 1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
    - ++, --
- 문자열 연결 연산자 : + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작함
```javascript
    '1' + 2;    // '12'
    1 + '2';    // '12'
    1 + 2;      // 3
    1 + true;   // 2
    1 + false;  // 1
    1 + null;   // 1
    +undefined; // NaN
    1 + undefined;  // NaN
```

### 2. 할당 연산자
- 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당함.
    - =, +=, -=, *=, /=, %=

### 3. 비교 연산자
- 동등/일치 비교 연산자
    - ==(동등), ===(일치), !=(부동등), !==(불일치)
    - 동등 비교 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교함
    - NaN은 자신과 일치하지 않는 유일한 값으로 조사하기 위해선 빌트인 함수 isNaN을 사용함
    - 숫자 0은 양의 0과 음의 0을 비교할 때 true 를 반환한다.

### 4. 대소관계 비교 연산자
 - 피연산자의 크기를 비교하여 불리언 값을 반환한다
   - <, >, >=, <=

### 5. 삼항 조건 연산자
 - 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다.

### 6. 논리 연산자
 - 우항과 좌항의 피연산자를 논리 연산한다
   - ||, &&, !

### 7. 지수 연산자
  - 좌항의 피연산자를 밑으로 우항의 피연산자를 지수로 거듭 제곱하여 숫자 값을 반환한다
    - **
  - 이항 연산자 중 우선 순위가 가장 높다

### 8.그외의 것들
  - 쉼표 연산자, 그룹 연산자, typeOf 연산자

|연산자|개요|
|---|---|
|?.| 옵셔널 체이닝 연산자|
| ??| null 병합 연산자|
| delete| 프로퍼티 삭제|
| new| 생성자 함수를 호출할 때 사용하여 인스턴스를 생성|
| instanceof| 좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스인지 판별|
|in| 프로퍼티 존재 확인|
