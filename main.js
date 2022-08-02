import $ from "jquery";

//= showing pages ========================================
const showStart = () => {
  $("#startPage").show();
  $("#boardPage").hide();
  $("#endPageA").hide();
  $("#endPageB").hide();
  $("#die").hide();
};

const showBoard = () => {
  $("#startPage").hide();
  $("#boardPage").show();
  $("#endPageA").hide();
  $("#endPageB").hide();
  $("#die").show();
};

const showEndA = () => {
  $("#startPage").hide();
  $("#boardPage").hide();
  $("#endPageA").show();
  $("#endPageB").hide();
  $("#die").hide();
};

const showEndB = () => {
  $("#startPage").hide();
  $("#boardPage").hide();
  $("#endPageA").hide();
  $("#endPageB").show();
  $("#die").hide();
};

//= preparing to access canvas methods
const ctx = $("#boardPage")[0].getContext("2d");
console.log(ctx);

//= drawing game board
const drawRect = () => {
  ctx.fillStyle = "#709F9D";

  for (let j = 0; j < 500; j += 100) {
    for (let i = 0; i < 500; i += 100) {
      ctx.fillRect(i, j, 50, 50);
    }
  }

  for (let j = 50; j < 500; j += 100) {
    for (let i = 50; i < 500; i += 100) {
      ctx.fillRect(i, j, 50, 50);
    }
  }
};

const drawRect2 = () => {
  ctx.fillStyle = "#E2D7A7";

  for (let j = 0; j < 500; j += 100) {
    for (let i = 50; i < 500; i += 100) {
      ctx.fillRect(i, j, 50, 50);
    }
  }

  for (let j = 50; j < 500; j += 100) {
    for (let i = 0; i < 500; i += 100) {
      ctx.fillRect(i, j, 50, 50);
    }
  }
};

//= make array of box positions ============================
// create empty array
const arrPos = [];

// make function that generate a array of objects
const makeBoxPos = (index, x, y) => {
  const boxPos = {};
  boxPos.index = index;
  boxPos.x = x;
  boxPos.y = y;
  return boxPos;
};

// for loop to push each object into array
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i, i * 50 + 25, 475));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 10, 475 - i * 50, 425));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 20, i * 50 + 25, 375));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 30, 475 - i * 50, 325));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 40, i * 50 + 25, 275));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 50, 475 - i * 50, 225));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 60, i * 50 + 25, 175));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 70, 475 - i * 50, 125));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 80, i * 50 + 25, 75));
}
for (let i = 0; i < 10; i++) {
  arrPos.push(makeBoxPos(i + 90, 475 - i * 50, 25));
}

//* array of boxes
console.log(arrPos);

//= draw number in each box ===================================
const drawNum = () => {
  ctx.font = "12px Arial";
  ctx.fillStyle = "#4D413A";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  // first row of numbers
  for (let i = 0; i < 100; i++) {
    ctx.fillText(arrPos[i].index, arrPos[i].x, arrPos[i].y);
  }
};

//= draw snakes and ladders ==================================
const snakes = [
  [17, 7],
  [54, 34],
  [60, 55],
  [62, 19],
  [87, 36],
  [93, 76],
  [94, 73],
  [98, 79],
];

for (let i = 0; i < snakes.length; i++) {
  let diff = snakes[i][0] - snakes[i][1];
  snakes[i].push(diff);
}
console.log(snakes);

const fromSnake = snakes.map((element) => {
  return element[0];
});
console.log(fromSnake);

const toSnake = snakes.map((element) => {
  return element[1];
});
console.log(toSnake);

const diffSnake = snakes.map((element) => {
  return element[2] * -1;
});
console.log(diffSnake);

const ladders = [
  [2, 38],
  [4, 14],
  [9, 31],
  [21, 42],
  [28, 84],
  [51, 67],
  [72, 91],
  [78, 80],
];

for (let i = 0; i < ladders.length; i++) {
  let diff = ladders[i][0] - ladders[i][1];
  ladders[i].push(diff);
}
console.log(ladders);

const fromLadder = ladders.map((element) => {
  return element[0];
});
console.log(fromLadder);

const toLadder = ladders.map((element) => {
  return element[1];
});
console.log(toLadder);

const diffLadder = ladders.map((element) => {
  return element[2] * -1;
});
console.log(diffLadder);

const draw1Snake = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#904B60";
  ctx.stroke();
};

const drawAllSnakes = () => {
  for (let i = 0; i < snakes.length; i++) {
    draw1Snake(
      arrPos[snakes[i][0]].x,
      arrPos[snakes[i][0]].y,
      arrPos[snakes[i][1]].x,
      arrPos[snakes[i][1]].y
    );
  }
};

const draw1Ladder = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#4b5798";
  ctx.stroke();
};

const drawAllLadders = () => {
  for (let i = 0; i < ladders.length; i++) {
    draw1Ladder(
      arrPos[ladders[i][0]].x,
      arrPos[ladders[i][0]].y,
      arrPos[ladders[i][1]].x,
      arrPos[ladders[i][1]].y
    );
  }
};

//= player1 mechanics ===========================================
const player1RollArray = [];
const player1Roll = (num) => {
  player1RollArray.push(num);
  console.log(player1RollArray);

  // array -> reduce array - calculate player position
  let player1Position = player1RollArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log("player 1 current index", player1Position);
  // need to calculate both players positions
  let player2Position = player2RollArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log("player 2 current index", player2Position);

  //! animation of frames
  // for  (let i = player1Position - num ; i <= player1Position; i++){
  //   drawPlayer1(player1Position)
  // }

  if (
    player1Position === 17 ||
    player1Position === 54 ||
    player1Position === 60 ||
    player1Position === 62 ||
    player1Position === 87 ||
    player1Position === 93 ||
    player1Position === 94 ||
    player1Position === 98
  ) {
    let addDiffSnake = diffSnake[fromSnake.indexOf(player1Position)];
    player1RollArray.push(addDiffSnake);

    player1Position = player1RollArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    console.log("player 1 NEW current index", player1Position);
  } else if (
    player1Position === 2 ||
    player1Position === 4 ||
    player1Position === 9 ||
    player1Position === 21 ||
    player1Position === 28 ||
    player1Position === 51 ||
    player1Position === 72 ||
    player1Position === 78
  ) {
    let addDiffladder = diffLadder[fromLadder.indexOf(player1Position)];
    player1RollArray.push(addDiffladder);
    // replace player position
    player1Position = player1RollArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    console.log("player 1 NEW current index", player1Position);
  }

  //before drawing check the win condition first
  if (player1Position >= 99) {
    showEndA();
  }
  drawPlayer1(player1Position);
  drawPlayer2(player2Position);
};

//= player2 mechanics ===========================================
const player2RollArray = [];
const player2Roll = (num) => {
  player2RollArray.push(num);
  console.log(player2RollArray);
  // array -> reduce array
  let player1Position = player1RollArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log("player 1 current index", player1Position);
  // need to calculate both players positions
  let player2Position = player2RollArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log("player 2 current index", player2Position);
  //before drawing get the win condition first
  //
  //
  if (
    player2Position === 17 ||
    player2Position === 54 ||
    player2Position === 60 ||
    player2Position === 62 ||
    player2Position === 87 ||
    player2Position === 93 ||
    player2Position === 94 ||
    player2Position === 98
  ) {
    let addDiffSnake = diffSnake[fromSnake.indexOf(player2Position)];
    player2RollArray.push(addDiffSnake);

    player2Position = player2RollArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  } else if (
    player2Position === 2 ||
    player2Position === 4 ||
    player2Position === 9 ||
    player2Position === 21 ||
    player2Position === 28 ||
    player2Position === 51 ||
    player2Position === 72 ||
    player2Position === 78
  ) {
    let addDiffladder = diffLadder[fromLadder.indexOf(player2Position)];
    player2RollArray.push(addDiffladder);
    player2Position = player2RollArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }

  if (player2Position >= 99) {
    showEndB();
  }
  drawPlayer1(player1Position);
  drawPlayer2(player2Position);
};

//= draw players 1 and 2 ===================================
const drawPlayer1 = (num) => {
  let i = num;
  ctx.beginPath();
  ctx.arc(arrPos[i].x, arrPos[i].y, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "#d45979";
  ctx.fill();
  ctx.font = "bold 12px Arial";
  ctx.fillStyle = "#4D413A";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("A", arrPos[i].x, arrPos[i].y);
};

const drawPlayer2 = (num) => {
  let i = num;
  ctx.beginPath();
  ctx.arc(arrPos[i].x, arrPos[i].y, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "#76679E";
  ctx.fill();
  ctx.font = "bold 12px Arial";
  ctx.fillStyle = "#4D413A";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("B", arrPos[i].x, arrPos[i].y);
};

//= take turns using counter ================================
let counter = 1;
const takeTurns = () => {
  counter++;
  console.log("counter", counter);
};

//todo snake and ladder logic

//todo how to not overlap dice with board
//todo how to move the piece after landed on the square
//todo

//========================MAIN==============================
const main = () => {
  //= start
  //showStart(); //! final should showStart
  showBoard();
  //showEndB();

  //= buttons to next page
  $("#startButton").on("click", showBoard);
  $(".endButton").on("click", () => {
    location.reload(true);
  });

  //= draw game board and numbers
  drawRect();
  drawRect2();
  drawNum();
  //= draw snakes and ladders
  drawAllSnakes();
  drawAllLadders();

  //= draw players initial position
  drawPlayer1(0);
  drawPlayer2(0);

  //= roll dice
  $("#dieButton").on("click", () => {
    let ranNum = Math.floor(Math.random() * 6 + 1);
    $("#showDie").text(ranNum);
    console.log("die number is", ranNum);

    //= redraw game board and numbers
    drawRect();
    drawRect2();
    drawNum();
    drawAllSnakes();
    drawAllLadders();

    //= run players and draw players
    if (counter % 2 === 1) {
      player1Roll(ranNum);
    } else {
      player2Roll(ranNum);
    }

    //= add to counter
    takeTurns();
  });
};

//======================MAINEND============================
$(main);
