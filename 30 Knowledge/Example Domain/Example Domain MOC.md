---
parent: [[30 Knowledge/Knowledge Dashboard|Knowledge Dashboard]]
title: Example Domain MOC
domain: Example Domain
tags: 
date-created: 2024-03-07T22:14:53+01:00
date-modified: 2024-03-07T22:17:05+01:00
---

# Example Domain MOC

```dataviewjs
for (let group of (dv.pages('"30 Knowledge/Example Domain"').where(p => p.file.name.contains("MOC") != true)).groupBy(p => p.file.folder)) {
	dv.header(
		5, 
		(group.key).slice(group.key.lastIndexOf('/')+1)
	)
	dv.list(group.rows .map(k => k.file.link))
};
```
