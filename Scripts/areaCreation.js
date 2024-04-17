const modalForm = app.plugins.plugins.modalforms.api;
const templater = app.plugins.getPlugin('templater-obsidian');

const result = await modalForm.openForm('Area Creation Form');

const newProjectFolder = await app.vault.createFolder('20 Area/' + result.get('Area Name'));

const charterTemplate = app.vault.getFileByPath('Templates/Area/20 Area Charter Template.md');
const taskTemplate = app.vault.getFileByPath('Templates/Area/20 Tasks Template.md');
const mentionsTemplate = app.vault.getFileByPath('Templates/Area/20 Mentions Template.md');

templater.templater.create_new_note_from_template(charterTemplate, newProjectFolder, `${result.get('Area Name')} Project Charter`, false);
templater.templater.create_new_note_from_template(taskTemplate, newProjectFolder, `${result.get('Area Name')} Tasks`, false);
templater.templater.create_new_note_from_template(mentionsTemplate, newProjectFolder, `${result.get('Area Name')} Mentions`, false);

app.commands.executeCommandById('obsidian-projects:create-project')