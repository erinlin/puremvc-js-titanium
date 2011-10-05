// this sets the background color of the master UIView (when there are no windows/tab groups on it)
/**
 * Erin Lin <erinylin@gmail.com>
 * PureMVC Demo
 */
Titanium.UI.setBackgroundColor('#000');
//app namespace
var Myapp = {};
Myapp.comm = {};
Myapp.medi = {};

Ti.include(
	"puremvc-js-1.0.js",
	"ui.js" 
	);

Myapp.comm.StartupCommand  = function(){
	var c = Puremvc.clone( Puremvc.SimpleCommand );
	c.execute = function( note ){
		this.facade.registerMediator( new Myapp.medi.MainMediator );
		alert("startupCommand : " + note.getBody());
		this.facade.registerProxy( Puremvc.clone( Puremvc.Proxy, "TestProxy", "This is TestProxy's data" ) );
		Ti.API.info( "MainMediator exist? " + this.facade.hasMediator("MainMediator") );
		Ti.API.info( this.facade.retrieveProxy("TestProxy").getData() );
		this.facade.removeCommand( 'startUp');
		Ti.API.info( "startUpCommand exist ? " + this.facade.hasCommand('startUp'));
	}
	return c;
} 

var startUp = function(){
	Puremvc.facade.registerCommand( 'startUp', new Myapp.comm.StartupCommand );
	Puremvc.facade.sendNotification( "startUp", "Welcome to Puremvc!" );
};

setTimeout(startUp, 200);
