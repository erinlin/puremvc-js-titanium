(function(){
	Myapp.medi.MainMediator = function(){
		// create tab group
		var tabGroup = Titanium.UI.createTabGroup();
		//
		// create base UI tab and root window
		//
		var win1 = Titanium.UI.createWindow({  
		    title:'Tab 1',
		    backgroundColor:'#fff'
		});
		var tab1 = Titanium.UI.createTab({  
		    icon:'KS_nav_views.png',
		    title:'Tab 1',
		    window:win1
		});
		
		var label1 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 1',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win1.add(label1);
		
		//
		// create controls tab and root window
		//
		var win2 = Titanium.UI.createWindow({  
		    title:'Tab 2',
		    backgroundColor:'#fff'
		});
		var tab2 = Titanium.UI.createTab({  
		    icon:'KS_nav_ui.png',
		    title:'Tab 2',
		    window:win2
		});
		
		var label2 = Titanium.UI.createLabel({
			color:'#999',
			text:'I am Window 2',
			font:{fontSize:20,fontFamily:'Helvetica Neue'},
			textAlign:'center',
			width:'auto'
		});
		
		win2.add(label2);
		//
		//  add tabs 
		//
		tabGroup.addTab(tab1);  
		tabGroup.addTab(tab2);  
		
		function onClick(e){
			alert( e );
		}
		
		//
		var m = Puremvc.clone( Puremvc.Mediator , "MainMediator" );
		
		var eventlist = [
			{ target: win1, type:'click', callback: function(e){ alert('win1 click!') }},
			{ target: win2, type:'click', callback: function(e){ alert('win2 click!') }}
		];
		//重點覆寫 onRegister and onRemove
		m.onRegister = function(){
			for (var i = 0; i < eventlist.length; i++) {
			  var obj = eventlist[i];
			  obj.target.addEventListener( obj.type , obj.callback );
			};
			tabGroup.open();
		}
		
		m.onRemove = function(){
			//清掉 ui 或 win.close 可以寫這邊
		}
		return m;
	}
})();
