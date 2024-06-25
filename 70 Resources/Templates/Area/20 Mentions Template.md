---
title: 20 Mentions Template
date-created: 2024-06-17T14:11:33+02:00
date-modified: 2024-06-25T17:00:21+02:00
cssclasses: 
parent:
  - <%* tR += '[[20 Area/Area Dashboard|Area Dashboard]]' %>
type:
  - area
  - overview
  - query
tags: []
area: <% tp.file.folder() %>
areapage: obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
---

```query
#area/<%* tR += tp.file.folder().replaceAll(' ', '-').toLowerCase() %>
```
