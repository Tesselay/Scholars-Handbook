const obsidianTasks = app.plugins.getPlugin('obsidian-tasks-plugin').apiV1;
let taskLine = await obsidianTasks.createTaskLineModal();

let markdownBuilder = engine.markdown.createBuilder();
markdownBuilder.createParagraph(taskLine);

const activeNote = app.workspace.activeLeaf.view.file;
const content = await this.app.vault.read(activeNote);
const lines = content.split('\n');

const buttonLastLine = '    file: 70 Resources/Scripts/addTask.js'
let lineIndex = -1;

for (let i = 0; i < lines.length; i++) {
	if (lines[i].includes(buttonLastLine)) {
		lineIndex = i + 2;
		break;
	}
}	

lines.splice(lineIndex + 1, 0, taskLine);
const updatedNote = lines.join('\n');

app.vault.modify(activeNote, updatedNote);