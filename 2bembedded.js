class Board {
  constructor() {
    this.matrix = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  place(row, column, player) {
    if ((this.matrix[row][column] = "")) {
      throw new Error("That space is already taken");
    } else if (player != "x" && player != "o") {
      throw new Error("You can only place an x or an o");
    } else {
      this.matrix[row][column] = player;
    }
  }

  isWinner() {
    if (this.matrix [0][0] == 'x' && this.matrix [0][1] == 'x' && this.matrix [0][2] == 'x')
    {
        return true;
    }
    if (this.matrix [1][0] == 'x' && this.matrix [1][1] == 'x' && this.matrix [1][2] == 'x')
    {
        return true;
    }
    if (this.matrix [2][0] == 'x' && this.matrix [2][1] == 'x' && this.matrix [2][2] == 'x')
    {
        return true;
    }
    if (this.matrix [0][0] == 'x' && this.matrix [1][0] == 'x' && this.matrix [2][0] == 'x')
    {
        return true;
    }
    if (this.matrix [0][1] == 'x' && this.matrix [1][1] == 'x' && this.matrix [2][1] == 'x')
    {
        return true;
    }
    if (this.matrix [0][2] == 'x' && this.matrix [1][2] == 'x' && this.matrix [2][2] == 'x')
    {
        return true;
    }
    if (this.matrix [0][0] == 'x' && this.matrix [1][1] == 'x' && this.matrix [2][2] == 'x')
    {
        return true;
    }
    if (this.matrix [0][2] == 'x' && this.matrix [1][1] == 'x' && this.matrix [2][0] == 'x')
    {
        return true;
    }
  }
}
