---
parent: '[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
same:
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-MM-DD") %> Journal]]'
  - '[[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %> Journal|<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %> Journal]]'
title: 
type: journal
date: <% tp.file.title.split(" ")[0] %>
cssclasses:
  - oc-padding-0
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

# <% tp.file.title %>

> [!multi-column]
>
> > [!button]
> > Previous Journal
> >
> > **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**
>
> > [!button]
> > Days Note
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Next Journal
> >
> > **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**

###### Morning

> [!morning] ### 🌅 Morning Log
> 🕘 (log-morning-time:: **hh:mm**)
>
> Text

```meta-bind-button
label: Add Dream
style: default
actions:
  - type: replaceSelf 
    replacement: "Templates/Journal/Meta Bind Replacements/02 MBR Dream Entry Template.md"
    templater: true
```

###### Morning Data

> [!morning] ### Morning Data
> - log-sleep-rating::
> - log-nightmares::

###### Evening

> [!evening] ### 🌇 Evening Log
> 🕤 (log-evening-time:: **hh:mm**)
>
> Text

> [!evening] ### 🙏 Gratitude Journal
> 1.
> 2.
> 3.

> [!evening] ### 👑 Achievement Journal
> 1.
> 2.
> 3.

###### Evening Data

> [!evening] ### Evening Data
> - log-day-rating::

> [!evening] ### Habits
> - [ ] #habit | morning brush
> - [ ] #habit | interdental brush 
> - [ ] #habit | breakfast 
> - [ ] #habit | up before 7am 
> - [ ] #habit | read today

## What I Learned

## Logs
```meta-bind-button
label: Add Log Entry
style: default
actions:
  - type: replaceSelf 
    replacement: "Templates/Journal/Meta Bind Replacements/02 MBR Log Entry Template.md"
    templater: true
```