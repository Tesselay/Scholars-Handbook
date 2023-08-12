---
type: daily
date: <% tp.file.title.split(" ")[0] %>
banner: "![[5centimeterspersecond.png]]"
banner_y: 0.172
---
# Journal

````col
```col-md
flexGrow=1
===
> [!button]
> Previous Journal 
> 
> **[[<% tp.date.now("YYYY-MM-DD", -1) + " Journal" %>]]** 
```
```col-md
flexGrow=1
===
> [!button]
> Next Journal 
> 
> **[[00 Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1) + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1) + " Journal" %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Day's Note 
> 
> **[[<% tp.date.now("YYYY-MM-DD") %>]]** 
```
````

## Morning Log
> [!morning] #### 🌅 Morning Log
> 00:00
> Text

## Evening Log
> [!evening] #### 🌇 Evening Log
> 00:00
> Text

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
