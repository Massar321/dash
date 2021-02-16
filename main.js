//Chart options
const options={
	Chart: { 
		height: 450,
		width :'100%',
		type: 'bar',
		backround: '#f4F4F4',
		forecolor:'#333'
},
series:[{
	name : 'population',
	data : [555555, 44444, 5555, 6666, 7777, 77777, 999999,]

}]
 };

//init chart
const chart = new ApexCharts(document.querySelector('#chart'),options);
// Render chart
chart.render();