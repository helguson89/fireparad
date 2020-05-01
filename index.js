var player = 1 // 1 for player yellow, 2 for red

var grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

// A function used to add a token (when possible) based on the selected column
function selectColumn(col) {




  //Check if bottom row is full
  if (grid[5][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[5][col] = 1;

      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[5][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else if (grid[4][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[4][col] = 1;
      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[4][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else if (grid[3][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[3][col] = 1;
      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[3][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else if (grid[2][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[2][col] = 1;
      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[2][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else if (grid[1][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[1][col] = 1;
      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[1][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else if (grid[0][col] == 0) {
    if (player == 1) {
      //Adds  yellow to row 5, selected column
      grid[0][col] = 1;
      //Changes to other player
      player = 2

      //Change text
      document.getElementById("colorTurn").innerHTML = "Rød spiller";
    } else {
      //Add red to row 5, selected column
      grid[0][col] = 2;
      player = 1;
      document.getElementById("colorTurn").innerHTML = "Gul spiller";
    }
  } else {
    alert("Kolonnen er full, velg en annen");
  }


  //It should then check if after placing the token the game continues or if the player has aligned 4 tokens.
  //Finally it should check if the grid is full (Game ends on a draw!)
  checkWin();
  refreshGrid();


}

//A function used to refresh the grid on scree
function refreshGrid() {
  //Cycle through rows
  for (var row = 0; row < 6; row++) {
    //Cycle through columns
    for (var col = 0; col < 7; col++) {
      if (grid[row][col] == 0) {
        //if no color, make it white
        document.getElementById("cell" + row + col).style.background = "#FFFFFF";
      } else if (grid[row][col] == 1) {
        // if row and col = 1, turn it yellow
        document.getElementById("cell" + row + col).style.background = "#FFFF00";
      } else if (grid[row][col] == 2) {
        document.getElementById("cell" + row + col).style.background = "#FF0000";
      }

    }
  }
}

function resetGrid() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      grid[row][col] = 0;
    }

  }
  refreshGrid();
  player = 1;
  document.getElementById("colorTurn").innerHTML = "Gul spiller";
  document.getElementById("headline").style.fontSize = "40px";
  document.getElementById("headline").innerHTML = "Fire på rad";
}

function checkWin() {
  //Check left to right
  //Check for player 1 and 2
  for (i = 1; i <= 2; i++) {
    //CHeck first 3 rows
    for (col = 0; col <= 3; col++) {
      for (row = 0; row <= 5; row++) {
        //Check if the row matches current player
        if (grid[row][col] == i) {
          if ((grid[row][col + 1] == i) && (grid[row][col + 2] == i) && grid[row][col + 3]) {
            winning();
          }
        }
      }
    }
  }

  //Check top to bottom
  //Check for player 1 and 2
  for (i = 1; i <= 2; i++) {
    //CHeck first 3 rows
    for (col = 0; col <= 6; col++) {
      for (row = 0; row <= 2; row++) {
        //Check if the row matches current player
        if (grid[row][col] == i) {
          if ((grid[row + 1][col] == i) && (grid[row + 2][col] == i) && grid[row + 3][col]) {
            winning();
          }
        }
      }
    }
  }

  //Check diagonal down
  //Check for player 1 and 2
  for (i = 1; i <= 2; i++) {
    //Check first 3 rows
    for (col = 0; col <= 3; col++) {
      //Check the bottom most collumn
      for (row = 0; row<=2; row++) {
        //Check for a match
        if(grid[row][col] == i){
          if ((grid[row+1][col+1] == i) && (grid[row+2][col+2]) == i && (grid[row+3][col+3] == i)) {
            winning();
          }
        }
      }
    }
  }

  //Check diagonal up
  //Check for both players
  for (i= 1; i<= 2; i++) {
    //check first 3 rows
    for (col = 0; col <=3; col ++) {
      //check the bottom most columns
      for (row = 3; row<=5; row++) {
        //Check for matche
        if (grid[row][col] == i){
          if((grid[row-1][col+1] == i) && (grid[row-2][col+2]) && (grid[row-3][col+3])){
            winning();
          }
        }
      }
    }
  }
}

function winning(){
  if(player = 1){
  document.getElementById("headline").style.fontSize = "150px";
  document.getElementById("headline").innerHTML = "Fire på rad!";
}

}
