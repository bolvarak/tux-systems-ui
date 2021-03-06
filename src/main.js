///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import environment from './environment'; /// Environment Module //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import PLATFORM from 'aurelia-pal'; /// Platform Module //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import 'babel-polyfill'; /// Babel Polyfill //////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import * as Bluebird from 'bluebird'; /// Bluebird Promise Module ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Bluebird.config({ 'warnings': { 'wForgottenReturn': false } }); /// Bluebird Configuration //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function configure($aurelia) { /// Module Export //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Use the standard configuration and our application's resources
	$aurelia.use.standardConfiguration().feature(PLATFORM.moduleName('resources/index'));
	// Enable animation (<router-view swap-order="after" ...></router-view>)
	$aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
	// Enable HTMLImports
	// $aurelia.use.plugin($platform.moduleName('aurelia-html-import-template-loader'));
	// Check the environment for a debug flag
	if (environment.debug) {
		// Use development logging
		$aurelia.use.developmentLogging();
	}
	// Check for a testing environment
	if (environment.testing) {
		// Use the testing module
		$aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
	}
	// Start the Aurelia framework
	$aurelia.start().then(() => {
		// Set the root to that of our application
		$aurelia.setRoot(PLATFORM.moduleName('app'));
	}).catch(($error) => {
		// Log the error
		console.error($error);
	});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
} /// End Module Export //////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
