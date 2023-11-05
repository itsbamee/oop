class FontStyle {
	//파라미터를 안넣었을 때 default parameter 지정할 수도 있음
	constructor(el, size, color = 'hotpink') {
		this.el = document.querySelector(el);
		this.changeSize(size);
		this.changeColor(color);
	}
	changeSize(size) {
		this.el.style.fontSize = size;
	}
	changeColor(color) {
		this.el.style.color = color;
	}
}

new FontStyle('#tit1', '100px', 'pink');
new FontStyle('#tit2', '50px');
