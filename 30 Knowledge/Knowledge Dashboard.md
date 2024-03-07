---
parent: "[[Home]]"
title: Knowledge Dashboard
date-created: 2024-02-19T11:29:15+01:00
date-modified: 2024-02-19T11:30:12+01:00
---

```dataviewjs 
for (let page of dv.pages('"30 Knowledge"').where(p => p.file.name.contains("MOC"))) {
let linkPath = page.file.link.path
let parts = linkPath.split("/")
dv.paragraph("[[" + linkPath + "|" + parts[1] + "]]")
}
```
