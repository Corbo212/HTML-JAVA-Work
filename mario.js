
printPyramid(parseInt(prompt("enter height")));
// TODO #2
// Take in user input for the height 



/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid 


const columns = height + 1;

for (let row = 1; row <= height; row++) {
  let output = '';

  for (let column = 1; column <= columns; column++) {
    if (column >= (height - row + 1) && column <= height) {
      output += '#';
    } else if (column === columns) {
      output += '#';
    } else {
      output += ' ';
    }
  }
  console.log(output);
}
    
}

