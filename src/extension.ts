import { ExtensionContext } from 'vscode';
import { registered } from './commands';

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export const activate = async (context: ExtensionContext) => {
  try {
    // Subscribe to the extension commands
    context.subscriptions.push(...registered);
  } catch (error) {
    console.error(error);
  }
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {};
