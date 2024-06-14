function getPageData(firstWeekday, lastWeekDay) {
	const dv = app.plugins.getPlugin('dataview').api;

	const getPages = (path) => 
		dv.pages(path)
		  .where(p => p.file.frontmatter.date >= firstWeekday && p.file.frontmatter.date <= lastWeekDay)
		  .sort((a) => a.file.frontmatter.date);
	
	const dailyPages = getPages('"00 Journal/Periodic/Daily"');
	const morningPages = getPages('"00 Journal/Entries/Morning"');
	const eveningPages = getPages('"00 Journal/Entries/Evening"');
	const dreamPages = getPages('"00 Journal/Entries/Dreams"');
	
	const pageDates = dailyPages.map(p => p.file.frontmatter.date).values;
	const pageSleepRatings = morningPages.map(p => p['sleep-rating']).values;
	const pageDayRatings = eveningPages.map(p => p['day-rating']).values;
	
	const pageNightmares = dreamPages.groupBy(p => p['date'])
	  .map(p => p.rows.filter(e => e['nightmare'] === true))
	  .map(p => p.length)
	  .array();

	return [pageDates, pageSleepRatings, pageDayRatings, pageNightmares];
}

function generateChartData(pageData) {
	const [pageDates, pageSleepRatings, pageDayRatings, pageNightmares] = pageData;

	const chartData = {
		data: {
			labels: pageDates,
			datasets: [
				{
					type: 'line',
					label: 'Sleep Rating',
					data: pageSleepRatings,
					backgroundColor: [
						'rgba(172, 167, 252, 0.2)'
					],
					borderColor: [
						'rgba(172, 167, 252, 1)'
					],
					borderWidth: 1,
					fill: true
				},
				{
					type: 'line',
					label: 'Day Rating',
					data: pageDayRatings,
					backgroundColor: [
						'rgba(52, 166, 41, 0.2)'
					],
					borderColor: [
						'rgba(52, 166, 41, 1)'
					],
					borderWidth: 1,
					fill: true
				},
				{
					type: 'bar',
					label: 'Nightmare',
					data: pageNightmares,
					backgroundColor: 'rgba(156, 0, 3, 0.2)',
					borderColor: 'rgba(156, 0, 3, 0.5)',
					borderWidth: 1,
					barPercentage: 0.5,
				}
			]
		},
		options: {
			scales: {
				y: {
					suggestedMax: 10,
					suggestedMin: 0,
					title: {
						text: 'Rating / # of Nightmares',
						display: true
					}
				}
			},
			plugins: {
				title: {
					display: true,
					text: 'Sleep / Day'
				}
			}
		}
	}

	return chartData;
}

export function renderChart(firstWeekday, lastWeekDay, container) {
	const pageData = getPageData(firstWeekday, lastWeekDay);
	const chartData = generateChartData(pageData);
	window.renderChart(chartData, container);
}

