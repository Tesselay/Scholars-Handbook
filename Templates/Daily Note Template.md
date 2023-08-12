---
type: daily
date: <% tp.file.title %>
banner: "![[scottishhighlands.jpg]]"
cssclass: line3, clean-embed
banner_y: 0.5
---
# <% tp.file.title %>

```start-multi-column
ID: ID_eh0v
Number of Columns: 5
Largest Column: standard
Border: off
Shadow: off
```

> [!button]
> Previous Day 
> 
> **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]**

--- column-end ---

> [!button]
> Next Day 
> 
> **[[<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>]]**

--- column-end ---

> [!button]
> Week
> 
> **[[<% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>]]**

--- column-end ---

> [!button]
> Month 
> 
> **[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]**

--- column-end ---

> [!button]
> Journal
> 
> **[[00 Journal/Entries/<% tp.file.title %> Journal|<% tp.file.title %> Journal]]**

--- end-multi-column

## Daily Overview

> [!multi-column|center-fixed]
> 
>> ```todoist
>> name: My Tasks 
>>filter: "<% tp.file.title %> | overdue" 
>>``` 
>
>> #### Done Tasks
>> %% TCT_TEMPLATED_START <% tp.file.title + " 00:00" %> %%
>> 
>> %% TCT_TEMPLATED_END <% tp.file.title + " 23:59" %> %%

```start-multi-column
ID: ID_uyed
Number of Columns: 2
Largest Column: standard
Border: off
Shadow: off
```

![[<% tp.file.title %> Journal#Morning Log]]

--- column-end ---

![[<% tp.file.title %> Journal#Evening Log]]

--- end-multi-column

```start-multi-column
ID: ID_rqi3
Number of Columns: 2
Largest Column: standard
border: off
Shadow: off
```

> [!morning] #### Morning Data
> - log-sleep-rating:: 0
> - log-nightmares:: no

--- column-end ---

> [!evening] #### Evening Data
> - log-day-rating:: 0
> - log-word-of-the-day:: 

--- end-multi-column

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





