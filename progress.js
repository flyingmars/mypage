app.factory('ProgressFactory', function() {
return {progresses: [
	{
		title: '期末考',
		subprogresses: [
			{
				title: 'Question 1',
				value: 100
			},
			{
				title: 'Question 2',
				value: 100
			},
			{
				title: 'Question 3',
				value: 100
			},
			{
				title: 'Question 4',
				value: 70
			},
		]
	},    
	{
		title: '各項成績上傳',
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
				value: 100
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
        title: 'Class Activities',
        value: 100
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
