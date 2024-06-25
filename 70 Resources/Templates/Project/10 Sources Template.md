---
title: 10 Sources Template
date-created: 2024-06-17T14:11:33+02:00
date-modified: 2024-06-25T17:00:27+02:00
cssclasses: 
parent:
  - <%* tR += '[[10 Project/Project Dashboard|Project Dashboard]]' %>
type:
  - project
  - overview
  - query
tags: 
project: <% tp.file.folder() %>
projectpage: obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
---

```query
#project/<%* tR += tp.file.folder().replaceAll(' ', '-').toLowerCase() %>
```
