const paintBucket = (input, pixel, prevColor, newColor) => {
  const row = pixel[0];
  const col = pixel[1];

  if (input[row][col] != prevColor) return;
  const splitRow = input[row].split("");
  splitRow[col] = newColor;

  input[row] = splitRow.join("");

  if (row > 0) {
    paintBucket(input, [row - 1, col], prevColor, newColor);
  }

  if (row < input.length - 1) {
    paintBucket(input, [row + 1, col], prevColor, newColor);
  }

  if (col > 0) {
    paintBucket(input, [row, col - 1], prevColor, newColor);
  }

  if (col < input[0].length - 1) {
    paintBucket(input, [row, col + 1], prevColor, newColor);
  }

  return input;
};

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

describe("PaintBucket", () => {
  it("should paint the line", () => {
    const input = [".###..", ".#..#.", ".###..", ".#...."];

    const expectedOutput = [".OOO..", ".O..#.", ".OOO..", ".O...."];

    expect(paintBucket(input, [0, 1], input[0][1], "O")).toStrictEqual(expectedOutput);
  });

  it("should paint another thing", () => {
    const input = [".###.", ".#..#.", ".###..", ".#...."];

    const expectedOutput = [".###.", ".#oo#.", ".###..", ".#...."];

    expect(paintBucket(input, [1, 3], input[1][3], "o")).toStrictEqual(
      expectedOutput
    );
  })

  it("should paint another thing", () => {
    const input = [".###.", ".#..#.", ".###..", ".#...."];

    const expectedOutput = [".###.", ".####.", ".###..", ".#...."];

    expect(paintBucket(input, [1, 3], input[1][3], "#")).toStrictEqual(
      expectedOutput
    );
  });
});
