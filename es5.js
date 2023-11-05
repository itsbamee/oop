/*
const tit1 = document.querySelector('#tit1');
const tit2 = document.querySelector('#tit2');

changeSize(tit1, '100px');
changeSize(tit2, '50px');
changeColor(tit1, 'hotpink');
changeColor(tit2, 'lightblue');

//changeSize(el, 글자크기) 생성
function changeSize(el, size) {
	el.style.fontSize = size;
}
//changeColor(el, 글자색상) 생성
function changeColor(el, color) {
	el.style.color = color;
}
*/

//위의 코드처럼 객체지향으로 코드를 구조화시키지 않으면
//함수를 호출할 때마다 불필요한 전역변수 생성됨
//비슷한 성격의 함수들을 그룹화 할 수 없음

/*
  [ES5 버전의 객체지향 코드 변경 순서]

  1. 생성자함수 이름은 무조건 대문자로 시작
  2. 생성자함수로 전달된 인수값을 생성자 내부에서 this 객체에 옮겨담음 (불필요한 전역변수를 생성하지 않으면서 this 객체로 그룹화)
  3. 생성자 안쪽의 prototype에 재활용될 함수 등록
  4. 생성자함수를 new 연산자로 호출해서 prototype 메서드를 호출할 수 있는 instance 객체 생성
  
  -생성자 안쪽의 this 객체의 의미
  * 생성자로부터 인스턴스를 복사하기 전 : this -> window
  * 생성자로부터 인스턴스를 복사하기 후 (new) : this -> 해당 생성자로 복사된 인스턴스 객체를 의미
  앞으로 인스턴스 객체에 담아줄 의미
*/

function FontStyle(el) {
	this.el = document.querySelector(el);
}

FontStyle.prototype.changeSize = function (size) {
	this.el.style.fontSize = size;
};

FontStyle.prototype.changeColor = function (color) {
	this.el.style.color = color;
};

const instance1 = new FontStyle('#tit1');
const instance2 = new FontStyle('#tit2');

console.log(instance1);
// instance1.el = abc;
instance1.changeSize = function (el) {
	console.log(el);
};

instance1.changeColor('red');
instance2.changeColor('lightblue');
instance1.changeSize('100px');
instance2.changeSize('50px');

/*
  [기존 ES5 객체지향에서의 단점]
  1. 일반함수와 생성자함수의 구분이 애매함
  2. 일일이 생성자명에 prototype을 호출하고 메서드를 등록해야 되는 번거로움
  3. 인스턴스 객체에서 캡슐화 및 은닉화 안됨 (객체에 의도하지 않은 변형이 올 수 있음)
*/
