const templater = app.plugins.getPlugin('templater-obsidian');

const dreamTemplate = app.vault.getFileByPath('Templates/Journal/00 Dream.md');
const entryFolder = app.vault.getFolderByPath('00 Journal/Entries/Dreams')

const activeNote = app.workspace.activeLeaf.view.file;

(async () => {
	const dreamTitle = await app.plugins.getPlugin('quickadd').api.inputPrompt(header = 'Dream Title', placeholder = 'Choose a fitting title for your dream');
	const dreamFileName = `${activeNote.basename} Dream - ${dreamTitle}`
	templater.templater.create_new_note_from_template(dreamTemplate, entryFolder, dreamFileName, true);

	const content = await this.app.vault.read(activeNote);
	const lines = content.split('\n');

	const buttonLastLine = 'label: Add Dream'
	const dreamEmbed = `> > ![[00 Journal/Entries/Dreams/${dreamFileName}|${dreamFileName}]]\n> >`;
	let lineIndex = -1;

	for (let i = 0; i < lines.length; i++) {
		if (lines[i].includes(buttonLastLine)) {
			lineIndex = i - 2;
			break;
		}
	}	

	lines.splice(lineIndex + 1, 0, dreamEmbed);
	const updatedNote = lines.join('\n');

	await app.vault.modify(activeNote, updatedNote);
})();

