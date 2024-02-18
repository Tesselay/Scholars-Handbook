---
parent: 
title: 
domain: 
tags: 
date-created: 2023-11-17T20:35:12+01:00
date-modified: 2024-02-18T20:31:55+01:00
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
