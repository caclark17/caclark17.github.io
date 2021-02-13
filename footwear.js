/*INPUT: the weather
*PROCESSING: Assign the correct type of shoe based on the weather
*OUTPUT: What type of shoes the user should wear
*/

let weather = document.getElementById('weather').nodeValue;

let shoes;
switch (weather) {
case hot:
shoes = 'sandals';
break;
case rain:
shoes = 'galoshes';
break;
case snow:
shoes = 'boots';
break;
case unknown:
shoes = 'shoes';
break;
}

//Output a message to the user about which shoes to wear
document.getElementById('output').innerHTML = "Wear " + shoes + " today.";