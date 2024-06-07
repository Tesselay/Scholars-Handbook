---
parent: '[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]'
title: 
type:
  - periodic
  - daily
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

> [!multi-column]
> > [!blank]
> > ![[00 Journal/Entries/Morning/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Morning Log]]
> >
> > ```meta-bind-button
> > label: Add Dream
> > style: primary
> > actions:
> >   - type: js
> >     file: Scripts/addDream.js
> > ```
>
> > [!blank]
> > ![[00 Journal/Entries/Evening/<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log|<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> Evening Log]]

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
