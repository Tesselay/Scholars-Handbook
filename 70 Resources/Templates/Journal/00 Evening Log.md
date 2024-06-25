---
title: 00 Evening Log
date-created: 2024-06-17T14:11:33+02:00
date-modified: 2024-06-25T17:00:06+02:00
cssclasses: 
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
type:
  - log
  - evening
tags: [evening]
gratitudes: 
achievements: 
day-rating: 
---

## Evening Log

#evening

Text

#### Song of the day

log-song-of-the-day::

#### Gratitude Journal

```meta-bind
INPUT[list(placeholder(Today Im grateful for...)):gratitudes]
```

#### Achievement Journal

```meta-bind
INPUT[list(placeholder(Today I achieved...)):achievements]
```

<br>

#### Habits

```tasks
tag includes #habit  
(((due before <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>) OR (due on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>)) AND (not done)) OR (done on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>)
hide backlink
```

#### Day Rating

```meta-bind
INPUT[progressBar(addLabels, minValue(0), maxValue(10)):day-rating]
```
