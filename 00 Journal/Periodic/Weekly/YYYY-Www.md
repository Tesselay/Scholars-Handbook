---
parent: 
title: YYYY-Www
type: weekly
date: YYYY-MM-DD
cssclasses:
  - line3
  - clean-embed
date-created: 2024-01-22T20:35:55+01:00
date-modified: 2024-03-07T22:10:51+01:00
---

# YYYY-Www

> [!multi-column]
> > [!button]
> > Montag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Dienstag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Mittwoch
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Donnerstag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Freitag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Samstag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**
>
> > [!button]
> > Sonntag
> > **[[00 Journal/Periodic/Daily/YYYY-MM-DD|YYYY-MM-DD]]**

---

## Data

```dataviewjs
dv.span("**Sleep Rating**")

const calendarData = {
	year: 2024, 
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
	year: 2024,
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
	year: 2024,
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
WHERE log-song-of-the-day AND date >= date("YYYY-MM-DD")  AND date <= date("YYYY-MM-DD")
```

## Learned

> [!multi-column]
> > [!blank]
> > ```dataview
> > LIST log-learned-term 
> > FROM "00 Journal/Entries"
> > WHERE log-learned-term AND date >= date("YYYY-MM-DD")  AND date <= date("YYYY-MM-DD")
> > ```
>
> > [!blank]
> > ```dataview
> > LIST log-learned-translation 
> > FROM "00 Journal/Entries"
> > WHERE log-learned-translation AND date >= date("YYYY-MM-DD")  AND date <= date("YYYY-MM-DD")
> > ```
>
> > [!blank]
> > ```dataview
> > LIST log-learned-today
> > FROM "00 Journal/Entries"
> > WHERE log-learned-today AND date >= date("YYYY-MM-DD")  AND date <= date("YYYY-MM-DD")
> > ```

## Logs

> [!multi-column]
> > [!blank]
> > #### Monday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]
>
> > [!blank]
> > #### Tuesday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]

> [!multi-column]
> > [!blank]
> > #### Wednesday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]
>
> > [!blank]
> > #### Thursday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]

> [!multi-column]
> > [!blank]
> > #### Friday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]
>
> > [!blank]
> > #### Saturday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]

> [!multi-column]
> > [!blank]
> > #### Sunday YYYY-MM-DD
> > ![[YYYY-MM-DD Journal#Logs]]
>
> > [!blank]
