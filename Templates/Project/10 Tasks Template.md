---
parent: "<%* tR += '[[10 Project/Project Dashboard|Project Dashboard]]' %>"
title: <% tp.file.folder() %>
project: <% tp.file.folder() %>
projectpage:  obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
type: overview
tags: 
cssclasses:
  - line3
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

```custom-frames
frame: Todoist
style: height: 80vh; width: 100%;
urlSuffix: <todoist-project-url-suffix>
```
