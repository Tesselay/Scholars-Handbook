const modalForm = app.plugins.plugins.modalforms.api;
const templater = app.plugins.getPlugin('templater-obsidian');

const result = await modalForm.openForm('Project Creation Form');

const newProjectFolder = await app.vault.createFolder('10 Project/' + result.get('Project Name'));

const charterTemplate = app.vault.getFileByPath('70 Resources/Templates/Project/10 Project Charter Template.md');
const taskTemplate = app.vault.getFileByPath('70 Resources/Templates/Project/10 Tasks Template.md');
const mentionsTemplate = app.vault.getFileByPath('70 Resources/Templates/Project/10 Mentions Template.md');

templater.templater.create_new_note_from_template(charterTemplate, newProjectFolder, `${result.get('Project Name')} Project Charter`, false);
templater.templater.create_new_note_from_template(taskTemplate, newProjectFolder, `${result.get('Project Name')} Tasks`, false);
templater.templater.create_new_note_from_template(mentionsTemplate, newProjectFolder, `${result.get('Project Name')} Mentions`, false);

app.commands.executeCommandById('obsidian-projects:create-project')