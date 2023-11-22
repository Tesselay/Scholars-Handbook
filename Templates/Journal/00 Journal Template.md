---
type: journal
date: <% tp.file.title.split(" ")[0] %>
banner: "![[5centimeterspersecond.png]]"
banner_y: 0.172
cssclasses:
  - oc-padding-0
---
# Journal

> [!multi-column]
>> [!button]
>> Previous Journal
>> 
>> **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**
>
>> [!button]
>> Days Note
>> 
>> **[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]**
>
>> [!button]
>> Next Journal
>> 
>> **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]** 

### Morning Log
> [!morning] #### 🌅 Morning Log
> 🕘 **hh:mm**
> 
> Text

### Morning Data

> [!morning] #### Morning Data
> - log-sleep-rating::
> - log-nightmares:: 

### Evening Log
> [!evening] #### 🌇 Evening Log
> 🕤 **hh:mm**
> 
> Text

> [!evening] #### 🙏 Gratitude Journal
> 1.
> 2.
> 3.
> 4.
> 5.

### Evening Data

> [!evening] #### Evening Data
> - log-day-rating::
> - log-song-of-the-day::

## What I Learned
### Terminology / Words
- log-learned-term::

### Translation
- log-learned-translation::

### Generic
- log-learned-today:: 

## Logs
> [!log]+ 
> #tag 
>
> Text
