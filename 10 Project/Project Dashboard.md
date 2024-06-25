---
title: Project Dashboard
date-created: 2024-02-07T11:28:31+01:00
date-modified: 2024-06-25T16:52:57+02:00
cssclasses: 
parent: "[[Home]]"
type: 
tags: 
---

```dataviewjs 
for (let page of dv.pages('"10 Project"').where(p => p.file.name.contains("+MOC"))) {
let linkPath = page.file.link.path
let parts = linkPath.split("/")
dv.paragraph("[[" + linkPath + "|" + parts[1] + "]]")
}
```
