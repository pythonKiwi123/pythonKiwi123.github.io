import { baseObj, ctx, rotatePoint } from './index.js';
/**
 * The rectangle shape
 */
export class Rectangle extends baseObj {
    /**
     * @constructor
     * @param {number} width the rectangle's width
     * @param {number} height the rectangle's height
     * @param {number | undefined} x the rectangle's x-position
     * @param {number | undefined} y the rectangle's y-position
     * @param {string | undefined} color the rectangle's color
     * @param {number | undefined} rotation the rectangle's rotation in radians
     * @param {boolean | undefined} outline whether to outline the rectangle
     * @param {string | undefined} outlineColor the outline's color
     */
    constructor(width, height, x, y, color, rotation, outline, outlineColor) {
        super();
        this.x = x === 0 ? 0 : x || -1000;
        this.y = y === 0 ? 0 : y || -1000;
        this.color = color || "black";
        this.rotation = rotation || 0;
        this._width = width;
        this._height = height;
        this.outline = outline || false;
        this.outlineColor = outlineColor || 'black';
        this.type = 'Rectangle';
    }
    /**
     * The rectangle's width
     * @type {number}
     */
    set width(v) {
        this._width = v;
    }
    get width() {
        return this._width;
    }
    /**
     * Returns the width of the rectangle
   * @returns {number}
     */
    getWidth() {
        return this._width;
    }
    /**
     * The rectangle's height
     * @type {number}
     */
    set height(v) {
        this._height = v;
    }
    get height() {
        return this._height;
    }
    /**
     * Set the width and height of the rectangle
     * @param {number} width the rectangle's new width
     * @param {number} height the rectangle's new height
   * @returns {this}
     */
    setSize(width, height) {
        this._width = width;
        this._height = height;
        return this;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x + this._width / 2, this.y + this._height / 2);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.rect(-this._width / 2, -this._height / 2, this._width, this._height);
        ctx.fill();
        if (this.outline) {
            ctx.strokeStyle = this.outlineColor;
            ctx.lineWidth = this.outlineWidth;
            ctx.stroke();
        }
        ctx.restore();
    }
    containsPoint(x, y) {
        x -= this.x + this._width / 2;
        y -= this.y + this._height / 2;
        if (this.rotation !== 0) {
            let point = rotatePoint(x, y, this.rotation);
            x = point.x;
            y = point.y;
        }
        const oW = this.outline ? this.outlineWidth / 2 : 0;
        return -this._width / 2 - oW < x && x < this._width / 2 + oW && -this._height / 2 - oW < y && y < this._height / 2 + oW;
    }
}
;
//# sourceMappingURL=Rectangle.js.map