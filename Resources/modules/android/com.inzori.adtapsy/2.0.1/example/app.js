// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

var adtapsy = require('com.inzori.adtapsy');
Ti.API.info("module is => " + adtapsy);

adtapsy.addEventListener('adtapsy:init', function(e){
	Ti.API.info(e);
});

adtapsy.init({appId:"YOUR_APPID_HERE"});

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
	text:'click me',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

label1.addEventListener('click', function(){
	Ti.API.info('click');
	adtapsy.showInterstitial();
});


//
//  add tabs
//
tabGroup.addTab(tab1);  
 


// open tab group
tabGroup.open();
