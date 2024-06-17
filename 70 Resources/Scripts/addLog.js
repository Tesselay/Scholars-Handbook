const templater = app.plugins.getPlugin('templater-obsidian');

const logTemplate = app.vault.getFileByPath('Templates/Journal/00 Log.md');
const entryFolder = app.vault.getFolderByPath('00 Journal/Entries/Logs')

const activeNote = app.workspace.activeLeaf.view.file;

(async () => {
	const logTitle = await app.plugins.getPlugin('quickadd').api.inputPrompt(header = 'Log Title', placeholder = 'Choose a fitting title for this entry');
	const logFileName =  `${activeNote.basename} Log - ${logTitle}`;
	templater.templater.create_new_note_from_template(logTemplate, entryFolder, logFileName, true);
})();

