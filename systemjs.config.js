//systemjs.config.js
//IFFI Function (Self called function)
(function(){
	System.config({
		map:{
			app:"App", 
            '@angular/core':'node_modules/@angular/core/bundles/core.umd.js', /*.umd means universal module defination  */
            '@angular/common':'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler':'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser':'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic':'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

			//for forms
			'@angular/forms':'node_modules/@angular/forms/bundles/forms.umd.js',
            'rxjs':'node_modules/rxjs'
			/* this is a folder where we write code*/
		},
		packages:{
			app:{
				main:"./main.js" // This is startup javascript 
			},
            rxjs:{
                defaultExtension:'js' // We required all file in rxjs folder.
            }
		}
	})
})(this);
