class FontStyle {
	constructor(el) {
		this.el = document.querySelector(el);
	}
	changeSize(size) {
		this.el.style.fontsize = size;
	}
	changeColor(color) {
		this.el.style.color = color;
	}
}

const el1 = new FontStyle('#tit1');
el1.changeSize('100px');
el1.changeColor('hotpink');
