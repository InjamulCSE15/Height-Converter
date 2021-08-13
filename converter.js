document.getElementById('submit').addEventListener('click', heightConverter);

function heightConverter () {
    var feet = parseInt(document.getElementById('feet').value * 12);
    var inches = parseInt(document.getElementById('inches').value);
    // console.log(feet);
    // console.log(inches);
    var cm = ((feet + inches) * 2.54);
    
    // console.log(cm);
    var result = cm.toFixed(2);

    if(feet == '' || inches == ''){
        document.getElementById('result').innerHTML = `<strong>Please enter feet and inches value!</strong>`
    }
    else{
        document.getElementById('result').innerHTML = "Your height: " + result + " cm";
    }

}

document.getElementById('reset').addEventListener('click', resetConverter);
function resetConverter () {
    document.getElementById('feet').value = '';
    document.getElementById('inches').value = '';
    document.getElementById('result').innerHTML = '';
}