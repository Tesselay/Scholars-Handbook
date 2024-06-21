---
parent: <% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-[W]ww") %>
title: 
week: <% tp.date.weekday("YYYY-[W]ww",  0, tp.file.title, "YYYY-[W]ww") %>
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

> [!multi-column]
> > [!blank]
> > ```js-engine
> > const firstWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>';
> > const lastWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>';
> > 
> > const chartRenderer = await engine.importJs('70 Resources/Scripts/renderDailyDataChart.js');
> > return chartRenderer.renderChart(firstWeekDay, lastWeekDay, container);             
> > ```   
>
> > [!blank]
> > ```js-engine
> > const firstWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>';
> > const lastWeekDay = '<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>';
> > 
> > const chartRenderer = await engine.importJs('70 Resources/Scripts/renderHabitChart.js');
> > return chartRenderer.renderChart(firstWeekDay, lastWeekDay, container);         
> > ```

## Songs of the Week

```dataview
LIST log-song-of-the-day
FROM "00 Journal/Entries/Evening"
WHERE log-song-of-the-day AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
```

## Logs

```js-engine
const dv = app.plugins.getPlugin('dataview').api;
const pages = dv.pages('"00 Journal/Entries/Logs"').where(p => p.file.frontmatter.date >= '<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>' && p.file.frontmatter.date <= '<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>')

let markdownBuilder = engine.markdown.createBuilder()
let multiColumnCallout = markdownBuilder.createCallout('', 'multi-column')
let columnCalloutLeft = multiColumnCallout.createCallout('', 'blank')
let columnCalloutRight = multiColumnCallout.createCallout('', 'blank')
pages.forEach(p => {
	const filePath = p.file.path.split('.')[0];
	if ( pages.indexOf(p) % 2 == 0 ) {
		columnCalloutLeft.createParagraph(`[[${filePath}|${p.file.name}]]\n${p.takeaway}`);
		columnCalloutLeft.createParagraph('---');
	} else {
		columnCalloutRight.createParagraph(`[[${filePath}|${p.file.name}]]\n${p.takeaway}`);
		columnCalloutRight.createParagraph('---');
	}
})

return markdownBuilder
```