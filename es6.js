class FontStyle {
	constructor(el, size, color) {
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
new FontStyle('#tit2', '50px', 'lightgreen');
