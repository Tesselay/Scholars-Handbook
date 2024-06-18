const dv = app.plugins.getPlugin('dataview').api;

function getPagesOfWeek(firstWeekDay, lastWeekDay, path) {
	return dv.pages(path)
		  .where(p => p.file.frontmatter.date >= firstWeekDay && p.file.frontmatter.date <= lastWeekDay)
		  .sort((a) => a.file.frontmatter.date);
}

function getPageDates(firstWeekDay) {
	const refDay = new Date(firstWeekDay)
	const firstDay = dv.date(new Date(firstWeekDay).toISOString().split('T')[0])
	const secondDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])
	const thirdDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])
	const fourthDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])
	const fifthDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])
	const sixthDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])
	const seventhDay = dv.date(new Date(refDay.setDate(refDay.getDate() + 1)).toISOString().split('T')[0])

	return dv.array([{'date': firstDay}, {'date': secondDay}, {'date': thirdDay}, {'date': fourthDay}, {'date': fifthDay}, {'date': sixthDay}, {'date': seventhDay}])
}

function generateChartData(firstWeekDay, lastWeekDay) {
	const morningPages = getPagesOfWeek(firstWeekDay, lastWeekDay, '"00 Journal/Entries/Morning"');
	const eveningPages = getPagesOfWeek(firstWeekDay, lastWeekDay, '"00 Journal/Entries/Evening"');
	let dreamPages = getPagesOfWeek(firstWeekDay, lastWeekDay, '"00 Journal/Entries/Dreams"');

	let pageDates = getPageDates(firstWeekDay)
	const pageSleepRatings = morningPages.map(p => p['sleep-rating']).values;
	const pageDayRatings = eveningPages.map(p => p['day-rating']).values;

	dreamPages = dreamPages.concat(pageDates)
	const pageNightmares = dreamPages.groupBy(p => p['date'])
	  .map(p => p.rows.filter(e => e['nightmare'] === true))
	  .map(p => p.length)
	  .array();

	pageDates = pageDates.map(p => p.date.toISODate())

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
	const chartData = generateChartData(firstWeekday, lastWeekDay);
	window.renderChart(chartData, container);
}

