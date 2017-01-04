var searchObj = {
	name:'地址搜索页',
	dom:$('#address'),
	init:function(){
		this.bindEvent();//绑定该模块应该绑定的事件
	},
	bindEvent:function(){
		console.log('绑定事件');
	},
	enter:function(){
		console.log('我要进行360度旋转进入');
		this.dom.show();
	},
	leave:function(){
		this.dom.hide();
	}

};
