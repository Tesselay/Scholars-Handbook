---
parent: <% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
title: 
type: daily
date: <% tp.file.title %>
cssclasses:
  - line3
  - clean-embed
  - oc-padding-0
date-created: 2023-10-10T16:25:35+02:00
date-modified: 2024-02-13T18:07:09+01:00
---

# <% tp.file.title %>

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
> > Week
> >
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Month
> >
> > **[[00 Journal/Periodic/Monthly/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
> > [!button]
> > Journal
> >
> > **[[00 Journal/Entries/<% tp.file.title %> Journal|<% tp.file.title %> Journal]]**

## Daily Overview

> [!multi-column]
>
> > [!blank]
> > ```todoist
> > name: My Tasks 
> > filter: "<% tp.file.title %> | overdue"  
> > ``` 

> [!multi-column]
>
> > [!blank]
> > ![[<% tp.file.title %> Journal#Morning]]
>
> > [!blank]
> > ![[<% tp.file.title %> Journal#Evening]]

> [!multi-column]
>
> > [!blank]
> > ![[<% tp.file.title %> Journal#Morning Data]]
>
> > [!blank]
> > ![[<% tp.file.title %> Journal#Evening Data]]

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
