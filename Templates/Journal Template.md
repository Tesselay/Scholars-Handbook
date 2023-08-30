---
type: daily
date: <% tp.file.title.split(" ")[0] %>
banner: "![[5centimeterspersecond.png]]"
banner_y: 0.172
cssclass: oc-padding-0
---
# Journal

````col
```col-md
flexGrow=1
===
> [!button]
> Previous Journal 
> 
> **[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]** 
```
```col-md
flexGrow=1
===
> [!button]
> Day's Note 
> 
> **[[<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]** 
```
```col-md
flexGrow=1
===
> [!button]
> Next Journal 
> 
> **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") + " Journal" %>]]**
```
````

## Morning Log
> [!morning] #### 🌅 Morning Log
> 00:00
> Text

## Morning Data

> [!morning] #### Morning Data
> - log-sleep-rating::
> - log-nightmares:: no

## Evening Log
> [!evening] #### 🌇 Evening Log
> 00:00
> Text

## Evening Data

> [!evening] #### Evening Data
> - log-day-rating::
> - log-word-of-the-day:: 
> - log-song-of-the-day::

## Learning
### Terminology / Words
- log-learned-term::

### Generic
- log-learned-today:: 

## Logs
> [!log]+ 
> #tag 
>
> Text
