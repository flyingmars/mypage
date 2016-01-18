app.factory('ProgressFactory', function() {
return {progresses: [
	{
		title: '期末考',
		subprogresses: [
			{
				title: 'Question 1',
				value: 0
			},
			{
				title: 'Question 2',
				value: 0
			},
			{
				title: 'Question 3',
				value: 0
			},
			{
				title: 'Question 4',
				value: 0
			},
		]
	},    
	{
		title: 'Class Activities',
		subprogresses: [
			{
				title: 'CA 1',
				value: 100
			},
			{
				title: 'CA 2',
				value: 100
			},
			{
				title: 'CA 3',
				value: 100
			},
			{
				title: 'CA 4',
				value: 90
			},
			{
				title: 'CA 5',
				value: 98
			},
		]
	},
	{
		title: '成績計算作業',
		subprogresses: [
			{
				title: '期中考',
				value: 0
			},
			{
				title: '期末考',
				value: 0
			},
			{
				title: 'Class Activities',
				value: 0
			},
			{
				title: 'Homework',
				value: 0
			},
			{
				title: 'Quiz',
				value: 0
			},
		]
	},    
    {
        title: 'Homework',
        value: 100
    },
	{
		title: '期中考',
		value: 100
	},
	{
		title: 'Quiz',
		value: 100
	}
]};
});
