import { add, remove } from './index.js';
/**
 * The base shape that all other shapes inherit from
 */
export class baseObj {
    /**
     * @constructor
     */
    constructor() {
        this._x = -1000;
        this._y = -1000;
        this._color = "black";
        this._type = "Thing";
        this._rot = 0;
        this._outline = false;
        this._outlineColor = 'black';
        this._outlineWidth = 1;
    }
    toString() {
        return `${this.type} at (${this._x}, ${this._y})`;
    }
    /**
     * The type of the shape
     * @type {string}
     */
    set type(v) {
        this._type = v;
    }
    get type() {
        return this._type;
    }
    /**
     * Returns the type of the Shape
     */
    getType() {
        return this._type;
    }
    /**
     * Sets the shape to the position (`x`, `y`)
     * @param x {number} new x-coordinate of the shape
     * @param y {number} new y-coordinate of the shape
     */
    setPosition(x, y) {
        this._x = x;
        this._y = y;
        return this;
    }
    /**
     * Sets the color of the shape to `color`
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setColor(color) {
        this._color = color;
        return this;
    }
    setOutline(show, color, width) {
        this._outline = show;
        this._outlineColor = color || this._outlineColor;
        this._outlineWidth = width || this._outlineWidth;
        return this;
    }
    setBorder(show, color, width) {
        this._outline = show;
        this._outlineColor = color || this._outlineColor;
        this._outlineWidth = width || this._outlineWidth;
        return this;
    }
    /**
     * Sets the color of the shape's outline to `color`
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setOutlineColor(color) {
        this._outlineColor = color;
        return this;
    }
    /**
     * Sets the color of the shape's outline to `color` (same as setOutlineColor)
     * @param color {string} css color, hexadecimal string, or rgba() string
     */
    setBorderColor(color) {
        this._outlineColor = color;
        return this;
    }
    /**
 * Sets the width of the shape's outline to `width`
 * @param width {number} the new widthoo of the outline
 */
    setOutlineWidth(width) {
        this._outlineWidth = width;
        return this;
    }
    /**
     * Sets the width of the shape's outline to `width` (same as setOutlineWidth)
     * @param width {number} the new widthoo of the outline
     */
    setBorderWidth(width) {
        this._outlineWidth = width;
        return this;
    }
    /**
     * Whether or not to draw outline
     * @type {boolean}
     */
    set outline(v) {
        this._outline = v;
    }
    get outline() {
        return this._outline;
    }
    /**
     * Whether or not to draw outline (same as borderWidth)
     * @type {number}
     */
    set borderWidth(v) {
        this._outlineWidth = v;
    }
    get borderWidth() {
        return this._outlineWidth;
    }
    /**
     * Whether or not to draw outline
     * @type {number}
     */
    set outlineWidth(v) {
        this._outlineWidth = v;
    }
    get outlineWidth() {
        return this._outlineWidth;
    }
    /**
     * Whether or not to draw outline (same as outline)
     * @type {boolean}
     */
    set border(v) {
        this._outline = v;
    }
    get border() {
        return this._outline;
    }
    /**
     * The outline's color
     * @type {string}
     */
    set outlineColor(v) {
        this._outlineColor = v;
    }
    get outlineColor() {
        return this._outlineColor;
    }
    /**
     * The outline's color (same as outlineColor)
     * @type {string}
     */
    set borderColor(v) {
        this._outlineColor = v;
    }
    get borderColor() {
        return this._outlineColor;
    }
    /**
     * The shape's x-position
     * @type {number}
     */
    set x(v) {
        this._x = v;
    }
    get x() {
        return this._x;
    }
    /**
     * method to return the shapes x-position
     */
    getX() {
        return this._x;
    }
    /**
     * The shape's y-position
     * @type {number}
     */
    set y(v) {
        this._y = v;
    }
    get y() {
        return this._y;
    }
    /**
     * method to return the shapes y-position
     */
    getY() {
        return this._y;
    }
    /**
     * Move a shape `dx` pixels right and `dy` pixels left
     * @param dx {number} pixels to move along the x-axis
     * @param dy {number} pixels to move along the y-axis
     */
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        return this;
    }
    /**
     * The shape's rotation in degrees
     * @type {number}
     */
    set rotationDegrees(r) {
        this._rot = r * Math.PI / 180;
    }
    get rotationDegrees() {
        return this._rot * 180 / Math.PI;
    }
    /**
     * Rotate the shape by `degrees` degrees
     * @param degrees {number} number of degrees to rotate it by
     */
    rotateDegrees(degrees) {
        this._rot += degrees * Math.PI / 180;
        return this;
    }
    /**
     * The shape's rotation in radians
     * @type {number}
     */
    set rotation(r) {
        this._rot = r;
    }
    get rotation() {
        return this._rot;
    }
    /**
     * Rotate the shape by `radians` radians
     * @param radians {number} number of degrees to rotate it by
     */
    rotate(radians) {
        this._rot += radians;
        return this;
    }
    /**
     * Returns the shapes rotation in radians
     */
    getRotation() {
        return this._rot;
    }
    /**
     * Returns the shapes rotation in degrees
     */
    getRotationDegrees() {
        return this._rot * 180 / Math.PI;
    }
    /**
     * The shape's color
     * @type {string}
     */
    set color(v) {
        this._color = v;
    }
    get color() {
        return this._color;
    }
    /**
     * Returns the shape's color
     */
    getColor() {
        return this._color;
    }
    /**
     * adds the shape to the canvas
     */
    add() {
        add(this);
        return this;
    }
    /**
     * removes the shape from the canvas
     */
    remove() {
        remove(this);
        return this;
    }
    /**
     * Returns a boolean to check if the shape contains the point (`x`, `y`)
     * @param x {number} x-position of point
     * @param y {number} y-position of point
     */
    containsPoint(x, y) {
        return false;
    }
    /**
     * Method called to draw the shape on the screen
     */
    draw() {
    }
}
//# sourceMappingURL=baseObj.js.map