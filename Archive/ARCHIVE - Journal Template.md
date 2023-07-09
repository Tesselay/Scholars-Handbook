---
type: daily
date: date(today)
banner: "![[5centimeterspersecond.png]]"
banner_y: 0.172
---
# Journal
`````col
````col-md
flexGrow=1
===
```button
name Previous Journal
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FEntries%2F" + tp.date.now("YYYY-MM-DD", -1) + "%20Journal"%>
class neumorphic_button neumorphic_button-journal
```
````
````col-md
flexGrow=1
===
```button
name Day's Note
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FDaily%2F" + tp.date.now("YYYY-MM-DD") %>
class neumorphic_button neumorphic_button-journal
```
````
````col-md
flexGrow=1
===
```button
name Previous Journal
type link
action <% "obsidian://open?vault=Second%20Brain&file=Journal%2FEntries%2F" + tp.date.now("YYYY-MM-DD", +1) + "%20Journal"%>
class neumorphic_button neumorphic_button-journal
```
````
`````

> [!transparent]
> Text
