//创建一个hash值 与模块 映射关系表
var hashMap = {
	'address': searchObj,
	'rlist': rlistObj,
	'detail': detailObj,
	'citylist': citylistObj
}
var prevModule = null; //前一个模块
var curModule = null;  //当前模块

function routeController(hash){
	console.log(hash)
	//路由控制方法  hash = address  hash = citylist
	var module = hashMap[hash] || hashMap['address']; // 得到对应hash值的对应的模块对象
	//module = searchObj module = citylistObj
	//接着我们需要维护好前一个与当前模块的关系？
	console.log(module)
	prevModule = curModule; //prevModule = null  prevModule = searchObj
	curModule = module; // curModule = searchObj  curModule = citylistObj
	if(prevModule) {
		prevModule.leave(); //searchObj.leave()
	}
	curModule.enter();
}

if(location.hash) {
	var hash = location.hash.slice(1); //#address
	routeController(hash);
}else {
	routeController('address');
}
window.onhashchange = function(){
	var hash = location.hash.slice(1); //#address
	routeController(hash);
}