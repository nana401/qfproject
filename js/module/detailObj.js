var detailObj = Object.create(searchObj);
/*citylistObj.name = '城市列表页',*/
//jQuery中的一个连接方法
detailObj = $.extend(detailObj,{
	name:'餐厅详情页',
	dom:$('#detail')
})