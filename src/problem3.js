// < 기능 목록 >
// 1. 1부터 number까지 손뼉을 몇 번 쳐야 하는지 구한다.
//    [예외처리] 한번에 박수를 여러번 쳐야하는 경우 -> 각 자릿수 숫자 중에서 3의 배수가 몇 개 있는지를 구한다.
//    [예외처리] 3으로 나누어 떨어지는 수 중 0은 제외

function problem3(number) {
  var answer = 0;
  while(number > 0) {
    var n = number % 10;
    if(n != 0 && n % 3 == 0) answer++;
    number = Math.floor(number/10); // 소수점 버림
  }

  return answer;
}

console.log(problem3(30));

module.exports = problem3;
