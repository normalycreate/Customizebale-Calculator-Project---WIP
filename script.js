console.log("Javascript berjalan")
let developmentMessage = "Fitur masih dalam tahap pengembangan";
let succesfullInput = "Elemen berhasil diklik";
const displayOutput = document.getElementById('display');
const inputButton = document.querySelectorAll('.numButton');

// The themes changing function.
const themesPallete = ['default', 'white', 'dark'];
let choosingThemesPallete = 0;
const themeChangging = document.querySelector('.theme');
const getBodyElement = document.body
  
const rememberChoosingThemes = localStorage.getItem('calculatorThemesItemStorage');
if (rememberChoosingThemes && themesPallete.includes(rememberChoosingThemes)) {
    choosingThemesPallete = themesPallete.indexOf(rememberChoosingThemes);
    getBodyElement.setAttribute('theme-option', themesPallete[choosingThemesPallete]);
}

themeChangging.addEventListener('click', function() {
    console.log(succesfullInput);
    choosingThemesPallete = (choosingThemesPallete + 1) % themesPallete.length;
    const addTheme = themesPallete[choosingThemesPallete];
    getBodyElement.setAttribute('theme-option', addTheme);
    localStorage.setItem('calculatorThemesItemStorage', addTheme);
})

// Calculator Function
inputButton.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonTarget = e.currentTarget;
        const action = buttonTarget.getAttribute('data-action');
        let takeButtonValue = buttonTarget.getAttribute('data-value');
        //Feedback MSG
        const errorMsg = 'Error';
        // Calculator Logical
        switch(action) {
            case 'clear': 
                displayOutput.value = '';
                break;
            case 'delete': 
                displayOutput.value = displayOutput.value.slice(0, -1);
                break;
            case 'equal':
                try {
                    let calculateAll = math.evaluate(displayOutput.value);
                    if (!Number.isInteger(calculateAll) && calculateAll.toString().split('.')[1]?.length > 8) {
                        displayOutput.value = parseFloat(calculateAll.toFixed(7));
                    } else {
                        displayOutput.value = calculateAll;
                    }
                } catch {
                    displayOutput.value = errorMsg;
                }   
                break;
            case 'squareRoot':
                try {
                    let currentValue = math.sqrt(displayOutput.value);
                    if (!Number.isInteger(currentValue) && currentValue.toString().split('.')[1]?.length > 8) {
                        displayOutput.value = parseFloat(currentValue.toFixed(7));
                    } else {
                        displayOutput.value = currentValue;
                    }
                    // displayOutput.value = Math.sqrt(currentValue).toFixed(8);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'numberGenerator':
                try {
                    let randomizing = math.random(displayOutput.value).toFixed(0);
                    if (randomizing < 0) {
                        displayOutput.value = errorMsg;
                    } else {
                        displayOutput.value = randomizing;
                    }
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'gcd':
                try {
                    displayOutput.value = "gcd(" + displayOutput.value + ",";
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'hcf':
                try {
                    displayOutput.value = "lcm(" + displayOutput.value + ",";
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'rounding':
                try {
                    displayOutput.value = math.round(displayOutput.value);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'sin':
                try {
                    displayOutput.value = math.sin(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'cos':
                try {
                    displayOutput.value = math.cos(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'tan':
                try {
                    displayOutput.value = math.tan(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'cosecan':
                try {
                    displayOutput.value = math.csc(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'secan':
                try {
                    displayOutput.value = math.sec(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'cotan':
                try {
                    displayOutput.value = math.cot(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'logarithm':
                try {
                    displayOutput.value = math.log(displayOutput.value).toFixed(7);
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            case 'factorial':
                try {
                    let factorialNumber = Number(displayOutput.value);
                    if (factorialNumber > 18) {
                        displayOutput.value = 'Too Big';
                    } else {
                        displayOutput.value = math.factorial(displayOutput.value);
                    }
                } catch {
                    displayOutput.value = errorMsg;
                }
                break;
            default:
                if (takeButtonValue != "") {    
                    displayOutput.value += takeButtonValue;
                }    
        }
    });
});

//Keyboard Support Function
document.addEventListener('keydown', function(event) {
    const key = event.key;
    //To Shorten document.querySelector(nameObject);
    let select = document.querySelector.bind(document);
    let targetButton = null;
    //Specific Condition for logical 'or' and regex case
    switch (true) {
        case (key === 'Enter' || key === '='):
            targetButton = select('[data-action="equal"]');
            break;
        case (key === 'Escape' || key === 'Delete'):
            targetButton = select('[data-action="clear"]');
            break;
        case (/^[0-9+\-*/.^%]$/.test(key)):
            targetButton = select(`[data-value="${key}"]`);
            break;
    }
    //For Normal case without or
    switch(key) {
        case 'Backspace':
            targetButton = select('[data-action="delete"]');
            break;
        case 's':
            targetButton = select('[data-action="squareRoot"]');
            break;
        case '?':
            targetButton = select('[data-action="numberGenerator"]');
            break;
        case 'g':
            targetButton = select('[data-action="gcd"]');
            break;
        case 'k':
            targetButton = select('[data-action="lcm"]');
            break;
        case '(':
            targetButton = select('[data-value="("]');
            break;
        case ')':
            targetButton = select('[data-value=")"]');
            break;
        case 'l':
            targetButton = select('[data-action="logarithm"]');
            break;
        case '!':
            targetButton = select('[data-action="factorial"]');
            break;
    }
    if (targetButton) {
        event.preventDefault();
        targetButton.click();  
    }
});

//Advanced Feature Still Work In Development
const toggleAdvancedBtn = document.querySelector('.advanced');
const basicFunctionToggle = document.querySelector('.calculator'); 

toggleAdvancedBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    basicFunctionToggle.classList.toggle('mode-advanced');
});
