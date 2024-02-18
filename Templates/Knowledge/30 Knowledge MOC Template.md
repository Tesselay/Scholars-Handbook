---
parent: 
title: 
domain: 
tags: 
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

# Title

```dataviewjs
for (let group of (dv.pages('"30 Knowledge/"').where(p => p.file.name.contains("MOC") != true)).groupBy(p => p.file.folder)) {
	dv.header(
		5, 
		(group.key).slice(group.key.lastIndexOf('/')+1)
	)
	dv.list(group.rows .map(k => k.file.link))
};
```
