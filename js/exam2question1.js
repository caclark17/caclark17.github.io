/*INPUT: none
*PROCESSING: build a single string of powers 2^0 to 2^31 inclulsive
*OUTPUT: string of numbers 2^0 to 2^31
*/

function getString() {

    let output = '';
    let sum = 0;
    let end = 31;
    let baseNumber = 2;

    for (let i = 0; i <= end; i++) {
        sum = baseNumber ^ i;
        output += sum + ' , ';
    }
    document.getElementById("output").value = output;
}