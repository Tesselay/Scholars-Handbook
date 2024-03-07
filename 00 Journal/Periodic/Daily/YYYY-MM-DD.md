---
parent: '[[YYYY-Www|YYYY-Www]]'
title: YYYY-MM-DD
type: daily
date: YYYY-MM-DD
cssclasses:
  - line3
  - clean-embed
  - oc-padding-0
date-created: 2024-03-04T15:57:59+01:00
date-modified: 2024-03-07T21:50:59+01:00
---

# YYYY-MM-DD

> [!multi-column]
>
> > [!button]
> > Previous Day
> >
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Next Day
> >
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Week
> >
> > **[[00 Journal/Periodic/Weekly/YYYY-Www|YYYY-Www]]**
>
> > [!button]
> > Month
> >
> > **[[00 Journal/Periodic/Monthly/YYYY-MM|YYYY-MM]]**
>
> > [!button]
> > Journal
> >
> > **[[00 Journal/Entries/YYYY-MM-DD Journal|YYYY-MM-DD Journal]]**

## Daily Overview

> [!multi-column]
>
> > [!blank]
> > ```todoist
> > name: My Tasks 
> > filter: "YYYY-MM-DD | overdue"  
> > ``` 

> [!multi-column]
>
> > [!blank]
> > ![[YYYY-MM-DD Journal#Morning]]
>
> > [!blank]
> > ![[YYYY-MM-DD Journal#Evening]]

> [!multi-column]
>
> > [!blank]
> > ![[YYYY-MM-DD Journal#Morning Data]]
>
> > [!blank]
> > ![[YYYY-MM-DD Journal#Evening Data]]

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
