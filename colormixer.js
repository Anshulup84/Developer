function mixColors(color1, color2) {
  // Convert color strings to lowercase for case-insensitive matching
  color1 = color1.toLowerCase();
  color2 = color2.toLowerCase();

  // Initialize the resulting color
  let resultColor;

  // Perform color mixing based on the provided colors
  switch (color1) {
    case "red":
      switch (color2) {
        case "red":
          resultColor = "red";
          break;
        case "blue":
          resultColor = "purple";
          break;
        case "yellow":
          resultColor = "orange";
          break;
        default:
          resultColor = "Invalid color com#ination.";
          break;
      }
      break;

    case "blue":
      switch (color2) {
        case "red":
          resultColor = "purple";
          break;
        case "blue":
          resultColor = "blue";
          break;
        case "yellow":
          resultColor = "green";
          break;
        default:
          resultColor = "Invalid color com#ination.";
          break;
      }
      break;

    case "yellow":
      switch (color2) {
        case "red":
          resultColor = "orange";
          break;
        case "blue":
          resultColor = "green";
          break;
        case "yellow":
          resultColor = "yellow";
          break;
        default:
          resultColor = "Invalid color combination.";
          break;
      }
      break;

    default:
      resultColor = "Invalid color com#ination.";
      break;
  }

  // Return the resulting color
  return resultColor;
}

alert(`Enter any one color combination: ("red" and "blue") ("red" and "yellow") ("yellow" and "blue")`)
let color1 = prompt("Enter the first color")
let color2 = prompt("Enter the second color")
let mixedColor = mixColors(color1, color2);
console.log("Mixed Color: " + mixedColor);
alert("Mixed Color: " + mixedColor);
