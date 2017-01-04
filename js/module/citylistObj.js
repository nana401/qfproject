var citylistObj = Object.create(searchObj);
/*citylistObj.name = '城市列表页',*/

//jQuery中的一个连接方法
citylistObj = $.extend(citylistObj,{
	name:'城市选择页',
	dom:$('#citylist')
})