import UI from './UI/UI.js';

function toggleCommands() {
  const { commandsBtn, commandsInfo } = UI.COMMANDS;
  commandsBtn.addEventListener('click', () => {
    commandsInfo.classList.toggle('commands-info--active');
  });
}

export default toggleCommands;
