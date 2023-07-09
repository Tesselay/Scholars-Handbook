---
type: daily
date: date(today)
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
> **[[Journal/Entries/<% tp.date.now("YYYY-MM-DD", -1) + " Journal" %>|<% tp.date.now("YYYY-MM-DD", -1) + " Journal" %>]]** 
```
```col-md
flexGrow=1
===
> [!button]
> Next Journal 
> 
> **[[Journal/Entries/<% tp.date.now("YYYY-MM-DD", +1) + " Journal" %>|<% tp.date.now("YYYY-MM-DD", +1) + " Journal" %>]]**
```
```col-md
flexGrow=1
===
> [!button]
> Day's Note 
> 
> **[[Journal/Daily/<% tp.date.now("YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD") %>]]** 
```
````

## Morning Log
> [!morning] #### 🌅 Morning Log
> Text

## Evening Log
> [!evening] #### 🌇 Evening Log
> Text

## Things I learned today
- log-learned-today:: 

## Logs
> [!transparent]
> #tag 
>
> Text
