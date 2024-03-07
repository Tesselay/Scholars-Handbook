---
parent: "[[Project Dashboard]]"
title: Project Title
project: 11 Example Project
tags:
  - project/example-project
date-created: 2023-11-17T20:35:12+01:00
date-modified: 2024-02-13T18:06:57+01:00
---

# Project Title

Description...

### Files

```dataviewjs
for (let group of (dv.pages('"10 Project/11 Example Project"').where(p => p.file.name != "MOC")).groupBy(p => p.file.folder)) {
	dv.header(
		5, 
		(group.key).slice(group.key.lastIndexOf('/')+1)
	)
	dv.list(group.rows .map(k => k.file.link))
};
```
