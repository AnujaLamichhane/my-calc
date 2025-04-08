/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function clearScreen() {
  document.getElementById('screen').value = '';
}

function appendToScreen(value) {
  document.getElementById('screen').value += value;
}

function calculate() {
  let screen = document.getElementById('screen');
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = 'Error';
  }
}
