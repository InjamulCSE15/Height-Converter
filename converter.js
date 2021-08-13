document.getElementById('submit').addEventListener('click', heightConverter);

function heightConverter () {
    var feet = parseInt(document.getElementById('feet').value * 12);
    var inches = parseInt(document.getElementById('inches').value);
    // console.log(feet);
    // console.log(inches);
    var cm = ((feet + inches) * 2.54);
    
    // console.log(cm);
    var result = cm.toFixed(2);

    document.getElementById('result').innerHTML = result + " cm";
}