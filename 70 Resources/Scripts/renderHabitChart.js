function getPagesOfWeek(firstWeekDay, lastWeekDay, path) {
	const dv = app.plugins.getPlugin('dataview').api;

	return dv.pages(path)
		  .where(p => p.file.frontmatter.date >= firstWeekDay && p.file.frontmatter.date <= lastWeekDay)
		  .sort((a) => a.file.frontmatter.date);
}

function unique(array, key) {
	let seen = new Set();
	return array.filter(item => {
		let k = key(item);
		return seen.has(k) ? null : seen.add(k);
	});
}

function generateChartData(firstWeekDay, lastWeekDay) {
	const habitTasks = app.plugins.getPlugin('obsidian-tasks-plugin').getTasks()
		.filter(p => p.tags.includes('#habit'));
	const doneHabits = habitTasks.filter(h =>  
		h.doneDate != null && 
		h.doneDate._i >= firstWeekDay && 
		h.doneDate._i <= lastWeekDay
	);
	const habitsDatasets = doneHabits.map(entry => ({
		x: entry.doneDate._i,
		y: entry.description.split(' |')[0].slice(7)
	}))
	// Added filter to remove example habit gathered from '70 Resources/Habits.md'
	const habitsLegend = unique(habitTasks, item => item.description)
							.map(h => h.description.split(' |')[0].slice(7))
							.filter(h => h != '');

	const eveningPages = getPagesOfWeek(firstWeekDay, lastWeekDay, '"00 Journal/Entries/Evening"');
	const pageDates = eveningPages.map(p => p.file.frontmatter.date).values;

	const chartData = {
		type: 'matrix',
		data: {
		  datasets: [{
			data: habitsDatasets,
			backgroundColor: 'rgba(33, 173, 70, 0.8)',
			width: ({chart}) => (chart.chartArea || {}).width / 7 - 1,
			height: ({chart}) => (chart.chartArea || {}).height / 5 - 1,
		  }],
		},
		options: {
			scales: {
				x: {
					type: 'category',
					labels: pageDates,
					offset: true
				},
				y: {
					type: 'category',
					labels: habitsLegend,
					offset: true
				}
			},
			plugins: {
				title: {
					display: true,
					text: 'Habits'
				},
				legend: {
					display: false
				}
			}
		}
  }

	return chartData;
}

export function renderChart(firstWeekDay, lastWeekDay, container) {
	const chartData = generateChartData(firstWeekDay, lastWeekDay);
	window.renderChart(chartData, container);
}

