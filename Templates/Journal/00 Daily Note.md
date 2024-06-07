---
parent: '[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]'
same:
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>]]'
  - '[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>]]'
title: 
type: periodic
date: <% tp.file.title %>
cssclasses:
  - line3
  - clean-embed
  - oc-padding-0
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

> [!multi-column]
>
> > [!button]
> > Previous Day
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Next Day
> >
> > **[[00 Journal/Periodic/Daily/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Home
> >
> > **[[Home]]**
>
> > [!button]
> > Week
> >
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Month
> >
> > **[[00 Journal/Periodic/Monthly/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**

# <% tp.file.title %>

![[00 Journal/Entries/Morning/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log]]

![[00 Journal/Entries/Evening/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log]]

```meta-bind-button
label: Add Dream
style: default
actions:
  - type: templaterCreateNote
    templateFile: Templates/Journal/00 Dream.md
    folderPath: 00 Journal/Entries/Dreams
    fileName: ""
    openNote: true

```

## Daily Meta

> [!multi-column]
> > [!datalog] #### Files created today
> > ```dataview
> > list
> > where file.cday = date(this.file.name)
> > sort file.ctime desc
> > ```
>
> > [!datalog] #### Files updated today
> > ```dataview
> > list
> > where file.mday = date(this.file.name)
> > sort file.ctime desc
> > ```
