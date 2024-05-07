<%* const formResults = await app.plugins.getPlugin('modalforms').api.openForm('Log Entry Form') %>
> [!log]+ #### <%* tR += formResults.get('Main Domain') + ' ' + formResults.get('Sub Domain')%> - <%* tR += formResults.get('Title') %>
> <%* tR += formResults.get('Tags', (allTags) => allTags.map((tag) => '#' + tag).join(' ')) %>
>
> <%* tR += formResults.get('Content') %>

```meta-bind-button
label: Add Log Entry
style: default
actions:
  - type: replaceSelf 
    replacement: "Templates/Journal/Meta Bind Replacements/02 MBR Log Entry Template.md"
    templater: true
```