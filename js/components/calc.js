import UI from './UI/UI.js';
import Program from './Calculator.js';

function calc() {
  const { calcForm, calcInput, calcBtn, calcOutput, calcResult } = UI.CALC;

  const program = new Program();
  program.parse('let x=2');
  program.parse('printvars');
  program.print('i');
  program.parse('let y=8');
  program.parse('printvars');
  program.parse('let y=12');
  program.parse('printvars');
}

function commandTemplate(command, list) {
  const li = document.createElement('li');
  li.classList.add('view-input-list__item');
  li.textContent = command;

  list.append(li);
}

export default calc;
