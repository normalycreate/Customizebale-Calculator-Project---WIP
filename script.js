console.log("Javascript berjalan")
const displayOutput = document.getElementById('display');
const inputButton = document.querySelectorAll('.numButton');
// How the calculator displayed
inputButton.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonTarget = e.currentTarget;
        const action = buttonTarget.getAttribute('data-action');
        let takeButtonValue = buttonTarget.getAttribute('data-value');
        if(!takeButtonValue) {
            takeButtonValue = buttonTarget.innerText.trim();
        }
        // Calculator Logical
        if(action === 'clear') {
            displayOutput.value = '';
        } else if(action === 'delete') {
            displayOutput.value = displayOutput.value.slice(0, -1);
        } else if(action === 'equal') {
            try {
                displayOutput.value = eval(displayOutput.value);
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'squareRoot') {
            try {
                let currentValue = eval(displayOutput.value);
                displayOutput.value = Math.sqrt(currentValue);
            } catch {
                displayOutput.value = 'Error';
            }
        } else {
            if (takeButtonValue != "") {
                displayOutput.value += takeButtonValue;
            }   
        }
    });
});
