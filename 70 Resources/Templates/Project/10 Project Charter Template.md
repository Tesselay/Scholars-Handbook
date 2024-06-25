---
title: 10 Project Charter Template
date-created: 2024-06-17T14:11:33+02:00
date-modified: 2024-06-25T17:00:25+02:00
cssclasses:
  - line2
parent:
  - <%* tR += '[[10 Project/Project Dashboard|Project Dashboard]]' %>
type:
  - project
  - overview
tags: 
sources: 
project: <% tp.file.folder() %>
projectpage: obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
team: 
status: Not Started
---

# <% tp.file.folder() %>

---

> [!projectinfobox|right-small]
> ![[scottishhighlands.jpg|cover hsmall]]
> #### <% tp.file.folder() %>
> ##### *<% tp.date.now("YYYY-MM-DD") %>* | `INPUT[inlineSelect(option(Not Started), option(Running), option(Suspended), option(Canceled), option(Completed)):status]`
>
> > [!blank]
> > #### Team
> > ```meta-bind
> > INPUT[list():team]
> > ``` 
>
> > [!blank]
> > #### Sources
> > ```meta-bind
> > INPUT[list():sources]
> > ```

#### Project Purpose:

Lorem ipsum

> [!multi-column|clear]
>
> > [!blank]
> > #### Objectives:
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
>
> > [!blank]
> > #### Scope:
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

```meta-bind-button
label: Open Project Page
hidden: false
style: default
actions:
  - type: open
    link: obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>

```

```dataviewjs
for (let group of (dv.pages('"<%* tR += tp.file.folder(true) %>"')).groupBy(p => p.file.folder)) {
	dv.header(
		5, 
		(group.key).slice(group.key.lastIndexOf('/')+1)
	)
	dv.list(group.rows .map(k => k.file.link))
};
```
