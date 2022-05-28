
let userId = 1;
let UserName = 'Lee';
let user = {id : 1, name: 'Lee'};
let users = [
    {id : 1, name: 'Lee'},
    {id : 2, name: 'Kim'}
];

console.log(users);

// 두 개 이상의 문자가 이어질 경우 카멜 케이스 추천
let firstName;

// 옵셔널 체이닝 연산자
// 좌항의 피연산자가 null || undefined 인 경우 undefined 반환
let elem = null;
let value = elem?.value;
console.log(value);

value = elem && elem.value;
console.log(value);

let str = '';
let length = str?.length;
console.log(length);

//null 병합 연산자
// ?? 좌항의 피연산자가 null 또는 undefined 인 경우 우항의 피연산자를 반환
let foo = null ?? 'default value';
console.log(foo);
foo = undefined ?? 'default valueeee';
console.log(foo);