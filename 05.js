/**
 * Q: findUserByName 함수
 *
 * - findUserByName을 작성하세요.
 * - 파라미터로 받는 배열에서 name이 일치하는 첫 객체를 반환합니다. (find 사용)
 * - 없다면 null 반환.
 *
 users = {name:string} 이 [] 안에 있따
 [{name: string}, {name: string} ]
 name : 문자열

 const users = [{name: "혜린'}, {name: '재혁'}];

const name = '재혁';
function findUserByName(users, name) { };
findByUserName([{name: "혜린'}, {name: '재혁'}], '재혁');
 * @param {{name:string}[]} users
 * @param {string} name
 * @returns {{name:string}|null}
 *
 * Q7.6.1: findIndexOf 함수
 *
 * - findIndexOf를 작성하세요.
 * - 파라미터로 받는 배열에서 value와 일치하는 첫 인덱스를 반환합니다. (findIndex 사용)
 * - 값이 없으면 -1을 반환합니다.
 *
 * @param {any[]} arr
 * @param {any} value
 * @returns {number}
 * 
 */

// TODO: findUserByName 함수를 작성하세요.
function findUserByName(users, name) {
  let user = users.find((user) => user.name === name);
  if (user == undefined) return null;
  return user;
}

// TODO: findIndexOf 함수를 작성하세요.
/*
Array 인스턴스의 findIndex() 메서드
주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
arr.findIndex(callback(element, index, array) {조건에 맞는 요소를 찾으면 true 반환});
*/
function findIndexOf(arr, value) {
  //arr의 배열 중에 value값과 일치하는것의 인덱스를 반환하라.
  let findVal = arr.findIndex((e) => e == value);
  if (!findVal) return -1;
  return findVal;
}
/*
* - findIndexOf를 작성하세요.
* - 파라미터로 받는 배열에서 value와 일치하는 첫 인덱스를 반환합니다. (findIndex 사용)
* - 값이 없으면 -1을 반환합니다.

파라미터로 받는 배열
const arr = [] // 아무 형태든 상관 없다.
value = any //아무 형태든 상관없다.
리턴값은 숫자.

@param {any[]} arr
@param {any} value
@returns {number}
*/

// export를 수정하지 마세요.
export { findUserByName, findIndexOf };
