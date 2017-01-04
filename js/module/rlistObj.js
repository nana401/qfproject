var rlistObj = Object.create(searchObj);
/*citylistObj.name = '城市列表页',*/
//jQuery中的一个连接方法
rlistObj = $.extend(rlistObj,{
	
	name:'餐厅列表页',
	dom:$('#rlist')
})