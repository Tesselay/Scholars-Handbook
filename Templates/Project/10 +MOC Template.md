---
parent: 
title: 
project: 
date-created: 2023-11-17T20:35:12+01:00
date-modified: 2024-02-13T18:07:09+01:00
---

# Project Title

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
