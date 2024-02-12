---
type: home
banner: "![[scottishhighlands.jpg]]"
banner_y: 0.5
cssclass: line2
---

# Welcome back, Dominique

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
>> [!button]
>> Today's Note
>> 
>> ```dataviewjs
>> let dailyNoteAmount = dv.pages('"00 Journal/Periodic/Daily"').length 
>> let todayNote = dv.pages('"00 Journal/Periodic/Daily"')[dailyNoteAmount-1].file.link.path;
>> let todayNoteFullPath = todayNote.substring(0, todayNote.length - 3);
>> let todayNoteAbridgedPath = todayNoteFullPath.split("/");
>> todayNoteAbridgedPath = todayNoteAbridgedPath[todayNoteAbridgedPath.length - 1]
>> dv.span("**[[" + todayNoteFullPath + "|" + todayNoteAbridgedPath + "]]**");
>> ```
>
>> [!button]
>> This Week's Note
>> 
>> ```dataviewjs
>> let weeklyNoteAmount = dv.pages('"00 Journal/Periodic/Weekly"').length 
>> let weeksNote = dv.pages('"00 Journal/Periodic/Weekly"')[weeklyNoteAmount-1].file.link.path;
>> let weeksNoteFullPath = weeksNote.substring(0, weeksNote.length - 3);
>> let weeksNoteAbridgedPath = weeksNoteFullPath.split("/");
>> weeksNoteAbridgedPath = weeksNoteAbridgedPath[weeksNoteAbridgedPath.length - 1]
>> dv.span("**[[" + weeksNoteFullPath + "|" + weeksNoteAbridgedPath + "]]**");
>> ```
>
>> [!button]
>> This Month's Note
>> 
>> ```dataviewjs
>> let monthlyNoteAmount = dv.pages('"00 Journal/Periodic/Monthly"').length 
>> let monthsNote = dv.pages('"00 Journal/Periodic/Monthly"')[monthlyNoteAmount-1].file.link.path;
>> let monthsNoteFullPath = monthsNote.substring(0, monthsNote.length - 3);
>> let monthsNoteAbridgedPath = monthsNoteFullPath.split("/");
>> monthsNoteAbridgedPath = monthsNoteAbridgedPath[monthsNoteAbridgedPath.length - 1]
>> dv.span("**[[" + monthsNoteFullPath + "|" + monthsNoteAbridgedPath + "]]**");
>> ```
>
>> [!button]
>> This Year's Note
>> 
>> ```dataviewjs
>> let yearlyNoteAmount = dv.pages('"00 Journal/Periodic/Yearly"').length 
>> let yearlyNote = dv.pages('"00 Journal/Periodic/Yearly"')[yearlyNoteAmount-1].file.link.path;
>> let yearlyNoteFullPath = yearlyNote.substring(0, yearlyNote.length - 3);
>> let yearlyNoteAbridgedPath = yearlyNoteFullPath.split("/");
>> yearlyNoteAbridgedPath = yearlyNoteAbridgedPath[yearlyNoteAbridgedPath.length - 1]
>> dv.span("**[[" + yearlyNoteFullPath + "|" + yearlyNoteAbridgedPath + "]]**");
>> ```

---





