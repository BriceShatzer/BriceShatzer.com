//var tech_json;
//var tools_json;
//var url;

$(function(){

$( "[data-role='header']" ).toolbar({ theme: "b" });
$( "[data-role='panel']" ).panel({ theme: "b" });
$.mobile.defaultPageTransition = "slide";



//$("body").on( "pagecontainerchange", function( event, ui ) { });

var skills;
function navBarIntialization(){
	$('a.current').removeClass('current');
	var $navItems = $('#navigation a')
	//.not('');
	$.each(['/development.html','/creative.html','/tools.html','#about'], function(i, url) { $navItems.eq(i).attr('href',url) });
	if( /development.html/.test($.mobile.path.getLocation()) ){
		$('a[href="/development.html"]').removeAttr('href').addClass('current');
	}
	if(/creative.html/.test($.mobile.path.getLocation()) ){
		$('a[href="/creative.html"]').removeAttr('href').addClass('current');	
	}
	if(/tools.html/.test($.mobile.path.getLocation()) ){
		$('a[href="/tools.html"]').removeAttr('href').addClass('current');	
	} 
}
/*function generateDisplayValues(object) { object.url = encodeURIComponent(object.name) }
function buildMenuItems(array,topic){
	// in addition to the array, the "topic" of the nav menu should also be passed into to the function. This will assist in building the links. 		

	var $panelList = $('<ul data-role="listview"></ul>');

	$.each(array, function() {
		var $menuItem = $('<li></li>');

		if(this.childItems){
			var $listOfChildItems = $('<ul data-role="listview"></ul>');
			$.each(this.childItems, function() {
				var childObject = this;
				generateDisplayValues(childObject);
				$('<li></li>')
	//				.append( '<a href="#">'+childObject.name+'</a>' )
	//-- points to the page and adds a hash to drive that page's functionality
	//				.append( '<a href="/'+topic+'.html#'+encodeURIComponent(childObject.name)+'">'+childObject.name+'</a>' )
					.append( '<a href="/development.html?'+encodeURIComponent(childObject.name)+'">'+childObject.name+'</a>' )				
					.appendTo( $listOfChildItems );

				});
			$menuItem.append( 
				$('<div data-role="collapsible" data-inset="false" class="ui-icon-cloud"></div>')
					.append( '<h1 class="ui-icon-cloud">'+this.name+'</h1>' )
					.append( $listOfChildItems )
				)
		} else {
			generateDisplayValues(this);
			$menuItem.append( '<a href="#" data-icon="cloud">'+this.name+'</a>' )
		}
		$panelList.append($menuItem)
	});
		
	$panelList.appendTo( '#developmentContent' );	
	$('#developmentContent').enhanceWithin(); 
}*/

/*
if(!tech_json){
	$.getJSON('/tech.json', function(data) {
		buildMenuItems(data,'development');
		tech_json = data;
		console.log('tech_json loaded via navigation.js' );
	});
}
*/
//navBarIntialization();
console.log("function navBarIntialization() has been fired from navigation.js");




/*$.getJSON('/tools.json', function(data) {
	buildMenuItems(data,'tools');
	tools_json = data;
});*/


/*
$( "body" ).on( "pagecontainerchange", function( event, ui ) {
	url = $.mobile.path.getLocation();
	console.log('pagecontainerchange fired from navigation.js');
	console.log('url = '+url);
});  
*/

$("body").on("click","div.quickInfo_close-arrow, div.quickInfo_open-arrow", function(){ 
	$("#quickInfo").panel( "toggle" );
})

$openArrow = $('div.quickInfo_open-arrow');
$( "body" ).on({
	panelbeforeopen:function() { $openArrow.addClass('panel-open') },
	panelbeforeclose:function(){ $openArrow.removeClass('panel-open') }
})

/*$( "#quickInfo" ).on({
		beforeclose:function(){$('div.quickInfo_open-arrow.panel-open').removeClass('panel-open');console.log('panel closed') },
		beforeopen:function(){$('div.quickInfo_open-arrow').addClass('panel-open');console.log('panel opened')}
});
$("body").on("beforeclose","#quickInfo",function(){
	$openArrow.removeClass('panel-open');
	console.log('"beforeclose event fired"')
})

$("body").on("beforeopen","#quickInfo",function(){
	$openArrow.addClass('panel-open');
	console.log('"beforeopen event fired"')
});
*/


	//"beforeclose", function( event, ui ) {$('div.quickInfo_open-arrow.panel-open').removeClass('panel-open')} );
//$( "#quickInfo" ).on( "beforeopen", function( event, ui ) {$('div.quickInfo_open-arrow').addClass('panel-open')} );
//--tools page
/*	if( /tools.html/.test($.mobile.path.getLocation())  && $('#toolList')[0].innerHTML.length === 0 ){
	    console.log('loading tools.json');
	    $.getJSON('/tools.json', function(data) { 
	        tools_json = data; 
	        buildToolContent();
	        $('section,#toolList').enhanceWithin()
	    });
	}
*/
//--development page 
	//if( /development.html/.test($.mobile.path.getLocation())  && $('#toolList')[0].innerHTML.length === 0 ){}


//});


});