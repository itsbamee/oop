/*
	객체를 생성하는 2가지 방법
	1. 객체 리터럴 방식 : const sutdent = {name:'david'..} 중괄호열어 직점 담는 것
	2. 생성자 함수 방식 : const student = new 생성자함수();
	생성자 함수는 결국 객체를 생성해주는 함수

	const 객체(인스턴스) = new 생성자함수();
	생성자를 통해서 만들어진 객체를 instance라고 한다.

	class 클래스명 {
		생성자함수(담길값1, 담길값2){
			this.키2 = 담길값1;
			this.키2 = 담길값2;
		}
	}
*/

class FontStyle {
	//두번째 인수로 boolean값 전달 시 해당 값은 this.isWeight라는 인스턴스 객체의 property에 등록되고
	constructor(el, isWeight = true) {
		this.el = document.querySelector(el);
		this.isWeight = true;
	}
	//isWeight라는 프로퍼티에 읽을 때 실행되는 메서드 (접근하는 순간에 실행되는 함수)
	get isWeight() {
		return this.value;
	}

	//isWeight라는 프로퍼티에 값을 담으려고 할 때 실행되는 메서드
	set isWeight(value) {
		this.value = value === true ? value : (value = true);
	}
	changeSize(size) {
		//해당 property값에 따라서 내부 메서드가 다르게 실행됨
		if (!this.isWeight) return console.error('not working...');
		this.el.style.fontSize = size;
	}
	changeColor(color) {
		this.el.style.color = color;
	}
}

const instance1 = new FontStyle('#tit1');

/*
	프로퍼티 접근자
	get : 생성자가 특정 프로퍼티를 읽을 때 실행되는 함수 등록 시
	set : 생성자가 해당 프로퍼티에 value값을 담으려고 할 때 실행될 함수 등록시

	프로퍼티 접근자 쓰는 이유?
	- 생성자 안쪽에서 함부로 변경이 안되는 프로퍼티를 인스턴스에서 변경하려고 할 때 변경하지 못하도록 강제하는 틀
*/
