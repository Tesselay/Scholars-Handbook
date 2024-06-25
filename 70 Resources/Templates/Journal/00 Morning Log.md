---
title: 00 Morning Log
date-created: 2024-06-17T14:11:33+02:00
date-modified: 2024-06-25T17:00:11+02:00
cssclasses: 
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
type:
  - log
  - morning
tags: [morning]
sleep-rating: 
---

## Morning Log

#morning

Text

```meta-bind
INPUT[progressBar(addLabels, minValue(0), maxValue(10), title(Sleep Rating)):sleep-rating]
```

<br>

#### Want to add or schedule tasks for today?

```meta-bind-button
label: Add Task
hidden: false
style: default
actions:
  - type: js
    file: 70 Resources/Scripts/addTask.js
```

##### Unscheduled or Overdue

```tasks
not done
tag does not include #habit
((no due date) AND (no scheduled date)) OR (due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>) OR (scheduled before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>) OR (created date is invalid) OR (done date is invalid) OR (due date is invalid) OR (scheduled date is invalid) OR (start date is invalid)
path does not include 90 Sandbox
```
