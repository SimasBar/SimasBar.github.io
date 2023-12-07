function processData() {
    try {
        // Gauname įvestus duomenis
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var number1Roman = document.getElementById('number1').value;
        var number2Roman = document.getElementById('number2').value;

        // Konvertuojame romėniškus skaičius į arabinius
        var number1Arabic = romanToArabic(number1Roman);
        var number2Arabic = romanToArabic(number2Roman);
        var sum = number1Arabic + number2Arabic;

        // Saugome duomenis objekte
        var userData = {
            vardas: firstName,
            pavardė: lastName,
            skaičius1: number1Arabic,
            skaičius2: number2Arabic,
            suma: sum
        };

        // Spausdiname rezultatus į konsolę
        console.log('Vartotojo vardas:', userData.vardas);
        console.log('Vartotojo pavardė:', userData.pavardė);
        console.log('Skaičius 1 (arabiškai):', userData.skaičius1);
        console.log('Skaičius 2 (arabiškai):', userData.skaičius2);

        // Spausdiname rezultatus į tinklalapio HTML
        var containerDiv = document.querySelector('.container');
        var resultContainer = document.createElement('div');
        resultContainer.className = 'item'; 
        resultContainer.innerHTML = '<p>Vartotojo vardas: ' + userData.vardas + '</p>' +
                                   '<p>Vartotojo pavardė: ' + userData.pavardė + '</p>' +
                                   '<p>Skaičius 1 (arabiškai): ' + userData.skaičius1 + '</p>' +
                                   '<p>Skaičius 2 (arabiškai): ' + userData.skaičius2 + '</p>' +
                                   '<p>Skaičių suma: ' + userData.suma + '</p>';

      /*document.body.appendChild(resultContainer); */
        containerDiv.appendChild(resultContainer);
    } catch (error) {
        console.error('Klaida vykdant kodą:', error);
    }
}

function romanToArabic(roman) {
    var romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var arabic = 0;

    for (var i = 0; i < roman.length; i++) {
        var currentDigit = romanNumerals[roman[i]];
        var nextDigit = romanNumerals[roman[i + 1]];

        if (nextDigit > currentDigit) {
            arabic += nextDigit - currentDigit;
            i++;
        } else {
            arabic += currentDigit;
        }
    }

    return arabic;
}

function calculateSum() {
        try {
            // Gauname įvestus diametrus
            var diameter1Input = document.getElementById('diameter1');
            var diameter2Input = document.getElementById('diameter2');

            var diameter1 = parseFloat(diameter1Input.value);
            var diameter2 = parseFloat(diameter2Input.value);

            // Patikriname, ar įvesti skaičiai yra teigiami
            if (isNaN(diameter1) || diameter1 < 0 || isNaN(diameter2) || diameter2 < 0) {
                throw new Error('Neteisingi diametrų skaičiai');
            }

            // Skaičiuojame sumą
            var sum = diameter1 + diameter2;

            // Rodyti rezultatą ir nustatyti spalvą
            displayResult(sum);
        } catch (error) {
            // Jeigu įvyksta klaida, rodyti alert
            alert(error.message);
        }
    }

    function displayResult(sum) {
        // Rodyti rezultatą
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Suma: ' + sum;

        // Nustatyti teksto spalvą priklausomai nuo sumos
        if (sum <= 7) {
            resultElement.style.color = 'red';
        } else if (sum <= 14) {
            resultElement.style.color = 'orange';
        } else {
            resultElement.style.color = 'green';
        }
    }