---
parent: <% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>
title: 
date: <% tp.date.weekday("YYYY-MM-DD",  0, tp.file.title, "YYYY-[W]ww") %>
cssclasses:
  - line3
  - clean-embed
date-created: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
date-modified: <% tp.date.now("YYYY-MM-DD[T]HH:MM:SSZ") %>
---

# <% tp.file.title %>

> [!multi-column]
> 
>> [!button]
>> <% tp.date.now("MMM", 0, tp.file.title, "YYYY-[W]ww") %>
>> **[[00 Journal/Periodic/Monthly/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>]]**

> [!multi-column]
> 
> > [!button]
> > Last Week
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", "P-1W", tp.file.title, "YYYY-[W]ww") %>|<% tp.date.now("YYYY-[W]ww", "P-1W", tp.file.title, "YYYY-[W]ww") %>]]**
> 
> > [!button]
> > <% tp.date.now("MMM", 0, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Monthly/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>]]**
> 
> > [!button]
> > Next Week
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", "P1W", tp.file.title, "YYYY-[W]ww") %>|<% tp.date.now("YYYY-[W]ww", "P1W", tp.file.title, "YYYY-[W]ww") %>]]**

> [!multi-column]
>
> > [!button]
> > <% tp.date.weekday("dddd", 0, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 1, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 2, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 3, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 4, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 5, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>]]**
>
> > [!button]
> > <% tp.date.weekday("dddd", 6, tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Daily/<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>|<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>]]**

---

## Data

```js-engine
const firstWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>';
const lastWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>';

const chartRenderer = await engine.importJs('Scripts/renderDailyDataChart.js');
return chartRenderer.renderChart(firstWeekDay, lastWeekDay, container);             
```   

```js-engine
const firstWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>';
const lastWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>';

const chartRenderer = await engine.importJs('Scripts/renderHabitChart.js');
return chartRenderer.renderChart(firstWeekDay, lastWeekDay, container);         
```

## Songs of the Week

```dataview
LIST log-song-of-the-day
FROM "00 Journal/Entries"
WHERE log-song-of-the-day AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
```

## Learned

```dataview
LIST log-learned-today 
FROM "00 Journal/Entries"
WHERE log-learned-today AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
```

## Logs

> [!multi-column]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %> Journal|Monday <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %> Journal|Tuesday <% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %> Journal|Wednesday <% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %> Journal|Thursday <% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %> Journal|Friday <% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %> Journal|Saturday <% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### [[00 Journal/Entries/<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %> Journal|Sunday <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>]]
> > ![[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>Journal#Logs]]
>
> > [!blank]
