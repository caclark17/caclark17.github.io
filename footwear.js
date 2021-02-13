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