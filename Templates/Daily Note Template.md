---
type: daily
date: <% tp.file.title %>
banner: "![[scottishhighlands.jpg]]"
cssclass: line3, clean-embed, oc-padding-0
banner_y: 0.5
---
# <% tp.file.title %>

> [!multi-column]
>> [!button]
>> Previous Day
>> 
>> **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]**
>
>> [!button]
>> Next Day
>> 
>> **[[<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]**
>
>> [!button]
>> Week
>> 
>> **[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
>> [!button]
>> Month
>> 
>> **[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
>> [!button]
>> Journal
>> 
>> **[[00 Journal/Entries/<% tp.file.title %> Journal|<% tp.file.title %> Journal]]** 

## Daily Overview

> [!multi-column]
>> [!blank] 
>> ```gEvent
>> type: day
>> date: <% tp.file.title %>
>> ```
>
>> [!blank|wide-5]
>> ```todoist
>> name: My Tasks 
>> filter: "<% tp.file.title %> | overdue"  
>> ``` 

> [!multi-column]
>> [!blank]
>> ![[<% tp.file.title %> Journal#Morning Log]]
>
>> [!blank]
>> ![[<% tp.file.title %> Journal#Evening Log]]

> [!multi-column]
>> [!blank]
>> ![[<% tp.file.title %> Journal#Morning Data]]
>
>> [!blank]
>> ![[<% tp.file.title %> Journal#Evening Data]]

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





