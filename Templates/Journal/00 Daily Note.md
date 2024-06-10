---
parent: '[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]'
title: 
type:
  - periodic
  - daily
date: <% tp.file.title %>
cssclasses:
  - line3
  - clean-embed
  - oc-padding-0
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

> [!multi-column]
>
> > [!button]
> > Previous Day
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Next Day
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Home
> >
> > **[[Home]]**
>
> > [!button]
> > Week
> >
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Month
> >
> > **[[00 Journal/Periodic/Monthly/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**

# <% tp.file.title %>

> [!multi-column]
> > [!blank]
> > ![[00 Journal/Entries/Morning/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log]]
> >
> > ```meta-bind-button
> > label: Add Dream
> > style: primary
> > actions:
> >   - type: js
> >     file: Scripts/addDream.js
> > ```
>
> > [!blank]
> > ![[00 Journal/Entries/Evening/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log]]

---

# Todo's

```meta-bind-button
label: Add Task
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: command
    command: obsidian-tasks-plugin:edit-task
```

```tasks
tag does not include #habit
(due <% tp.file.title %>) OR (scheduled <% tp.file.title %>) OR ((has start date) AND (starts on or before <% tp.file.title %>) AND NOT (scheduled after <% tp.file.title %>) AND NOT ((due before <% tp.file.title %>) OR (scheduled before <% tp.file.title %>)))
```

---

# Logs

```meta-bind-button
label: Create New Entry
style: primary
actions:
  - type: js
    file: Scripts/addLog.js
```

```js-engine
const dv = app.plugins.getPlugin('dataview').api;
const pages = dv.pages('"00 Journal/Entries/Logs"').where(p => p.file.frontmatter.date == '<% tp.file.title %>' && p.file.name).sort((a) => a.file.frontmatter.date);

let markdownBuilder = engine.markdown.createBuilder()
let multiColumnCallout = markdownBuilder.createCallout('', 'multi-column')
let columnCalloutLeft = multiColumnCallout.createCallout('', 'blank')
let columnCalloutRight = multiColumnCallout.createCallout('', 'blank')
pages.forEach(p => {
	const filePath = p.file.path.split('.')[0];
	if ( pages.indexOf(p) % 2 == 0 ) {
		columnCalloutLeft.createParagraph(`[[${filePath}|${p.file.name}]]\n![[${filePath}]]`)
		columnCalloutLeft.createParagraph('---');
	} else {
		columnCalloutRight.createParagraph(`[[${filePath}|${p.file.name}]]\n![[${filePath}]]`)
		columnCalloutRight.createParagraph('---');
	}
})

return markdownBuilder
```

## Daily Meta

> [!multi-column]
> > [!datalog] #### Files created today
> > ```dataview
> > list
> > where file.cday = date(this.file.name)
> > sort file.ctime desc
> > ```
>
> > [!datalog] #### Files updated today
> > ```dataview
> > list
> > where file.mday = date(this.file.name)
> > sort file.ctime desc
> > ```
