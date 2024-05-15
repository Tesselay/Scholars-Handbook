---
title: 
type: log
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
tags:
  - tag
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
date-created: 
date-modified: 
cssclasses: 
day-rating: 
gratitudes:
achievements:
---

# <% tp.file.title %> Evening Log

#tag

Text

#### Song of the day

(log-song-of-the-day::)

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
scheduled on <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
```

#### Day Rating
```meta-bind
INPUT[progressBar(addLabels, minValue(0), maxValue(10)):day-rating]
```