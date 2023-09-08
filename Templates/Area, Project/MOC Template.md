---
type: moc
date: yyyy-mm-dd
banner: "![[scottishhighlands.jpg]]"
banner_y: 0.5
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
	dv.list(group.rows.file.link)
};
```