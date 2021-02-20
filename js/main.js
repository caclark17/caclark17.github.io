  /* Input: a number in pounds
            * Processing: convert the number from pounds to kilograms by using k = p * 0.45359237
            *Output: the pounds converted to kilograms
            */
           function cPToK() {
            //INPUT 
            let pounds = parseFloat(document.getElementById('pounds').value);
            //Convert pounds to kilograms
            let kilograms = pounds * 0.45359237
            //OUTPUT
            //Round to one digit after the decimal
            document.getElementById('output').innerHTML = kilograms.toFixed(1)
           }