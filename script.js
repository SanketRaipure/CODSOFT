// let string ="";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
        
//        else if(e.target.innerHTML == 'C'){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//         }
//     })
// })

// function updateInput(value) {
//     document.getElementById('calculatorInput').value = value;
// }

// // Function to handle when a digit or operator button is clicked
// function appendToInput(character) {
//     const inputField = document.getElementById('calculatorInput');
//     inputField.value += character;
// }

// // // Function to handle backspace button click
// // function backspace() {
// //     const inputField = document.getElementById('calculatorInput');
// //     const currentInput = inputField.value;
// //     // Remove the last character using substring
// //     const updatedInput = currentInput.substring(0, currentInput.length - 1);
// //     updateInput(updatedInput);
// // }

// function backspace() {
//     const inputField = document.getElementById('calculatorInput');
//     const currentInput = inputField.value;
//     // Remove the last character using substring
//     const updatedInput = currentInput.substring(0, currentInput.length - 1);
//     updateInput(updatedInput);
// }

// function updateInput(updatedValue) {
//     const inputField = document.getElementById('calculatorInput');
//     inputField.value = updatedValue;
// }

// function clearAll() {
//     updateInput('');
// }

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        //else if (e.target.innerHTML === '←') { // Check if backspace button is clicked
        //     backspace(); // Call the backspace function
        // }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

function updateInput(value) {
    document.getElementById('calculatorInput').value = value;
}

// Function to handle when a digit or operator button is clicked
function appendToInput(character) {
    const inputField = document.getElementById('calculatorInput');
    inputField.value += character;
}

// function backspace() {
//     const inputField = document.getElementById('calculatorInput');
//     const currentInput = inputField.value;
//     // Remove the last character using substring
//     const updatedInput = currentInput.substring(0, currentInput.length - 1);
//     updateInput(updatedInput);
// }

function clearAll() {
    updateInput('');
}
