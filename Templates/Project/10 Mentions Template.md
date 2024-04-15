---
parent:  obsidian://advanced-uri?vault=Second%20Brain&commandname=Projects:%20Show%20<%* tR += tp.file.folder().replaceAll(' ', '%20') %>
title: <% tp.file.folder() %>
project: <% tp.file.folder() %>
tags:
cssclasses:
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

```query
#project/<%* tR += tp.file.folder().replaceAll(' ', '-').toLowerCase() %>
```