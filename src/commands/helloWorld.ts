import { window } from 'vscode';

export const helloWorld = () => {
  return setMessage();
};

const setMessage = async () => {
  //   let disposable = commands.registerCommand('minsol-first-extension.helloWorld', () => {
  //     window.showInformationMessage('Hello my name is Minsol~ Do you wanna come in????');
  //   });
  //   context.subscriptions.push(disposable);
  window.showInformationMessage('Hello my name is Minsol~ Do you wanna come in????');
};
