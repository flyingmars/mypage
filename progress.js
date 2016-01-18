app.factory('ProgressFactory', function() {
return {progresses: [
	{
		title: 'Class Activities',
		subprogresses: [
			{
				title: 'CA 1',
				value: 100
			},
			{
				title: 'CA 2',
				value: 80
			},
			{
				title: 'CA 3',
				value: 90
			},
			{
				title: 'CA 4',
				value: 90
			},
			{
				title: 'CA 5',
				value: 90
			},
		]
	},
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
