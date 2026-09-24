// Game variables
let score = 0;
let cursors = 0;
let cursorCost = 10;

// DOM Elements
const scoreDisplay = document.getElementById("score");
const autoRateDisplay = document.getElementById("auto-rate");
const clickBtn = document.getElementById("click-btn");
const buyCursorBtn = document.getElementById("buy-cursor");
const cursorCostDisplay = document.getElementById("cursor-cost");

// Manual click functionality
clickBtn.addEventListener("click", () => {
    score++;
    updateUI();
});

// Buy upgrade functionality
buyCursorBtn.addEventListener("click", () => {
    if (score >= cursorCost) {
        score -= cursorCost;
        cursors++;
        cursorCost = Math.round(cursorCost * 1.15); // Increase next upgrade price by 15%
        updateUI();
    }
});

// Update the user interface
function updateUI() {
    scoreDisplay.innerText = score;
    autoRateDisplay.innerText = cursors;
    cursorCostDisplay.innerText = cursorCost;
    
    // Disable buy button if user can't afford it
    buyCursorBtn.disabled = score < cursorCost;
}

// Game loop: Passive automation execution (Runs once every second)
setInterval(() => {
    score += cursors;
    updateUI();
}, 1000);
