	Will never be used, to keep an idea on data tracking.


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
> - log-song-of-the-day:: 
> - log-musician-to-remember:: 

--- end-multi-column

## Daily Data

````col
```col-md
flexGrow=1
===

> [! datalog] #### 💤 Sleep
> - log-sleep-time:: 0:00
> - log-wake-up-time:: 0:00
> - log-time-slept:: 0:00

> [! datalog] #### 🏃‍♀️ Exercise
> - log-cycling:: 0 km
> - log-push-up:: 0 

```
```col-md
flexGrow=1
===
> [! datalog] #### ☕ Consumables
> - log-soda:: 0 l
> - log-water:: 0 l
> - log-food:: {string}
> - log-healthy-eating:: {number 1-5}

> [! datalog] #### ♻ Habit 
> - log-minibrush:: No
> - log-meditation:: No
> - log-breakfast:: No
> - log-walk:: No
```
```col-md
flexGrow=1
===
> [!datalog] #### ⌚ Time Tracking
> - log-creative:: 0:00
> - log-gaming:: 0:00
> - log-learning:: 0:00
> - log-working:: 0:00
> - log-productivity:: 0:00
> - log-socializing:: 0:00
> - log-relationship:: 0:00
> - log-cat-playtime:: 0:00
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





