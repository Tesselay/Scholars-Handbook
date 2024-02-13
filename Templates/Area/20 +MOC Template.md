---
parent: 
title: Area Title
area: 
date-created: 17/11/2023 20:11
date-modified: 13/02/2024 14:02
---

# Area Title

Description...

### Files

```dataviewjs
for (let group of (dv.pages('"<path>"').where(p => p.file.name != "MOC")).groupBy(p => p.file.folder)) {
	dv.header(
		5, 
		(group.key).slice(group.key.lastIndexOf('/')+1)
	)
	dv.list(group.rows .map(k => k.file.link))
};
```
