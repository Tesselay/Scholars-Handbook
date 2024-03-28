---
parent: 
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
> > [!button]
> > <% tp.date.now("YYYY-[W]ww", "P-1W", tp.file.title, "YYYY-[W]ww") %>
> > **[[00 Journal/Periodic/Weekly/<% tp.date.now("YYYY-[W]ww", "P-1W", tp.file.title, "YYYY-[W]ww") %>|<% tp.date.now("YYYY-[W]ww", "P-1W", tp.file.title, "YYYY-[W]ww") %>]]**
> 
> > [!button]
> > <% tp.date.now("YYYY-[W]ww", "P1W", tp.file.title, "YYYY-[W]ww") %>
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
>
>> [!blank]
>> ```dataviewjs
>> const pages = dv.pages('"00 Journal/Entries"').where(p => p.file.frontmatter.date >= '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>' && p.file.frontmatter.date <= '<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>').sort((a) => a.file.frontmatter.date)
>> const pageDates = pages.map(p => p.file.frontmatter.date).values
>> const pageSleepRatings = pages.map(p => p['log-sleep-rating']).values
>> const pageDayRatings = pages.map(p => p['log-day-rating']).values
>> 
>> const pageNightmares = pages.map(p => p["log-nightmares"] === "yes" ? {x: 0, y:5} : {x: 0, y:0})
>> 
>> const chartData = {
>> 	data: {
>> 		labels: pageDates,
>> 		datasets: [
>> 			{
>> 				type: 'line',
>> 				label: 'Sleep Rating',
>> 				data: pageSleepRatings,
>> 				backgroundColor: [
>> 					'rgba(172, 167, 252, 0.2)'
>> 				],
>> 				borderColor: [
>> 					'rgba(172, 167, 252, 1)'
>> 				],
>> 				borderWidth: 1,
>> 				fill: true
>> 			},
>> 			{
>> 				type: 'line',
>> 				label: 'Day Rating',
>> 				data: pageDayRatings,
>> 				backgroundColor: [
>> 					'rgba(52, 166, 41, 0.2)'
>> 				],
>> 				borderColor: [
>> 					'rgba(52, 166, 41, 1)'
>> 				],
>> 				borderWidth: 1,
>> 				fill: true
>> 			},
>> 			{
>> 				type: 'bar',
>> 				label: 'Nightmare',
>> 				data: [...pageNightmares],
>> 				backgroundColor: 'rgba(156, 0, 3, 0.2)',
>> 				borderColor: 'rgba(156, 0, 3, 0.5)',
>> 				borderWidth: 1,
>> 				barPercentage: 0.5,
>> 			}
>> 		]
>> 	},
>> 	options: {
>> 		scales: {
>> 			y: {
>> 				suggestedMax: 10,
>> 				suggestedMin: 0,
>> 				title: {
>> 					text: 'Rating',
>> 					display: true
>> 				}
>> 			},
>> 			y1: {
>> 				suggestedMax: 10,
>> 				suggestedMin: 0,
>> 				position: 'right',
>> 				title: {
>> 					display: true
>> 				},
>> 				ticks: {
>> 					callback: function(value, index, ticks) {
>> 						switch(value) {
>> 							case 0:
>> 								return "no"
>> 							case 5:
>> 								return "yes"
>> 						}	
>> 					}
>> 				}
>> 			},
>> 
>> 		},
>> 		plugins: {
>> 			title: {
>> 				display: true,
>> 				text: 'Sleep / Day'
>> 			}
>> 		}
>> 	}
>> }
>> 
>> window.renderChart(chartData, this.container)
>> ```
> 
>> [!blank] 
>> ```dataviewjs
>> const pages = dv.pages('"00 Journal/Entries"').where(p => p.file.frontmatter.date >= '<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>' && p.file.frontmatter.date <= '<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-[W]ww") %>').sort((a) => a.file.frontmatter.date)
>> const pageDates = pages.map(p => p.file.frontmatter.date).values
>> 
>> const habits = pages.file.tasks.where(t => t.text.includes('#habit')).groupBy(h => h.text)
>> let habitsDatasets = [];
>> habits.values.forEach(element => {
>> 	let habitSuccesses = element.rows.values.filter(x => x.completed);
>> 	let habitEntries = habitSuccesses.map( entry => ({ 
>> 		x: entry.path.substring( entry.path.lastIndexOf('/') + 1, entry.path.indexOf(' Journal.md') ),
>> 		y: element.key,
>> 	}));
>> 	habitsDatasets.push(habitEntries)
>> }) 
>> habitsDatasets = habitsDatasets.flat()
>> 
>> const habitsLegend = habits.array().map(x => x.key)
>> 
>> const chartData = {
>> 	  type: 'matrix',
>> 	  data: {
>> 	    datasets: [{
>> 	      data: habitsDatasets,
>> 	      backgroundColor: 'rgba(33, 173, 70, 0.8)',
>> 	      width: ({chart}) => (chart.chartArea || {}).width / 7 - 1,
>> 	      height: ({chart}) => (chart.chartArea || {}).height / 5 - 1,
>> 	    }],
>> 	  },
>> 	options: {
>> 		scales: {
>> 			x: {
>> 				type: 'category',
>> 				labels: pageDates,
>> 				offset: true
>> 			},
>> 			y: {
>> 				type: 'category',
>> 				labels: habitsLegend,
>> 				offset: true
>> 			}
>> 		},
>> 		plugins: {
>> 			title: {
>> 				display: true,
>> 				text: 'Habits'
>> 			},
>> 			legend: {
>> 				display: false
>> 			}
>> 		}
>> 	}
>>}
> >
> >window.renderChart(chartData, this.container)
> >```

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
