---
title: 
type: 
 - log
 - morning
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
date-created: 
date-modified: 
cssclasses: 
sleep-rating: 
---

## Morning Log

#morning

Text

```meta-bind
INPUT[progressBar(addLabels, minValue(0), maxValue(10), title(Sleep Rating)):sleep-rating]
```

<br>

#### Want to schedule tasks for today?

```tasks
not done
tag does not include #habit
((no due date) AND (no scheduled date)) OR (due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>) OR (scheduled before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>) OR (created date is invalid) OR (done date is invalid) OR (due date is invalid) OR (scheduled date is invalid) OR (start date is invalid)
```