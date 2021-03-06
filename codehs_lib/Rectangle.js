/* eslint-disable */
import { baseObj, ctx, rotatePoint, checkColor, camera, canvas } from "./index.js";
/**
 * The rectangle shape
 */
export class Rectangle extends baseObj {
	constructor(width, height, x, y, color, rotation, outline, outlineColor) {
		super();
		this.x = x !== null && x !== void 0 ? x : 0;
		this.y = y !== null && y !== void 0 ? y : 0;
		this.color = color || "black";
		if (color && !checkColor(color)) {
			console.warn(`Your color of ${color} is not a valid color`);
			this.color = "black";
		}
		this.rotation = rotation || 0;
		this._width = width;
		this._height = height;
		this.outline = outline || false;
		this.outlineColor = outlineColor || "black";
		if (outlineColor && !checkColor(outlineColor)) {
			console.warn(`Your outline color of ${outlineColor} is not a valid color`);
			this.outlineColor = "black";
		}
		this.type = "Rectangle";
	}
	/**
	 * The rectangle's width
	 */
	set width(v) {
		this._width = v;
	}
	get width() {
		return this._width;
	}
	/**
	 * Returns the width of the rectangle
	 */
	getWidth() {
		return this.width;
	}
	/**
	 * Sets the width of the rectangle
	 * @param width the new width
	 */
	setWidth(width) {
		this.width = width;
		return this;
	}
	/**
	 * The rectangle's height
	 */
	set height(v) {
		this._height = v;
	}
	get height() {
		return this._height;
	}
	/**
	 * Returns the height of the rectangle
	 */
	getHeight() {
		return this.height;
	}
	/**
	 * Sets the height of the rectangle
	 * @param height the new height
	 */
	setHeight(height) {
		this.height = height;
		return this;
	}
	/**
	 * Set the width and height of the rectangle
	 * @param width the rectangle's new width
	 * @param height the rectangle's new height
	 */
	setSize(width, height) {
		this._width = width;
		this._height = height;
		return this;
	}
	draw() {
		const cx = this.still ? 0 : camera.x;
		const cy = this.still ? 0 : camera.y;
		ctx.save();
		ctx.beginPath();
		ctx.translate(this.x + this._width / 2 - cx, this.y + this._height / 2 - cy);
		ctx.rotate(this.rotation);
		ctx.rect(-this._width / 2, -this._height / 2, this._width, this._height);
		if (this.outline) {
			ctx.strokeStyle = this.outlineColor;
			ctx.lineWidth = this.outlineWidth;
			ctx.stroke();
		}
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}
	onScreen() {
		return (
			this.x + this.width >= camera.x &&
			this.x <= camera.x + canvas.width &&
			this.y + this.height >= camera.y &&
			this.y <= camera.y + canvas.height
		);
	}
	containsPoint(x, y) {
		x -= this.x + this._width / 2;
		y -= this.y + this._height / 2;
		if (this.rotation !== 0) {
			const point = rotatePoint(x, y, this.rotation);
			x = point.x;
			y = point.y;
		}
		const oW = this.outline ? this.outlineWidth / 2 : 0;
		return -this._width / 2 - oW < x && x < this._width / 2 + oW && -this._height / 2 - oW < y && y < this._height / 2 + oW;
	}
}
