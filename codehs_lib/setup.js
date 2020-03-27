const outputDiv = "output";
/**
 * The canvas everything is drawn to
 * @type {HTMLCanvasElement}
 */
export const canvas = createCanvas(outputDiv);
/**
 * The console println logs to
 * @type {HTMLPreElement}
 */
export const output = createConsole(outputDiv);
/**
 * The canvas context
 * @type {CanvasRenderingContext2D}
 */
export const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Error creating canvas context. Check that the canvas is loading correctly.");
}
function createCanvas(divId) {
    let div = document.getElementById(divId);
    if (!div) {
        throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
    }
    let c = document.createElement("canvas");
    c.height = 480;
    c.width = 400;
    c.id = "game";
    div.append(c);
    return c;
}
function createConsole(divId) {
    let div = document.getElementById(divId);
    if (!div) {
        throw new Error(`Cannot find any element with the id of "${divId}". Please create that div in your html file.`);
    }
    let p = document.createElement("pre");
    p.id = "console";
    div.append(p);
    return p;
}
/**
 * Returns the width of the canvas
 * @function
 */
export const getWidth = () => canvas.width;
/**
 * Returns the height of the canvas
 * @function
 */
export const getHeight = () => canvas.height;
/**
 * Set the width and height of the canvas
 * @param width {number} the canvas's new width
 * @param height {number} the canvas's new height
 * @function
 */
export const setSize = (width, height) => {
    canvas.width = width;
    canvas.height = height;
};
/**
 * Set the background color of the canvas
 * @param color {string} the new background color
 */
export const setBackgroundColor = (color) => {
    canvas.style.backgroundColor = color;
};
/**
 * Show the mouse over the canvas
 * @param cursor {string} (optional) the css cursor to show
 * @function
 */
export const showCursor = (cursor) => {
    canvas.style.cursor = cursor || 'default';
};
/**
 * Hide the mouse over the canvas
 * @function
 */
export const hideCursor = () => {
    canvas.style.cursor = 'none';
};
//# sourceMappingURL=setup.js.map