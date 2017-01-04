(function(){
	var clientWidth = document.documentElement.clientWidth;
	//第二步， 为不同设备设置不同的根元素的字体大小
	document.documentElement.style.fontSize =  clientWidth * (20/320) + 'px';
})();