---
parent: "[[Home]]"
title: Home
cssclasses:
  - line2
date-created: 2023-11-22T22:51:53+01:00
date-modified: 2024-02-13T18:07:18+01:00
mb-projectName: Test
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
> > let dailyNoteAmount = dv.pages('"00 Journal/Periodic/Daily"').length 
> > let todayNote = dv.pages('"00 Journal/Periodic/Daily"')[dailyNoteAmount-1].file.link.path;
> > let todayNoteFullPath = todayNote.substring(0, todayNote.length - 3);
> > let todayNoteAbridgedPath = todayNoteFullPath.split("/");
> > todayNoteAbridgedPath = todayNoteAbridgedPath[todayNoteAbridgedPath.length - 1]
> > dv.span("**[[" + todayNoteFullPath + "|" + todayNoteAbridgedPath + "]]**");
> > ```
>
> > [!button]
> > This Week's Note
> >
> > ```dataviewjs
> > let weeklyNoteAmount = dv.pages('"00 Journal/Periodic/Weekly"').length 
> > let weeksNote = dv.pages('"00 Journal/Periodic/Weekly"')[weeklyNoteAmount-1].file.link.path;
> > let weeksNoteFullPath = weeksNote.substring(0, weeksNote.length - 3);
> > let weeksNoteAbridgedPath = weeksNoteFullPath.split("/");
> > weeksNoteAbridgedPath = weeksNoteAbridgedPath[weeksNoteAbridgedPath.length - 1]
> > dv.span("**[[" + weeksNoteFullPath + "|" + weeksNoteAbridgedPath + "]]**");
> > ```
>
> > [!button]
> > This Month's Note
> >
> > ```dataviewjs
> > let monthlyNoteAmount = dv.pages('"00 Journal/Periodic/Monthly"').length 
> > let monthsNote = dv.pages('"00 Journal/Periodic/Monthly"')[monthlyNoteAmount-1].file.link.path;
> > let monthsNoteFullPath = monthsNote.substring(0, monthsNote.length - 3);
> > let monthsNoteAbridgedPath = monthsNoteFullPath.split("/");
> > monthsNoteAbridgedPath = monthsNoteAbridgedPath[monthsNoteAbridgedPath.length - 1]
> > dv.span("**[[" + monthsNoteFullPath + "|" + monthsNoteAbridgedPath + "]]**");
> > ```
>
> > [!button]
> > This Year's Note
> >
> > ```dataviewjs
> > let yearlyNoteAmount = dv.pages('"00 Journal/Periodic/Yearly"').length 
> > let yearlyNote = dv.pages('"00 Journal/Periodic/Yearly"')[yearlyNoteAmount-1].file.link.path;
> > let yearlyNoteFullPath = yearlyNote.substring(0, yearlyNote.length - 3);
> > let yearlyNoteAbridgedPath = yearlyNoteFullPath.split("/");
> > yearlyNoteAbridgedPath = yearlyNoteAbridgedPath[yearlyNoteAbridgedPath.length - 1]
> > dv.span("**[[" + yearlyNoteFullPath + "|" + yearlyNoteAbridgedPath + "]]**");
> > ```

---

```custom-frames
frame: Proton Calendar
style: height: 80vh; width: 100%;
```

---

> [!multi-column]
>
> > [!datalog] ### Projects
> >
> > ```dataviewjs
> > let projectLinks = [];
> > for (let project of dv.pages('"10 Project"').where(p => p.file.name == "+MOC")) {
> > projectLinks.push(dv.fileLink(project.file.path, false, project.project));
> > }
> > dv.table([], projectLinks.map(p => [p]))
> > ```
>
> > [!datalog] ### Areas
>
> > ```dataviewjs
> > let areaLinks = [];
> > for (let area of dv.pages('"20 Area"').where(p => p.file.name == "+MOC")) {
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
> > limit 15
> > ```
>
> > [!datalog] ### Recently Changed Files
> >
> > ```dataview
> > list 
> > where file.mtime >= date(today) - dur(1 day)
> > limit 15
> > ```
