const form = document.getElementById('form');
const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const result = document.getElementById('form__result');

// should be only numbers
number1.addEventListener('input', validatingNumber);
number2.addEventListener('input', validatingNumber);

function validatingNumber(event) {
    event.preventDefault();
    const value = event.target.value.replace(/[^0-9.]/g, '');
    this.value = value;
}
// END should be only numbers


form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = addingString(value1, value2);
    
}

function addingString(string1, string2) {
    string1 = string1 ? string1 : 0;
    string2 = string2 ? string2 : 0;

    if(string1.length < 16 && string2.length < 16) return parseInt(string1) + parseInt(string2);
    if(string1 === 0 && string2) return string2;
    if(string2 === 0 && string1) return string1;

    const arrayString1 = string1.split('').reverse();
    const arrayString2 = string2.split('').reverse();

    const length = string1.length > string2.length ? string1.length : string2.length;

    const addResult = [];


    for(let i = 0; i < length; i++) {

        currentNumberArrayString1 = arrayString1[i] ? parseInt(arrayString1[i]) : 0;
        currentNumberArrayString2 = arrayString2[i] ? parseInt(arrayString2[i]) : 0;

        const currentAdd = currentNumberArrayString1 + currentNumberArrayString2;

        if(currentAdd < 10) {
            if(!addResult[i]) {
                addResult[i] = currentAdd;
            } else {
                if(addResult[i] + currentAdd < 10) {
                    addResult[i] = addResult[i] + currentAdd;
                } else {
                    addResult[i] = 0;
                    addResult[i+1] = 1;
                }
            }
        } else {
            if(!addResult[i]) {
                addResult[i] = currentAdd - 10;
                addResult[i+1] = 1;
            } else {  
                addResult[i] = (addResult[i] + currentAdd) - 10;
                addResult[i+1] = 1;
            }
        }
    }

    return addResult.reverse().join('');

}
