# Documentation (EN) & (ID) 
## Dom Swapping Mechanism 26/03/2026
- **toggleAdvancedButton** : (INA) mengambil tampilan pada kalkulator dengan fungsi dasar. 
- (EN) take a look at the calculator with basic functions.
- **basicFunctionToggle** : (INA) mengambil tampilanpada kalkulator dengan fungsi tambahan lain. 
- (EN) take a look at the calculator with other additional functions.

        toggleAdvancedBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            basicFunctionToggle.classList.toggle('mode-advanced');
        });

- (INA) Ketika tombol advanced di click maka classlist akan mengubah pada kode css **'.calculator.mode-advanced .button'** menjadi active dan mengubahnya menjadi display : none dan bersamaan dengan **'.calculator.mode-advanced .advancedFeature'** yang mengubahnya menjadi display : grid sehingga terjadi mekanisme pergantian tombol. 
- (EN) When the advanced button is clicked, the classlist will change the CSS code **'.calculator.mode-advanced .button'** to active and change it to display: none and together with **'.calculator.mode-advanced .advancedFeature'** which changes it to display: grid so that the button changing mechanism occurs.

## Theme Changging 25/03/2026
### Variabels
- **rememberChoosingThemes** : (INA) Sebagai variable yang berperan untuk mengambil nilai dari 'calculatorThemesItemStorage'. 
- (EN) As a variable used to retrieve values from ‘calculatorThemesItemStorage’.
- **themesPallete** : Menampilkan opsi warna yang disediakan yang mengubah elemen body yang didapatkan dari root tambahan CSS. 
- (EN) Displays the available color options that modify the body element obtained from the root using additional CSS.
- **themeChangging** : Mendapatkan class HTML dari tombol '.theme'. 
- (EN) Get the HTML class of the ‘.theme’ button.
- **getBodyElement** : Penyingkatan dari 'document.body'. 
- (EN) An abbreviation for ‘document.body’.
- **addTheme** : Menghubungkan opsi pada 'themesPallete' dengan indeks pada 'choosingThemesPallete' ke dalam bentuk array. 
- (EN) Map the options in ‘themesPallete’ to the indices in ‘choosingThemesPallete’ to form an array.

### How It Works
- Jika **rememberChoosingThemes** memiliki riwayat themes. Jika iya maka browser akan menampilkan sesuai dengan themes yang digunakan oleh user sebelumnya. Jikat tidak maka browser akan menggunakan angka 0 pada indeks atau theme 'default'.
- Jika tombol diklik maka variabel pada choosingThemesPallete akan bertambah 1 dari angka default yaitu nol lalu akan kembali ke nol dengan menggunakan modulo yang disesuaikan dengan panjang pada 'themesPallete'. 
- Menerapkan tema dengan document.body dengan memberikan atribute 'theme-option' pada css yang lalu akan menerapkan sesuai dengan 'themesPallete'. 
- Menyimpan posisi angka array dan tampilan themes yang sudah diganti ke dalam setItem('calculatorThemesItemStorage', addTheme); 

## Calculator Logic
### How It Works Calculation System
INA : Mengambil variabel dari div display calculator. body -> div(calculator) -> div(display) atasnya bagian button. <br>
EN : Taking variables from the calculator display div. body -> div(calculator) -> div(display) above the button section.
    
    const displayOutput = document.getElementById('display');

INA : Mengambil class atau id pada button dengan nama variabel.numButton untuk tombol button yang akan ditampilkan kepada display.<br>
EN : Retrieve the class or ID of the button using the variable `variable.numButton` to determine which button to display.

    const inputButton = document.querySelectorAll('.numButton');    

INA : Looping semua tombol yang artinya semua tombol yang ada pada script.js di proses satu per satu menggunakan forEach.<br>
EN : Loop through all the buttons—that is, all the buttons in script.js—and process them one by one using forEach.

    inputButton.forEach(button => {

INA : Menjalankan kode setiap tombol di klik melalui addEventListener setelah semua tombol telah diproses. Disini reactornya melalui click dan (e) sebagai event object.<br>
EN : Execute the code for each button click via addEventListener after all buttons have been processed. Here, the Reactor receives the click event and the (e) object as the event object.

    button.addEventListener('click', function(e) {

INA : Dengan menggunakan fungsi event.currentTarget pada javascript untuk mengetahui bagian mana yang pasti sudah diklik oleh user.<br>
EN : By using the `event.currentTarget` function in JavaScript to determine which element the user has definitely clicked.

    const buttonTarget = e.currentTarget;

INA : Membuat variabel const dengan nama "action" yang dimana dia mengambil data-action="" pada html dan ini khusus digunakan pada operator clear and dellete yang nantinya akan digunakan sebagai fungsi melakukan penghapusan angka yang nantinya akan diteruskan melalui fungsi if, if else, dan else. <br>
EN : Create a const variable named “action” that retrieves the data-action=“” attribute from the HTML; this is specifically used with the clear and delete operators, which will later be used as functions to remove numbers that will be passed through if, if-else, and else statements.

    const action = buttonTarget.getAttribute('data-action');

INA : Mengambil nilai tombol pada fungsi tombol yang menampilkan angka yang bisa diinteraksi dengan tombol operator atau data-action.<br>
EN : Retrieve the button value from a button function that displays a number that can be interacted with using operator or data-action buttons.

    let takeButtonValue = buttonTarget.getAttribute('data-value');

INA : Ini adalah bagian khusus atau optional dan digunakan untuk mencegah null pada display apabila angka pada button tidak ada data-value yang dimana ini langsung mengambil pada bagian < button >angka< button >. Alternatif bisa menggunakan data-value="" pada masing masing tombol. <br>
EN : This is an optional section used to prevent a blank display if the button has no data-value, in which case it directly retrieves the value from the <button>number</button> section. Alternatively, you can use data-value=“” on each button. 

    if(!takeButtonValue) {
        takeButtonValue = buttonTarget.innerText.trim();
    }

INA : Logika kalkulator untuk melakukan kalkulasi. <br>
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

INA : Menampilkan semuanya ke dalam display kalkulator. <br>
EN : Displaying all of the input into the calculator display.

        } else {
            if (takeButtonValue != "") {
                displayOutput.value += takeButtonValue;
            }   
        }

INA : Penutup
<br>EN : Closing

        });
    });
