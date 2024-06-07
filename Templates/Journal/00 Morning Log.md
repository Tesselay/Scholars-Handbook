---
title: 
type: log
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
date-created: 
date-modified: 
cssclasses: 
sleep-rating: 
---

# <% tp.file.title %>

#tag

Text

```meta-bind
INPUT[progressBar(addLabels, minValue(0), maxValue(10), title(Sleep Rating)):sleep-rating]
```