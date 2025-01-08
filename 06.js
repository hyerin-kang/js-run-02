/**
 * Q: hasNegative 함수
 *
 * - hasNegative 를 작성하세요.
 * - 파라미터로 받는 배열에 음수가 있는지 확인합니다. (some 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 *
 * Q: allPositive 함수
 *
 * - allPositive를 작성하세요.
 * - 파라미터로 받는 배열이 모두 양수인지 확인합니다. (every 사용)
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

// TODO: hasNegative 함수를 작성하세요.
function hasNegative(arr) {
  // 1. arr라는 [] 배열을 받는다.
  // 2. 배열중 음수가 있는지 확인한다(some으로)
  // 2-1 some()메서드 : 배열 안의 요소들이 조건에 하나라도 맞는지 테스트
  // 3. 반환한다.
  return arr.some((e) => e < 0);
}

// TODO: allPositive 함수를 작성하세요.
function allPositive(arr) {
  return arr.every((e) => e > 0);
  /*
1. arr이라는 숫자를 가지는 배열을 받는다.
2. 받아온 배열이 양수인지 확인한다. 양수면 true, 음수면 false
2-1 every() 메서드 : 배열 안의 모든 요소들이 함수 테스트를 통과하는지 테스트 > 불리언값 반환
3. boolean 형태를 반환한다.
- 파라미터로 받는 배열이 모두 양수인지 확인합니다. (every 사용)
@param {number[]} arr
@returns {boolean}
*/
}

// export를 수정하지 마세요.
export { hasNegative, allPositive };
