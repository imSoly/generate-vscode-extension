import { commands } from 'vscode';
import { helloWorld } from './helloWorld';

const extensionCommands: { [commmand: string]: () => Promise<void> } = {
  helloWorld,
};

export const registered = Object.keys(extensionCommands).map((commandName) => {
  const callCommand = () => extensionCommands[commandName]();
  return commands.registerCommand(`minsol-first-extension.${commandName}`, callCommand);
});
