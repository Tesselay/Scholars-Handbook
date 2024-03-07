---
parent: "[[Home]]"
title: Area Dashboard
date-created: 2024-02-13T11:42:23+01:00
date-modified: 2024-02-19T10:56:25+01:00
---

```dataviewjs 
for (let page of dv.pages('"20 Area"').where(p => p.file.name.contains("+MOC"))) {
let linkPath = page.file.link.path
let parts = linkPath.split("/")
dv.paragraph("[[" + linkPath + "|" + parts[1] + "]]")
}
```
