---
parent: 
title: <% tp.file.title %>
cssclasses:
  - line3
  - clean-embed
date-created: 2024-01-22T20:59:05+01:00
date-modified: 2024-02-13T18:07:09+01:00
---

# <% tp.file.title %>

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

```dataviewjs
dv.span("**Sleep Rating**")

const calendarData = {
	year: <% tp.date.now("YYYY",  0, tp.file.title, "YYYY") %>, 
	colors: {  
		red2green: [
			`#de425b`, 
			`#ee6856`,
			`#f88b56`,
			`#fdae5f`,
			`#ffd072`,
			`#fff18f`,
			`#cede82`,
			`#9fc97a`,
			`#72b474`,
			`#459e70`,    
			`#488f31`
		],
	},
	showCurrentDayBorder: true, 
	intensityScaleStart: 0, 
	intensityScaleEnd: 10, 
	entries: [],
}

for (let page of dv.pages('"00 Journal/Entries"').where(p => p["log-sleep-rating"])) {
	calendarData.entries.push({
		date: (page.file.name).slice(0, 10), 
		intensity: page["log-sleep-rating"]
	})
}

renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**Nightmares**")

const calendarData = {
	year: <% tp.date.now("YYYY",  0, tp.file.title, "YYYY") %>,
	colors: {  
		red2green: [
			`#de425b`, 
			`#488f31`,
			`#488f31`
		],
	},
	showCurrentDayBorder: true, 
	intensityScaleStart: 1, 
	intensityScaleEnd: 2, 
	entries: [],
}

for (let page of dv.pages('"00 Journal/Entries"').where(p => p["log-nightmares"])) {
	let test;
	if (page["log-nightmares"] == "yes" ) {
		test = 1
	} else if (page["log-nightmares"] == "no") {
		test = 2
	} 
	console.log(test)
	calendarData.entries.push({
		date: (page.file.name).slice(0, 10), 
		intensity: test
	})
}

renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**Day Rating**")

const calendarData = {
	year: <% tp.date.now("YYYY",  0, tp.file.title, "YYYY") %>,
	colors: {  
		red2green: [
			`#de425b`, 
			`#ee6856`,
			`#f88b56`,
			`#fdae5f`,
			`#ffd072`,
			`#fff18f`,
			`#cede82`,
			`#9fc97a`,
			`#72b474`,
			`#459e70`,    
			`#488f31`
		],
	},
	showCurrentDayBorder: true, 
	intensityScaleStart: 0, 
	intensityScaleEnd: 10, 
	entries: [],
}

for (let page of dv.pages('"00 Journal/Entries"').where(p => p["log-day-rating"])) {
	calendarData.entries.push({
		date: (page.file.name).slice(0, 10), 
		intensity: page["log-day-rating"]
	})
}

renderHeatmapCalendar(this.container, calendarData)
```

## Songs of the Week

```dataview
LIST log-song-of-the-day
FROM "00 Journal/Entries"
WHERE log-song-of-the-day AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
```

## Learned

> [!multi-column]
>
> > [!blank]
> > ```dataview
> > LIST log-learned-term 
> > FROM "00 Journal/Entries"
> > WHERE log-learned-term AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
> > ```
>
> > [!blank]
> > ```dataview
> > LIST log-learned-translation 
> > FROM "00 Journal/Entries"
> > WHERE log-learned-translation AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
> > ```
>
> > [!blank]
> > ```dataview
> > LIST log-learned-today
> > FROM "00 Journal/Entries"
> > WHERE log-learned-today AND date >= date("<% tp.date.weekday('YYYY-MM-DD',  0, tp.file.title, 'YYYY-[W]ww') %>")  AND date <= date("<% tp.date.weekday('YYYY-MM-DD',  6, tp.file.title, 'YYYY-[W]ww') %>")
> > ```

## Logs

> [!multi-column]
>
> > [!blank]
> > #### Monday <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### Tuesday <% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### Wednesday <% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### Thursday <% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### Friday <% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]
>
> > [!blank]
> > #### Saturday <% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "YYYY-[W]ww") %> Journal#Logs]]

> [!multi-column]
>
> > [!blank]
> > #### Sunday <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>
> > ![[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>Journal#Logs]]
>
> > [!blank]
