console.log("Javascript berjalan")
let developmentMessage = "Fitur masih dalam tahap pengembangan";
let succesfullInput = "Elemen berhasil diklik";
const displayOutput = document.getElementById('display');
const inputButton = document.querySelectorAll('.numButton');
const advancedFeature = document.querySelector('.advanced');

// The themes changing function.
const pallete = ['default', 'white', 'dark'];
let themesDefault = 0;
const themeChangging = document.querySelector('.theme');
const getBody = document.body

const rememberChoosingThemes = localStorage.getItem('calculatorThemesItemStorage');
if (rememberChoosingThemes && pallete.includes(rememberChoosingThemes)) {
    themesDefault = pallete.indexOf(rememberChoosingThemes);
    getBody.setAttribute('theme-option', pallete[themesDefault]);
}

themeChangging.addEventListener('click', function() {
    themesDefault = themesDefault + 1;
    const addTheme = pallete[themesDefault];
    getBody.setAttribute('theme-option', addTheme);
    localStorage.setItem('calculatorThemesItemStorage', addTheme);
})

// Calculator Function
inputButton.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonTarget = e.currentTarget;
        const action = buttonTarget.getAttribute('data-action');
        let takeButtonValue = buttonTarget.getAttribute('data-value');
        // Calculator Logical
        if(action === 'clear') {
            displayOutput.value = '';
        } else if(action === 'delete') {
            displayOutput.value = displayOutput.value.slice(0, -1);
        } else if(action === 'equal') {
            try {
                let calculateAll = math.evaluate(displayOutput.value);
                if (!Number.isInteger(calculateAll) && calculateAll.toString().split('.')[1]?.length > 7) {
                    displayOutput.value = parseFloat(calculateAll.toFixed(8));
                } else {
                    displayOutput.value = calculateAll;
                }
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'squareRoot') {
            try {
                let currentValue = math.evaluate(displayOutput.value);
                displayOutput.value = Math.sqrt(currentValue).toFixed(8);
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

//Advanced Feature Still Work In Development
const toggleAdvancedBtn = document.querySelector('.advanced');
const calculatorContainer = document.querySelector('.calculator'); 

toggleAdvancedBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    calculatorContainer.classList.toggle('mode-advanced');
});
