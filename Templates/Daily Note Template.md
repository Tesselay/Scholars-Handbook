---
type: daily
date: <% tp.file.title %>
banner: "![[scottishhighlands.jpg]]"
cssclass: line3, clean-embed, oc-padding-0
banner_y: 0.5
---
# <% tp.file.title %>

````col
```col-md
flexGrow=1
===
> [!button]
> Previous Day 
> 
> **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Next Day 
> 
> **[[<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Week
> 
> **[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Month 
> 
> **[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Journal
> 
> **[[00 Journal/Entries/<% tp.file.title %> Journal|<% tp.file.title %> Journal]]**
```
````

## Daily Overview

> ```todoist
> name: My Tasks 
> filter: "<% tp.file.title %> | overdue" 
> ``` 

````col
```col-md
flexGrow=1
===
![[<% tp.file.title %> Journal#Morning Log]]
```
```col-md
flexGrow=1
===
![[<% tp.file.title %> Journal#Evening Log]]
```
````

````col
```col-md
flexGrow=1
===
![[<% tp.file.title %> Journal#Morning Data]]
```
```col-md
flexGrow=1
===
![[<% tp.file.title %> Journal#Evening Data]]
```
````

## Daily Meta

> [!datalog] #### Files created today
> ```dataview
> list
> where file.cday = date(this.file.name)
> sort file.ctime desc
> ```

> [!datalog] #### Files updated today
> ```dataview
> list
> where file.mday = date(this.file.name)
> sort file.ctime desc
> ```





