---
parent: "<%* tR += '[[20 Area/Area Dashboard|Area Dashboard]]' %>"
title: <% tp.file.folder() %>
area: <% tp.file.folder() %>
areapage:  obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
type: subproject
status: Not Started
tags: 
cssclasses:
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

## Project Title

*Description*

`INPUT[inlineSelect(option(Not Started), option(Running), option(Suspended), option(Canceled), option(Completed)):status]`

```todoist
name: Tasks
filter: "#<todoit-project-name> & /<section-name>"
```

### What Has Been Done

```query
#tag
```
