# Documentation (EN) & (ID) 
## Dom Swapping Mechanism 26/03/2026
- **toggleAdvancedButton** : (EN) take a look at the calculator with basic functions.
- **basicFunctionToggle** : (EN) take a look at the calculator with other additional functions.

        toggleAdvancedBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            basicFunctionToggle.classList.toggle('mode-advanced');
        });

- (EN) When the advanced button is clicked, the classlist will change the CSS code **'.calculator.mode-advanced .button'** to active and change it to display: none and together with **'.calculator.mode-advanced .advancedFeature'** which changes it to display: grid so that the button changing mechanism occurs.

## Theme Changging 25/03/2026
### Variabels
- **rememberChoosingThemes** : (EN) As a variable used to retrieve values from ‘calculatorThemesItemStorage’.
- **themesPallete** : (EN) Displays the available color options that modify the body element obtained from the root using additional CSS.
- **themeChangging** : (EN) Get the HTML class of the ‘.theme’ button.
- **getBodyElement** : (EN) An short way to write for ‘document.body’.
- **addTheme** : (EN) Map the options in ‘themesPallete’ to the indices in ‘choosingThemesPallete’ to form an array.

### How It Works
- If **rememberChoosingThemes** stores the theme history, the browser will display the theme previously used by the user. Otherwise, the browser will use index 0 or the ‘default’ theme.
- When the button is clicked, the variable value in `choosingThemesPallete` is incremented by 1 from the default value of zero, then reset to zero using a modulo operation adjusted for the length of `themesPallete`. 
- Applies the theme to `document.body` by adding a ‘theme-option’ attribute to the CSS, which then applies the theme according to `themesPallete`.
- Saves the array index and the selected theme to `setItem(‘calculatorThemesItemStorage’, addTheme);` 

## Calculator Logic
### How It Works Calculation System
EN : Taking variables from the calculator display div. body -> div(calculator) -> div(display) above the button section.
    
    const displayOutput = document.getElementById('display');

EN : Retrieve the class or ID of the button using the variable `variable.numButton` to determine which button to display.

    const inputButton = document.querySelectorAll('.numButton');    

EN : Loop through all the buttons—that is, all the buttons in script.js—and process them one by one using forEach.

    inputButton.forEach(button => {

EN : Execute the code for each button click via addEventListener after all buttons have been processed. Here, the Reactor receives the click event and the (e) object as the event object.

    button.addEventListener('click', function(e) {

EN : By using the `event.currentTarget` function in JavaScript to determine which element the user has definitely clicked.

    const buttonTarget = e.currentTarget;

EN : Create a const variable named “action” that retrieves the data-action=“” attribute from the HTML; this is specifically used with the clear and delete operators, which will later be used as functions to remove numbers that will be passed through if, if-else, and else statements.

    const action = buttonTarget.getAttribute('data-action');

EN : Retrieve the button value from a button function that displays a number that can be interacted with using operator or data-action buttons.

    let takeButtonValue = buttonTarget.getAttribute('data-value');

EN : This is an optional section used to prevent a blank display if the button has no data-value, in which case it directly retrieves the value from the <button>number</button> section. Alternatively, you can use data-value=“” on each button. 

    if(!takeButtonValue) {
        takeButtonValue = buttonTarget.innerText.trim();
    }

EN : Calculator logic to doing the calculation

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

EN : Displaying all of the input into the calculator display.

        } else {
            if (takeButtonValue != "") {
                displayOutput.value += takeButtonValue;
            }   
        }

<br>EN : Closing

        });
    });
