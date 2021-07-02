import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('vscode-smoketest-check.smoketestCheck', () => {
		vscode.window.showInformationMessage('Hello World from vscode-smoketest-check!');
	}));
}

export function deactivate() { }
