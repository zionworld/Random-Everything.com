const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearCanvas = document.getElementById("clearCanvas");
const downloadBtn = document.getElementById("downloadBtn");
const toggleDarkMode = document.getElementById("toggleDarkMode");

let isDrawing = false;
let drawHistory = [];
let redoHistory = [];
let currentColor = colorPicker.value;
let currentSize = brushSize.value;

// Resize Canvas
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

ctx.fillStyle = "#FFFFFF"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = currentSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function stopDrawing() {
    if (isDrawing) {
        drawHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        redoHistory = [];
    }
    isDrawing = false;
}

// Undo
undoBtn.addEventListener("click", () => {
    if (drawHistory.length > 0) {
        redoHistory.push(drawHistory.pop());
        ctx.putImageData(drawHistory[drawHistory.length - 1] || ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
    }
});

// Redo
redoBtn.addEventListener("click", () => {
    if (redoHistory.length > 0) {
        drawHistory.push(redoHistory.pop());
        ctx.putImageData(drawHistory[drawHistory.length - 1], 0, 0);
    }
});

// Eraser
eraserBtn.addEventListener("click", () => {
    currentColor = "#FFFFFF"; // White background
    canvas.style.cursor = "crosshair";
});

// Clear
clearCanvas.addEventListener("click", () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHistory = [];
    redoHistory = [];
});

// Change Brush Color & Size
colorPicker.addEventListener("change", (e) => currentColor = e.target.value);
brushSize.addEventListener("change", (e) => currentSize = e.target.value);

// Download Image
downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
});

// Dark Mode Toggle
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        canvas.style.background = "#FFF";
    } else {
        canvas.style.background = "#FFF";
    }
});

// Event Listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
