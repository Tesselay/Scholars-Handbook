---
parent: 
title: Home
cssclasses:
  - line2
date-created: 2023-11-22T22:51:53+01:00
date-modified: 2024-03-01T11:37:38+01:00
---

> [!multi-column|center-fixed]
> <h1 style="font-size: 4rem">Welcome back, Dominique</h1>

```widgets
type: clock
```

```widgets
type: quote
quote: Lorem ipsum dolor sit amet
author: Lorem Ipsum
```

<br>

> [!multi-column]
>
> > [!button]
> > Today's Note
> >
> > ```dataviewjs
> > let today = new Date()
> > today = new Date(today.getTime() + 60 * 60000)
> > let todayString = today.toISOString().substring(0, 10)
> > dv.span("**[[" + todayString + "]]**");
> > ```
>
> > [!button]
> > This Week's Note
> >
> > ```dataviewjs
> > let today = new Date()
> > today = new Date(today.getTime() + 60 * 60000)
> > let firstDayOfYear = new Date(today.getFullYear(), 0, 1);
> > let thisWeek = Math.ceil( ( (today - firstDayOfYear + 86400000) / 86400000) / 7 ).toString().padStart(2, "0")
> > dv.span("**[[" + today.getFullYear() + "-W" + thisWeek + "]]**")
> > ```
>
> > [!button]
> > This Month's Note
> >
> > ```dataviewjs
> > let today = new Date();
> > today = new Date(today.getTime() + 60 * 60000)
> > let todayString = today.toISOString().substring(0, 7)
> > dv.span("**[[" + todayString + "]]**");
> > ```
>
> > [!button]
> > This Year's Note
> >
> > ```dataviewjs
> > let today = new Date();
> > today = new Date(today.getTime() + 60 * 60000)
> > dv.span("**[[" + today.getFullYear() + "]]**");
> > ```

---

```custom-frames
frame: Proton Calendar
style: height: 80vh; width: 100%;
```

---

```todoist
name: Inbox
filter: "#Inbox"
```

---

> [!multi-column]
>
> > [!datalog] ### Projects
> >
> > #### [[10 Project/Project Dashboard|Project Dashboard]]
> >
> > ```dataviewjs
> > let projectLinks = [];
> > for (let project of dv.pages('"10 Project"').where(p => p.file.name.includes("+MOC"))) {
> > projectLinks.push(dv.fileLink(project.file.path, false, project.project));
> > }
> > dv.table([], projectLinks.map(p => [p]))
> > ```
>
> > [!datalog] ### Areas
> >
> > #### [[20 Area/Area Dashboard|Area Dashboard]]
> >
> > ```dataviewjs
> > let areaLinks = [];
> > for (let area of dv.pages('"20 Area"').where(p => p.file.name.includes("+MOC"))) {
> > areaLinks.push(dv.fileLink(area.file.path, false, area.area));
> > }
> > dv.table([], areaLinks.map(p => [p]))
> > ```

<br>

> [!multi-column]
>
> > [!datalog] ### Recent Knowledge
> >
> > ```dataview
> > list 
> > where type = "knowledge"
> > sort file.ctime desc
> > limit 15
> > ```
>
> > [!datalog] ### Recently Changed Files
> >
> > ```dataview
> > list 
> > from ""
> > sort file.mtime desc
> > limit 15
> > ```
