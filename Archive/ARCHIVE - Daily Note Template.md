---
type: daily
date: <% tp.file.title %>
banner: "![[02929_scottishhighlands_1920x1080.jpg]]"
cssclass: line3
banner_y: 0.5
---
# <% tp.file.title %>

`````col
````col-md
flexGrow=1
===
```button
name Previous Day
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>
class neumorphic_button
```
````
````col-md
flexGrow=1
===
```button
name Next Day
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + tp.date.now("YYYY-MM-DD", +1, tp.file.title, "YYYY-MM-DD") %>
class neumorphic_button
```
````
````col-md
flexGrow=1
===
```button
name Week
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
class neumorphic_button
```
````
````col-md
flexGrow=1
===
```button
name Month
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>
class neumorphic_button
```
````
````col-md
flexGrow=1
===
```button
name Journal
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + "Journal/Entries/" + tp.file.title + "Journal|" + tp.file.title + "Journal" %>
class neumorphic_button
```
````
`````


>- [google calendar link](https://calendar.google.com)
>- [tracking app](https://docs.sleep.urbandroid.org/)
---

## Morning Review

````col
```col-md
flexGrow=1
===
> [!morning] ### 🌅 Morning Log
> - log-morning::
>   
>   
>   
```
```col-md
flexGrow=1
===
> [! morning] ### ✅ Day Planning  
> - [ ] 

> [! morning] ### ☑ Extra things to do
>  - [ ] 
```
````

---

## Log

````col
```col-md
flexGrow=1
===

> [! datalog] ### 💤 Sleep
> - log-sleep-time:: 0:00
> - log-wake-up-time:: 0:00
> - log-time-slept:: 0:00
> - log-sleep-rating:: 5
> - log-nightmares:: no

> [! datalog] ### 🏃‍♀️ Exercise
> - log-cycling:: 0 km
> - log-push-up:: 0 

```
```col-md
flexGrow=1
===
> [! datalog] ### ☕ Consumables
>  - log-soda:: 0 l
> - log-water:: 0 l
> - log-food:: {string}
> - log-healthy-eating:: {number 1-5}

> [! datalog] ### ♻ Habit 
> - log-minibrush:: No
> - log-meditation:: No
> - log-breakfast:: No
> - log-walk:: No
```
```col-md
flexGrow=1
===
> [!datalog] ### ⌚ Time Tracking
>  - log-creative:: 0:00
> - log-gaming:: 0:00
> - log-learning:: 0:00
> - log-working:: 0:00
> - log-socializing:: 0:00
> - log-relationship:: 0:00
> - log-cat-playtime:: 0:00
```
````

---

## Evening Review

````col
```col-md
flexGrow=1
===
> [! evening] ### Evening Log
> - log-day-review:: 
>   
> - log-day-rating:: {numbers 1-5} 
```
```col-md
flexGrow=1
===
> [! evening] ### Songs of the day
> - log-song-of-the-day:: {song-name}
```
```col-md
flexGrow=1
===
> [! evening] ### Files created today
> ```dataview
> list
> where file.cday = date(today)
> sort file.ctime desc
> ``` 

> [! evening] ### Files updated today
> ```dataview
> list
> where file.mday = date(today)
> sort file.ctime desc
> ```
```
````






