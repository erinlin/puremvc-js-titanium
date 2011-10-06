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
//這樣寫比較不容易誤會...
Myapp.comm.StartupCommand  = Puremvc.clone( Puremvc.SimpleCommand );
Myapp.comm.StartupCommand.execute = function( note ){
	this.facade.registerMediator( new Myapp.medi.MainMediator );
	alert("startupCommand : " + note.getBody());
	this.facade.registerProxy( Puremvc.clone( Puremvc.Proxy, "TestProxy", "This is TestProxy's data" ) );
	Ti.API.info( "MainMediator exist? " + this.facade.hasMediator("MainMediator") );
	Ti.API.info( this.facade.retrieveProxy("TestProxy").getData() );
	this.facade.removeCommand( 'startUp');
	Ti.API.info( "startUpCommand exist ? " + this.facade.hasCommand('startUp'));
}


var startUp = function(){
	Puremvc.facade.registerCommand( 'startUp', Myapp.comm.StartupCommand );
	Puremvc.facade.sendNotification( "startUp", "Welcome to Puremvc!" );
};

setTimeout(startUp, 200);
