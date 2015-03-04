/*
 @Author Murtuza Saifee
 * */
var window = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var btnGetEmail = Titanium.UI.createButton({
	title : 'Get Email',
	zIndex : 1,
	right : 4,
	bottom : 4,
	width : '40%',
	height : 60
});
btnGetEmail.addEventListener('click', function(e) {
	var emailFetcher = require('com.emailprovider');
	
	//Returns the primary email of the device or Return null if no email setup//
	var primaryEmail = emailFetcher.getPrimaryEmail();
	alert(primaryEmail);
});
window.add(btnGetEmail);

window.open();

