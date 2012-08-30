// JavaScript Document

/*

Author - WPTitans
Description - Main file for Javascript stuff for the theme. Powered by jQuery.

Index :-

1. Hades Super Object


*/

window.define=function(){Array.prototype.slice.call(arguments).pop()(window.jQuery)};
define(["jquery","../external/requirejs/text!../version.txt","./jquery.mobile.widget"],function(c,k){(function(a,c){var e={};a.mobile=a.extend({},{version:k,ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",
loadingMessageTextVisible:!1,loadingMessageTheme:"a",pageLoadErrorMessageTheme:"e",autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,
PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(b){"number"!==a.type(b)&&(b=a.mobile.defaultHomeScroll);a.event.special.scrollstart.enabled=!1;setTimeout(function(){c.scrollTo(0,b);a(document).trigger("silentscroll",{x:0,y:b})},20);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},nsNormalizeDict:e,nsNormalize:function(b){if(b)return e[b]||(e[b]=a.camelCase(a.mobile.ns+b))},getInheritedTheme:function(a,h){for(var g=a[0],i="",c=/ui-(bar|body|overlay)-([a-z])\b/,
d,f;g;){d=g.className||"";if((f=c.exec(d))&&(i=f[2]))break;g=g.parentNode}return i||h||"a"},closestPageData:function(a){return a.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("page")},enhanceable:function(a){return this.haveParents(a,"enhance")},hijackable:function(a){return this.haveParents(a,"ajax")},haveParents:function(b,h){if(!a.mobile.ignoreContentEnabled)return b;for(var g=b.length,d=a(),c,f,e,j=0;j<g;j++){f=b.eq(j);e=!1;for(c=b[j];c;){if("false"===(c.getAttribute?c.getAttribute("data-"+
a.mobile.ns+h):"")){e=!0;break}c=c.parentNode}e||(d=d.add(f))}return d}},a.mobile);a.fn.jqmData=function(b,h){var c;"undefined"!=typeof b&&(b&&(b=a.mobile.nsNormalize(b)),c=this.data.apply(this,2>arguments.length?[b]:[b,h]));return c};a.jqmData=function(b,c,d){var f;"undefined"!=typeof c&&(f=a.data(b,c?a.mobile.nsNormalize(c):c,d));return f};a.fn.jqmRemoveData=function(b){return this.removeData(a.mobile.nsNormalize(b))};a.jqmRemoveData=function(b,c){return a.removeData(b,a.mobile.nsNormalize(c))};
a.fn.removeWithDependents=function(){a.removeWithDependents(this)};a.removeWithDependents=function(b){b=a(b);(b.jqmData("dependents")||a()).remove();b.remove()};a.fn.addDependents=function(b){a.addDependents(a(this),b)};a.addDependents=function(b,c){var d=a(b).jqmData("dependents")||a();a(b).jqmData("dependents",a.merge(d,c))};a.fn.getEncodedText=function(){return a("<div/>").text(a(this).text()).html()};a.fn.jqmEnhanceable=function(){return a.mobile.enhanceable(this)};a.fn.jqmHijackable=function(){return a.mobile.hijackable(this)};
var f=a.find,d=/:jqmData\(([^)]*)\)/g;a.find=function(b,c,e,i){b=b.replace(d,"[data-"+(a.mobile.ns||"")+"$1]");return f.call(this,b,c,e,i)};a.extend(a.find,f);a.find.matches=function(b,c){return a.find(b,null,null,c)};a.find.matchesSelector=function(b,c){return 0<a.find(c,null,null,[b]).length}})(jQuery,this)});
define(["jquery","./jquery.mobile.core"],function(){(function(c){c(window);var k=c("html");c.mobile.media=function(){var a={},l=c("<div id='jquery-mediatest'>"),e=c("<body>").append(l);return function(c){if(!(c in a)){var d=document.createElement("style"),b="@media "+c+" { #jquery-mediatest { position:absolute; } }";d.type="text/css";d.styleSheet?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b));k.prepend(e).prepend(d);a[c]="absolute"===l.css("position");e.add(d).remove()}return a[c]}}()})(jQuery)});
define(["jquery","./jquery.mobile.media","./jquery.mobile.core"],function(){(function(a,p){function n(e){var a=e.charAt(0).toUpperCase()+e.substr(1),e=(e+" "+o.join(a+" ")+a).split(" "),b;for(b in e)if(q[e[b]]!==p)return!0}function m(a,d,b){for(var c=document.createElement("div"),b=b?[b]:o,h,i=0;i<b.length;i++){var j=b[i],r="-"+j.charAt(0).toLowerCase()+j.substr(1)+"-"+a+": "+d+";",j=j.charAt(0).toUpperCase()+j.substr(1)+(a.charAt(0).toUpperCase()+a.substr(1));c.setAttribute("style",r);c.style[j]&&
(h=!0)}return!!h}var k=a("<body>").prependTo("html"),q=k[0].style,o=["Webkit","Moz","O"],l="palmGetResource"in window,d=window.operamini&&"[object OperaMini]"==={}.toString.call(window.operamini),c=window.blackberry;a.extend(a.mobile,{browser:{}});a.mobile.browser.ie=function(){for(var a=3,d=document.createElement("div"),b=d.all||[];d.innerHTML="<\!--[if gt IE "+ ++a+"]><br><![endif]--\>",b[0];);return 4<a?a:!a}();a.extend(a.support,{orientation:"orientation"in window&&"onorientationchange"in window,
touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window||m("transition","height 100ms linear"),pushState:"pushState"in history&&"replaceState"in history,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!n("content"),touchOverflow:!!n("overflowScrolling"),cssTransform3d:m("perspective","10px","moz")||a.mobile.media("(-"+o.join("-transform-3d),(-")+"-transform-3d),(transform-3d)"),boxShadow:!!n("boxShadow")&&!c,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||
"scrollTop"in k[0])&&!l&&!d,dynamicBaseTag:function(){var e=location.protocol+"//"+location.host+location.pathname+"ui-dir/",d=a("head base"),b=null,c="",h;d.length?c=d.attr("href"):d=b=a("<base>",{href:e}).appendTo("head");h=a("<a href='testurl' />").prependTo(k)[0].href;d[0].href=c||location.pathname;b&&b.remove();return 0===h.indexOf(e)}()});k.remove();l=function(){var a=window.navigator.userAgent;return-1<a.indexOf("Nokia")&&(-1<a.indexOf("Symbian/3")||-1<a.indexOf("Series60/5"))&&-1<a.indexOf("AppleWebKit")&&
a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.gradeA=function(){return a.support.mediaquery||a.mobile.browser.ie&&7<=a.mobile.browser.ie};a.mobile.ajaxBlacklist=window.blackberry&&!window.WebKitPoint||d||l;l&&a(function(){a("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")});a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")})(jQuery)});
define(["jquery","./jquery.mobile.core","./jquery.mobile.support","./jquery.mobile.vmouse"],function(){(function(a,p,n){function m(d,c,e){var f=e.type;e.type=c;a.event.handle.call(d,e);e.type=f}a.each("touchstart,touchmove,touchend,orientationchange,throttledresize,tap,taphold,swipe,swipeleft,swiperight,scrollstart,scrollstop".split(","),function(d,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)};a.attrFn[c]=true});var k=a.support.touch,q=k?"touchstart":"mousedown",o=k?"touchend":"mouseup",
l=k?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function d(a,d){e=d;m(c,e?"scrollstart":"scrollstop",a)}var c=this,e,f;a(c).bind("touchmove scroll",function(b){a.event.special.scrollstart.enabled&&(e||d(b,!0),clearTimeout(f),f=setTimeout(function(){d(b,!1)},50))})}};a.event.special.tap={setup:function(){var d=this,c=a(d);c.bind("vmousedown",function(e){function f(){clearTimeout(i)}function b(){f();c.unbind("vclick",g).unbind("vmouseup",f);a(document).unbind("vmousecancel",
b)}function g(a){b();h==a.target&&m(d,"tap",a)}if(e.which&&1!==e.which)return!1;var h=e.target,i;c.bind("vmouseup",f).bind("vclick",g);a(document).bind("vmousecancel",b);i=setTimeout(function(){m(d,"taphold",a.Event("taphold",{target:h}))},750)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1E3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var d=a(this);d.bind(q,function(c){function e(d){if(b){var c=d.originalEvent.touches?d.originalEvent.touches[0]:
d;g={time:(new Date).getTime(),coords:[c.pageX,c.pageY]};Math.abs(b.coords[0]-g.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&d.preventDefault()}}var f=c.originalEvent.touches?c.originalEvent.touches[0]:c,b={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)},g;d.bind(l,e).one(o,function(){d.unbind(l,e);b&&g&&g.time-b.time<a.event.special.swipe.durationThreshold&&Math.abs(b.coords[0]-g.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(b.coords[1]-
g.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&b.origin.trigger("swipe").trigger(b.coords[0]>g.coords[0]?"swipeleft":"swiperight");b=g=n})})}};(function(a,c){function e(){var a=b();a!==g&&(g=a,f.trigger("orientationchange"))}var f=a(c),b,g,h,i,j={"0":!0,180:!0};if(a.support.orientation&&(h=c.innerWidth||a(c).width(),i=c.innerHeight||a(c).height(),h=h>i&&50<h-i,i=j[c.orientation],h&&i||!h&&!i))j={"-90":!0,90:!0};a.event.special.orientationchange={setup:function(){if(a.support.orientation&&
a.mobile.orientationChangeEnabled)return!1;g=b();f.bind("throttledresize",e)},teardown:function(){if(a.support.orientation&&a.mobile.orientationChangeEnabled)return!1;f.unbind("throttledresize",e)},add:function(a){var c=a.handler;a.handler=function(a){a.orientation=b();return c.apply(this,arguments)}}};a.event.special.orientationchange.orientation=b=function(){var b=!0,b=document.documentElement;return(b=a.support.orientation?j[c.orientation]:b&&1.1>b.clientWidth/b.clientHeight)?"portrait":"landscape"}})(jQuery,
p);(function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",d)},teardown:function(){a(this).unbind("resize",d)}};var d=function(){f=(new Date).getTime();b=f-c;250<=b?(c=f,a(this).trigger("throttledresize")):(e&&clearTimeout(e),e=setTimeout(d,250-b))},c=0,e,f,b})();a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(d,c){a.event.special[d]={setup:function(){a(this).bind(c,a.noop)}}})})(jQuery,this)});

(function(i){var n=function(){this.markers=[];this.mainMarker=!1;this.icon="http://www.google.com/mapfiles/marker.png"};n.prototype.dist=function(a){return Math.sqrt(Math.pow(this.markers[0].latitude-a.latitude,2)+Math.pow(this.markers[0].longitude-a.longitude,2))};n.prototype.setIcon=function(a){this.icon=a};n.prototype.addMarker=function(a){this.markers[this.markers.length]=a};n.prototype.getMarker=function(){if(this.mainmarker)return this.mainmarker;var a,b;1<this.markers.length?(a=new e.MarkerImage("http://thydzik.com/thydzikGoogleMap/markerlink.php?text="+ this.markers.length+"&color=EF9D3F"),b="cluster of "+this.markers.length+" markers"):(a=new e.MarkerImage(this.icon),b=this.markers[0].title);return this.mainmarker=new e.Marker({position:new e.LatLng(this.markers[0].latitude,this.markers[0].longitude),icon:a,title:b,map:null})};var e=google.maps,o=new e.Geocoder,k=0,p=0,f={},f={init:function(a){var b,c=i.extend({},i.fn.gMap.defaults,a);for(b in i.fn.gMap.defaults.icon)c.icon[b]||(c.icon[b]=i.fn.gMap.defaults.icon[b]);return this.each(function(){var a= i(this),b=f._getMapCenter.apply(a,[c]);"fit"==c.zoom&&(c.zoomFit=!0,c.zoom=f._autoZoom.apply(a,[c]));var g={zoom:c.zoom,center:b,mapTypeControl:c.mapTypeControl,mapTypeControlOptions:{},zoomControl:c.zoomControl,zoomControlOptions:{},panControl:c.panControl,panControlOptions:{},scaleControl:c.scaleControl,scaleControlOptions:{},streetViewControl:c.streetViewControl,streetViewControlOptions:{},mapTypeId:c.maptype,scrollwheel:c.scrollwheel,maxZoom:c.maxZoom,minZoom:c.minZoom};c.controlsPositions.mapType&& (g.mapTypeControlOptions.position=c.controlsPositions.mapType);c.controlsPositions.zoom&&(g.zoomControlOptions.position=c.controlsPositions.zoom);c.controlsPositions.pan&&(g.panControlOptions.position=c.controlsPositions.pan);c.controlsPositions.scale&&(g.scaleControlOptions.position=c.controlsPositions.scale);c.controlsPositions.streetView&&(g.streetViewControlOptions.position=c.controlsPositions.streetView);g.mapTypeControlOptions.style=c.controlsStyle.mapType;g.zoomControlOptions.style=c.controlsStyle.zoom; g=new e.Map(this,g);c.log&&console.log("map center is:");c.log&&console.log(b);a.data("$gmap",g);a.data("gmap",{opts:c,gmap:g,markers:[],markerKeys:{},infoWindow:null,clusters:[]});if(0!==c.controls.length)for(b=0;b<c.controls.length;b+=1)g.controls[c.controls[b].pos].push(c.controls[b].div);c.clustering.enabled?(b=a.data("gmap"),b.markers=c.markers,f._renderCluster.apply(a,[]),e.event.addListener(g,"bounds_changed",function(){f._renderCluster.apply(a,[])})):0!==c.markers.length&&f.addMarkers.apply(a, [c.markers]);f._onComplete.apply(a,[])})},_delayedMode:!1,_onComplete:function(){var a=this.data("gmap"),b=this;if(0!==k)window.setTimeout(function(){f._onComplete.apply(b,[])},100);else{if(f._delayedMode){var c=f._getMapCenter.apply(this,[a.opts,!0]);f._setMapCenter.apply(this,[c]);a.opts.zoomFit&&(c=f._autoZoom.apply(this,[a.opts,!0]),a.gmap.setZoom(c))}a.opts.onComplete()}},_setMapCenter:function(a){var b=this.data("gmap");b.opts.log&&console.log("delayed setMapCenter called");if(void 0!==b.gmap&& 0==k)b.gmap.setCenter(a);else{var c=this;window.setTimeout(function(){f._setMapCenter.apply(c,[a])},100)}},_boundaries:null,_getBoundaries:function(a){var a=a.markers,b,c=1E3,h=-1E3,d=1E3,g=-1E3;if(a){for(b=0;b<a.length;b+=1)a[b].latitude&&a[b].longitude&&(c>a[b].latitude&&(c=a[b].latitude),h<a[b].longitude&&(h=a[b].longitude),d>a[b].longitude&&(d=a[b].longitude),g<a[b].latitude&&(g=a[b].latitude),console.log(a[b].latitude,a[b].longitude,c,h,d,g));f._boundaries={N:c,E:h,W:d,S:g}}-1E3==c&&(f._boundaries= {N:0,E:0,W:0,S:0});return f._boundaries},_getBoundariesFromMarkers:function(){var a=this.data("gmap").markers,b,c=1E3,h=-1E3,d=1E3,g=-1E3;if(a){for(b=0;b<a.length;b+=1)c>a[b].getPosition().lat()&&(c=a[b].getPosition().lat()),h<a[b].getPosition().lng()&&(h=a[b].getPosition().lng()),d>a[b].getPosition().lng()&&(d=a[b].getPosition().lng()),g<a[b].getPosition().lat()&&(g=a[b].getPosition().lat());f._boundaries={N:c,E:h,W:d,S:g}}-1E3==c&&(f._boundaries={N:0,E:0,W:0,S:0});return f._boundaries},_getMapCenter:function(a, b){var c,h=this,d,g;if(a.markers.length&&("fit"==a.latitude||"fit"==a.longitude))return d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(a),c=new e.LatLng((d.N+d.S)/2,(d.E+d.W)/2),console.log(b,d,c),c;if(a.latitude&&a.longitude)return c=new e.LatLng(a.latitude,a.longitude);c=new e.LatLng(0,0);if(a.address)return o.geocode({address:a.address},function(b,c){c===google.maps.GeocoderStatus.OK?f._setMapCenter.apply(h,[b[0].geometry.location]):a.log&&console.log("Geocode was not successful for the following reason: "+ c)}),c;if(0<a.markers.length){g=null;for(d=0;d<a.markers.length;d+=1)if(a.markers[d].setCenter){g=a.markers[d];break}if(null===g)for(d=0;d<a.markers.length;d+=1){if(a.markers[d].latitude&&a.markers[d].longitude){g=a.markers[d];break}a.markers[d].address&&(g=a.markers[d])}if(null===g)return c;if(g.latitude&&g.longitude)return new e.LatLng(g.latitude,g.longitude);g.address&&o.geocode({address:g.address},function(b,c){c===google.maps.GeocoderStatus.OK?f._setMapCenter.apply(h,[b[0].geometry.location]): a.log&&console.log("Geocode was not successful for the following reason: "+c)})}return c},_renderCluster:function(){var a=this.data("gmap"),b=a.markers,c=a.clusters,h=a.opts,d;for(d=0;d<c.length;d+=1)c[d].getMarker().setMap(null);c.length=0;if(d=a.gmap.getBounds()){var g=d.getNorthEast(),e=d.getSouthWest(),j=[],l=(g.lat()-e.lat())*h.clustering.clusterSize/100;for(d=0;d<b.length;d+=1)b[d].latitude<g.lat()&&b[d].latitude>e.lat()&&b[d].longitude<g.lng()&&b[d].longitude>e.lng()&&(j[j.length]=b[d]);h.log&& console.log("number of markers "+j.length+"/"+b.length);h.log&&console.log("cluster radius: "+l);for(d=0;d<j.length;d+=1){g=-1;for(b=0;b<c.length&&!(e=c[b].dist(j[d]),e<l&&(g=b,h.clustering.fastClustering));b+=1);-1===g?(b=new n,b.addMarker(j[d]),c[c.length]=b):c[g].addMarker(j[d])}h.log&&console.log("Total clusters in viewport: "+c.length);for(b=0;b<c.length;b+=1)c[b].getMarker().setMap(a.gmap)}else{var i=this;window.setTimeout(function(){f._renderCluster.apply(i)},1E3)}},_processMarker:function(a, b,c,h){var d=this.data("gmap"),g=d.gmap,f=d.opts,j;void 0===h&&(h=new e.LatLng(a.latitude,a.longitude));if(!b)var i={image:f.icon.image,iconSize:new e.Size(f.icon.iconsize[0],f.icon.iconsize[1]),iconAnchor:new e.Point(f.icon.iconanchor[0],f.icon.iconanchor[1]),infoWindowAnchor:new e.Size(f.icon.infowindowanchor[0],f.icon.infowindowanchor[1])},b=new e.MarkerImage(i.image,i.iconSize,null,i.iconAnchor);c||(new e.Size(f.icon.shadowsize[0],f.icon.shadowsize[1]),i&&i.iconAnchor||new e.Point(f.icon.iconanchor[0], f.icon.iconanchor[1]));b={position:h,icon:b,title:a.title,map:null,draggable:!0===a.draggable?!0:!1};f.clustering.enabled||(b.map=g);j=new e.Marker(b);j.setShadow(c);d.markers.push(j);a.key&&(d.markerKeys[a.key]=j);var m;a.html&&(c={content:"string"===typeof a.html?f.html_prepend+a.html+f.html_append:a.html,pixelOffset:a.infoWindowAnchor},f.log&&console.log("setup popup with data"),f.log&&console.log(c),m=new e.InfoWindow(c),e.event.addListener(j,"click",function(){f.log&&console.log("opening popup "+ a.html);f.singleInfoWindow&&d.infoWindow&&d.infoWindow.close();m.open(g,j);d.infoWindow=m}));a.html&&a.popup&&(f.log&&console.log("opening popup "+a.html),m.open(g,j),d.infoWindow=m);a.onDragEnd&&e.event.addListener(j,"dragend",function(b){f.log&&console.log("drag end");a.onDragEnd(b)})},_geocodeMarker:function(a,b,c){var h=this;o.geocode({address:a.address},function(d,g){g===e.GeocoderStatus.OK?(k-=1,h.data("gmap").opts.log&&console.log("Geocode was successful with point: ",d[0].geometry.location), f._processMarker.apply(h,[a,b,c,d[0].geometry.location])):(g===e.GeocoderStatus.OVER_QUERY_LIMIT&&(!h.data("gmap").opts.noAlerts&&0===p&&alert("Error: too many geocoded addresses! Switching to 1 marker/s mode."),p+=1E3,window.setTimeout(function(){f._geocodeMarker.apply(h,[a,b,c])},p)),h.data("gmap").opts.log&&console.log("Geocode was not successful for the following reason: "+g))})},_autoZoom:function(a,b){var c=i(this).data("gmap"),e=i.extend({},c?c.opts:{},a),d,g,c=39135.758482;e.log&&console.log("autozooming map"); d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(e);e=111E3*(d.E-d.W)/this.width();g=111E3*(d.S-d.N)/this.height();for(d=2;20>d&&!(e>c||g>c);d+=1)c/=2;return d-2},addMarkers:function(a){var b=this.data("gmap").opts;if(0!==a.length){b.log&&console.log("adding "+a.length+" markers");for(b=0;b<a.length;b+=1)f.addMarker.apply(this,[a[b]])}},addMarker:function(a){var b=this.data("gmap").opts;b.log&&console.log("putting marker at "+a.latitude+", "+a.longitude+" with address "+a.address+" and html "+ a.html);var c=b.icon.image,h=new e.Size(b.icon.iconsize[0],b.icon.iconsize[1]),d=new e.Point(b.icon.iconanchor[0],b.icon.iconanchor[1]),g=new e.Size(b.icon.infowindowanchor[0],b.icon.infowindowanchor[1]),i=b.icon.shadow,j=new e.Size(b.icon.shadowsize[0],b.icon.shadowsize[1]),l=new e.Point(b.icon.shadowanchor[0],b.icon.shadowanchor[1]);a.infoWindowAnchor=g;a.icon&&(a.icon.image&&(c=a.icon.image),a.icon.iconsize&&(h=new e.Size(a.icon.iconsize[0],a.icon.iconsize[1])),a.icon.iconanchor&&(d=new e.Point(a.icon.iconanchor[0], a.icon.iconanchor[1])),a.icon.infowindowanchor&&new e.Size(a.icon.infowindowanchor[0],a.icon.infowindowanchor[1]),a.icon.shadow&&(i=a.icon.shadow),a.icon.shadowsize&&(j=new e.Size(a.icon.shadowsize[0],a.icon.shadowsize[1])),a.icon.shadowanchor&&(l=new e.Point(a.icon.shadowanchor[0],a.icon.shadowanchor[1])));c=new e.MarkerImage(c,h,null,d);i=new e.MarkerImage(i,j,null,l);a.address?("_address"===a.html&&(a.html=a.address),"_address"==a.title&&(a.title=a.address),b.log&&console.log("geocoding marker: "+ a.address),k+=1,f._delayedMode=!0,f._geocodeMarker.apply(this,[a,c,i])):("_latlng"===a.html&&(a.html=a.latitude+", "+a.longitude),"_latlng"==a.title&&(a.title=a.latitude+", "+a.longitude),b=new e.LatLng(a.latitude,a.longitude),f._processMarker.apply(this,[a,c,i,b]))},removeAllMarkers:function(){var a=this.data("gmap").markers,b;for(b=0;b<a.length;b+=1)a[b].setMap(null),delete a[b];a.length=0},getMarker:function(a){return this.data("gmap").markerKeys[a]},fixAfterResize:function(a){var b=this.data("gmap"); e.event.trigger(b.gmap,"resize");a&&b.gmap.panTo(new google.maps.LatLng(0,0));b.gmap.panTo(this.gMap("_getMapCenter",b.opts))},setZoom:function(a,b,c){var e=this.data("gmap").gmap;"fit"===a&&(a=f._autoZoom.apply(this,[b,c]));e.setZoom(parseInt(a))},changeSettings:function(a){var b=this.data("gmap"),c=[],e;for(e=0;e<b.markers.length;e+=1)c[e]={latitude:b.markers[e].getPosition().lat(),longitude:b.markers[e].getPosition().lng()};a.markers=c;a.zoom&&f.setZoom.apply(this,[a.zoom,a]);(a.latitude||a.longitude)&& b.gmap.panTo(f._getMapCenter.apply(this,[a]))},mapclick:function(a){google.maps.event.addListener(this.data("gmap").gmap,"click",function(b){a(b.latLng)})},geocode:function(a,b,c){o.geocode({address:a},function(a,d){d===e.GeocoderStatus.OK?b(a[0].geometry.location):c&&c(a,d)})},getRoute:function(a){var b=this.data("gmap"),c=b.gmap,f=new e.DirectionsRenderer,d=new e.DirectionsService,g={BYCAR:e.DirectionsTravelMode.DRIVING,BYBICYCLE:e.DirectionsTravelMode.BICYCLING,BYFOOT:e.DirectionsTravelMode.WALKING}, k={MILES:e.DirectionsUnitSystem.IMPERIAL,KM:e.DirectionsUnitSystem.METRIC},j=null,l=null,m=null;void 0!==a.routeDisplay?j=a.routeDisplay instanceof jQuery?a.routeDisplay[0]:"string"==typeof a.routeDisplay?i(a.routeDisplay)[0]:null:null!==b.opts.routeFinder.routeDisplay&&(j=b.opts.routeFinder.routeDisplay instanceof jQuery?b.opts.routeFinder.routeDisplay[0]:"string"==typeof b.opts.routeFinder.routeDisplay?i(b.opts.routeFinder.routeDisplay)[0]:null);f.setMap(c);null!==j&&f.setPanel(j);l=void 0!==g[b.opts.routeFinder.travelMode]? g[b.opts.routeFinder.travelMode]:g.BYCAR;m=void 0!==k[b.opts.routeFinder.travelUnit]?k[b.opts.routeFinder.travelUnit]:k.KM;d.route({origin:a.from,destination:a.to,travelMode:l,unitSystem:m},function(a,c){c==e.DirectionsStatus.OK?f.setDirections(a):null!==j&&i(j).html(b.opts.routeFinder.routeErrors[c])});return this}};i.fn.gMap=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return f.init.apply(this,arguments);i.error("Method "+a+" does not exist on jQuery.gmap")}; i.fn.gMap.defaults={log:!1,address:"",latitude:null,longitude:null,zoom:3,maxZoom:null,minZoom:null,markers:[],controls:{},scrollwheel:!0,maptype:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,zoomControl:!0,panControl:!1,scaleControl:!1,streetViewControl:!0,controlsPositions:{mapType:null,zoom:null,pan:null,scale:null,streetView:null},controlsStyle:{mapType:google.maps.MapTypeControlStyle.DEFAULT,zoom:google.maps.ZoomControlStyle.DEFAULT},singleInfoWindow:!0,html_prepend:'<div class="gmap_marker">', html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",iconsize:[20,34],iconanchor:[9,34],infowindowanchor:[9,2],shadow:"http://www.google.com/mapfiles/shadow50.png",shadowsize:[37,34],shadowanchor:[9,34]},onComplete:function(){},routeFinder:{travelMode:"BYCAR",travelUnit:"KM",routeDisplay:null,routeErrors:{INVALID_REQUEST:"The provided request is invalid.",NOT_FOUND:"One or more of the given addresses could not be found.",OVER_QUERY_LIMIT:"A temporary error occured. Please try again in a few minutes.", REQUEST_DENIED:"An error occured. Please contact us.",UNKNOWN_ERROR:"An unknown error occured. Please try again.",ZERO_RESULTS:"No route could be found within the given addresses."}},clustering:{enabled:!1,fastClustering:!1,clusterCount:10,clusterSize:40}}})(jQuery);
jQuery.noConflict();
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});


Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && jQuery.browser.msie && (parseFloat(jQuery('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat(jQuery('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};
jQuery.fn.equalHeights = function(px) {
	if(jQuery(window).width()<767) return;
	jQuery(this).each(function(){
		var currentTallest = 0;
		jQuery(this).children().each(function(i){
			if (jQuery(this).height() > currentTallest) { currentTallest = jQuery(this).height(); }
		});
		if (!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if (jQuery.browser.msie && jQuery.browser.version == 6.0) { jQuery(this).children().css({'height': currentTallest}); }
		jQuery(this).children().not('.title,a').css({'min-height': currentTallest}); 
	});
	return this;
};
	
	
jQuery(function(jQuery){
	
jQuery.fn.qSlider = function(options){
	
/* ================================================================================================ */
/* == Slider Options ============================================================================== */
/* ================================================================================================ */	
	
	var defaults = {
		              time:4000,
					  autoplay:true,
					  listControls:true,
					  arrowControls:false
					 };
	
	
	var options = jQuery.extend(defaults, options);
	
/* ================================================================================================ */
/* == Variables & Precaching ====================================================================== */
/* ================================================================================================ */	
	
	return this.each(function()
		{	
		var root = jQuery(this);
		//root.wrap('<div class="qSlider" />');	
		var parent = root.parent(), slider, timer,image_timer,wait,index,src,parent,im,override=false,in_animation = false,controls,root_parent,trace_len;
		 
		  root.find('.desc').each(function(){
				  
				   if(jQuery(this).find('h2').length>0) {
				  jQuery(this).find('h2').data('top', jQuery(this).find('h2').position().top);
				  jQuery(this).find('h2').data('left', jQuery(this).find('h2').position().left);
				  }
				  
				  if(jQuery(this).find('div.inner-slider-content').length>0) {
				  jQuery(this).find('div.inner-slider-content').data('top', jQuery(this).find('div.inner-slider-content').position().top);
				  jQuery(this).find('div.inner-slider-content').data('left', jQuery(this).find('div.inner-slider-content').position().left);
				  }
				 
				 });
		 slider = {
			 slides : root.find("li").hide(),
			 current : null,
			 prev : null ,
			 width: root.data('width'),
			 height: root.data('height'),
			 time :root.data('time'),
			 responsive :root.data('responsive'), 
			 thumbs :root.data('thumbs'), 
			 preloading :root.data('preloading'), 
			 autoplay :root.data('autoplay'),
			 arrow_controls :root.data('arrows'), 
			 bullets_controls :root.data('bullets'), 
			 random_slides:root.data('random'), 
			 init : function() { if(slider.autoplay) image_timer = setInterval(function(){ slider.switcher(); },slider.time);	 },
			 show : function(){ slider.slides.find('div.desc').css({ opacity:0 , visibility:'hidden' }); root.find("li").first().show();  root.css({ 'opacity':0 , 'visibility' : 'visible' }).animate({'opacity':1},'normal',function(){ parent.css('background','#ffffff'); root.find("li").first().find('div.desc').css("visibility",'visible').animate({opacity:1},'slow');   });  },
			 hide : function(){ root.animate({'opacity':0},'normal',function(){  jQuery(this).css('visibility' , 'hidden' ) }); }  ,
			 switcher : function(){ 
			 						
									if(slider.current.prev().length==0) slider.prev = slider.slides.last(); else slider.prev = slider.current.prev();
									
									slider.prev.removeClass('reset');
			 						slider.current.removeClass('active').addClass('reset'); 
									
									slider.current.fadeOut('normal');
									
									if(slider.current.next().length==0) slider.current = slider.slides.first(); else slider.current = slider.current.next();
									
									slider.current.addClass('active').hide();
									
									slider.animate();
									
									if(slider.bullets_controls) {
								    controls.removeClass('control_active'); controls.eq( slider.slides.index(slider.current) ).addClass('control_active');
									}
								  },
			 appendControls : function()
								 {
								var str = '';
									 
									if(slider.thumbs){
										 
										str = "<ul class='thumbs-controls controls'>"; 
										for(var i=0;i<slider.slides.length;i++)
										str = str + "<li><img src='"+slider.slides.eq(i).find('img').attr('src')+"' alt='thumb' /></li>";
										str = str+"</ul>";
									}
									else
									{
										var str = "<ul class='controls'>"; 
										for(var i=0;i<slider.slides.length;i++)
										str = str + "<li>"+(i+1)+"</li>";
										str = str+"</ul>";
									}
									
									
									root.after(str);
									 
									controls = parent.find(".controls li");
									controls.first().addClass("control_active");
									
									controls.bind({
									click:function(){ slider.setImage(  parent.find('.controls li').index(jQuery(this) )  ); },
									mouseover:function(){ jQuery(this).toggleClass("control_hover"); },
									mouseout:function(){ jQuery(this).toggleClass("control_hover"); }
									  });
									// parent.find(".controls").css({ "left" : slider.width - ( slider.width/2 + parent.find(".controls").width()/2 ) -10  });
									
								 }	,
			  appendArrows : function appendarrowControls()
								{
									var prev = jQuery("<a href='#'>").addClass('q-prev');
									parent.append(prev);
									var next = jQuery("<a href='#'>").addClass('q-next');
									parent.append(next);
									
									
									parent.find(".q-next").bind("click",function(e){
										 var index = slider.slides.index(slider.current);
										 index = index + 1;
										 
										 if(index>slider.slides.length-1)  index = 0;
										
										 slider.setImage(index);  
										 e.preventDefault();
										 
										});
									
									parent.find(".q-prev").bind("click",function(e){
										 var index = slider.slides.index(slider.current);
										 index = index - 1;

										 
										 if(index==-1)  index = slider.slides.length -1;
										
										 slider.setImage(index);  
										 e.preventDefault();
										 
										});	
									
								} 	,
				setImage :   function(index)
								{  
								    if(index == slider.slides.index(slider.current) ) return;
									
									if(slider.bullets_controls) {
									controls.removeClass('control_active'); controls.eq(index).addClass('control_active');
									}
									
									slider.slides.removeClass("reset active");
									
									clearTimeout(image_timer); // Manual Override...
									
									slider.current.addClass("reset");
									slider.current.fadeOut('normal');
									slider.prev = slider.current;
									
									slider.current = slider.slides.eq(index).addClass("active");
									
									slider.animate();
									
								
								},
				animate : function()
							{
								root.find('div.desc').css({ opacity:0 , visibility:'hidden' });
								slider.current.fadeIn('slow',function(){ slider.parallex(slider.current.find('div.desc')) });
									
								
							},
				parallex : function(obj)
				{
				
				//obj.css('visibility','visible').animate({opacity:1},'normal'); return;
				
					var o =  Math.floor(Math.random()*6);
					var title = obj.find('h2');
					var desc = obj.find('div.inner-slider-content');
				    
					var tx = title.data('left');
					var ty = title.data('top');
					
					var dx = desc.data('left');
					var dy = desc.data('top');
				   
				   if(title.css('position')=="relative") { tx = 0; ty =0; }
				    if(desc.css('position')=="relative") { dx = 0; dy =0; }
				  title.removeAttr('style');
				  desc.removeAttr('style');
				 
				   switch(o)
				   {
					   
					   case 0 :	
								obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({ "left":-jQuery(window).width(),"top":ty });
								desc.css({ "left":-jQuery(window).width(),"top":dy });
								
								title.delay(100).animate({left:tx},{duration:800, easing:'easeOutBack' });
								desc.delay(300).animate({left:dx},{duration:800, easing:'easeOutBack' });
								
								break;
					 case 1 :	 
					            obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({ "left":jQuery(window).width(),"top":ty });
								desc.css({ "left":jQuery(window).width(),"top":dy });
								
								title.delay(100).animate({left:tx},{duration:800, easing:'easeOutBack' });
								desc.delay(300).animate({left:dx},{duration:800, easing:'easeOutBack' });
								break;
								
					  case 2 :	 obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({"top":-slider.height,"left":tx });
								desc.css({"top":-slider.height,"left":dx });
								
								title.delay(100).animate({top:ty},{duration:800, easing:'easeOutBack' });
								desc.delay(300).animate({top:dy},{duration:800, easing:'easeOutBack' });
								break;
								
					 case 3 :	 obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({ "opacity":0 , "top":ty , "left" : tx });
								desc.css({"top":-slider.height,"left":dx });
								
								if(desc.length>0)
								desc.delay(300).animate({top:dy},{duration:1200, easing:'easeOutElastic' , complete : function(){
									
									title.delay(100).animate({opacity:1},{duration:800, easing:'easeOutSine' });
									
									} });
								else
								title.delay(100).animate({opacity:1},{duration:800, easing:'easeOutSine' });	
								break;		
					 case 4 :	obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({"top":slider.height,"left":tx });
								desc.css({"top":slider.height,"left":dx });
								
								title.delay(100).animate({top:ty},{duration:1100, easing:'easeOutElastic' });
								desc.delay(100).animate({top:dy},{duration:1100, easing:'easeOutElastic' });
								break; 
					 case 5 :	 obj.css('visibility','visible').animate({opacity:1},'normal');
								
								title.css({ "left":jQuery(window).width(),"top":ty });
								desc.css({ "left":jQuery(window).width(),"top":dy });
								
								title.delay(100).animate({left:tx},{duration:500, easing:'easeOutSine' });
								desc.delay(300).animate({left:dx},{duration:500, easing:'easeOutSine' });
								break;		
					   }
					   
					  
					   
				},			
				resize : function(h,w, maxh, maxw) {
						  var ratio = maxh/maxw;
						  if (h/w > ratio){
							 // height is the problem
							if (h > maxh){
							  w = Math.round(w*(maxh/h));
							  h = maxh;
							}
						  } else if (h/w < ratio) {
							// width is the problem
							if (w > maxh){
							  h = Math.round(h*(maxw/w));
							  w = maxw;
							}
						  } 
					
						  return [h,w];
						}	,
				
				scale : function(h,w, maxh, maxw) {
						  var ratio = maxh/maxw;
						  if (h/w < ratio) {
							// width is the problem
							if (w >= maxh){
							  h = Math.round(maxh*(w/maxw));
							  w = w;
							}
						 
						  
						  } 
						 
						  return [h,w];
						},		
							
				touchevents : function(){
					
					slider.slides.live("swipeleft",function(e){
										 var index = slider.slides.index(slider.current);
										 index = index + 1;
									
										 if(index>slider.slides.length-1)  index = 0;
										
										 slider.setImage(index);  
										 e.preventDefault();
										 
										});
									
									slider.slides.live("swiperight",function(e){
										 var index = slider.slides.index(slider.current);
										 index = index - 1;

										 
										 if(index==-1)  index = slider.slides.length -1;
										
										 slider.setImage(index);  
										 e.preventDefault();
										 
										});	
					
					} ,		
				responsive : function(){
					  var testable = parent.parent().width();
					
					  if(testable<slider.width  ) {	 
						
						if(trace_len>=jQuery(window).width())
						{
							temp = slider.resize(slider.height,slider.width,slider.height,parent.parent().width());
							if(temp[1]>testable)
							{
								 temp[1] = testable ;
								// temp[0] = slider.height * ( parent.parent().width() / temp[1] ) ;
							}
						}
						else
						temp = slider.scale(parent.height(),testable,slider.height,slider.width);
						
						
						
						// parent.find(".controls").css({ "left" : temp[1] - ( temp[1]/2 + parent.find(".controls").width()/2 ) -10  });
			
						  root.css({
							  "width" : temp[1],
							  "height": temp[0]
							  
							  });
						  parent.css({
							  "width" : temp[1],
							  "height": temp[0]
							  
							  });	
					   }
					 
					   else
					   {
						   root.css({ width:slider.width , height:slider.height }); 
						   parent.css({ width:slider.width , height:slider.height }); 
						   
						  // parent.find(".controls").css({ "left" : slider.width - ( slider.width/2 + parent.find(".controls").width()/2 ) -10  });
					   }
					   
					   trace_len = jQuery(window).width();
					
					}		
										
			}
		slider.current = slider.slides.first().toggleClass('active');
		slider.prev = slider.slides.last().toggleClass('reset');
		parent.css('overflow','visible');
		root.css({ width:slider.width , height:slider.height });  parent.css({ width:slider.width , height:slider.height });
		
		if(slider.preloading){
			jQuery(window).load(function(){   slider.show();
		   
		   if(slider.slides.length>1)
		   slider.init(); 
		   })
		}
		else  {
		   slider.show();
		    if(slider.slides.length>1)
		   slider.init();
		}
	
	if(slider.slides.length>1) {	
		if(slider.bullets_controls) slider.appendControls();
		if(slider.arrow_controls) slider.appendArrows();
 	   
		
	
		 slider.touchevents();
		root.find("li").bind('click',function() { clearTimeout(image_timer); });
	}
		if(slider.responsive)
		{
			trace_len = jQuery(window).width();
			 parent.addClass('isResponsive');
			 
			 jQuery(window).resize(function(){
			
			   	 
				  slider.responsive();
				 
				  });
			 slider.responsive();
		}	
		
		 
		 	
		});
	
	};
});


Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && jQuery.browser.msie && (parseFloat(jQuery('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat(jQuery('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};
jQuery.fn.equalHeights = function(px) {
	if(jQuery(window).width()<767) return;
	jQuery(this).each(function(){
		var currentTallest = 0;
		jQuery(this).children().each(function(i){
			if (jQuery(this).height() > currentTallest) { currentTallest = jQuery(this).height(); }
		});
		if (!px || !Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if (jQuery.browser.msie && jQuery.browser.version == 6.0) { jQuery(this).children().css({'height': currentTallest}); }
		jQuery(this).children().not('.title').css({'min-height': currentTallest}); 
	});
	return this;
};
	


jQuery(document).ready(function(){

if( jQuery('body.login').length >0  ) { jQuery('#base-css,#theme-css-css,#color-style-css').remove();  }



if( jQuery.browser.msie && jQuery.browser.version<=7)
jQuery('div.imageholder-wrapper div.hover').hide();

jQuery('body').testable();
jQuery(window).resize(function(){ jQuery('body').testable(); });

jQuery('#searchform').addClass('form-search');
jQuery('#s').attr('placeholder','Type keyword and press enter');

jQuery('#calendar_wrap').addClass('table table-striped');

jQuery('.tagcloud a').addClass('label');
jQuery('.tagcloud a').hover(function(){ jQuery(this).addClass('label-inverse') },function(){ jQuery(this).removeClass('label-inverse') });

jQuery('#footer img[alt=RSS]').parent().remove();


});	


/* ================================================================================== */
/* == Main Code ===================================================================== */
/* ================================================================================== */


jQuery(function($){


/* ---------------------------------------------------------------------------------- */
/* -- Variables intialization ------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
	
var obj,temp,i,j,k,parent,sidebar  =  jQuery(".sidebar") , content = jQuery("#main-content"), menu = jQuery("#menu-bar .menu"),str='';

// ========== ISOTOPE ================================================================

var container = null;


var layout = 'fitRows';


jQuery(window).load(function(){
	
if( jQuery('#main-content').hasClass('full-width') )	
jQuery('.content').equalHeights();

});	
var google = jQuery('#google-map') ;
jQuery('#google-map').gMap({ address: google.data('address'), zoom:google.data('zoom') , markers: [
        
        {
            address: google.data('address'),
            html: '_address'
        } ] }); 	
	

jQuery('.custom-side-menu .sub-menu').hide();


jQuery('.custom-side-menu .menu li').hover(
		function(){ jQuery(this).children('i').addClass('icon-minus').removeClass('icon-plus'); jQuery(this).find('ul.sub-menu').stop(true,true).slideDown('normal'); },


		function(){ jQuery(this).children('i').addClass('icon-plus').removeClass('icon-minus ');  jQuery(this).find('ul.sub-menu').stop(true,true).slideUp('normal'); });


jQuery('.custom-side-menu .menu .sub-menu').each(function(){ if(jQuery(this).find('li.current-menu-item').length>0){  jQuery(this).show(); jQuery(this).parent().find('i').toggleClass('icon-plus icon-minus'); } });

jQuery('.portfolio-template .posts div.portfolio-item').hover(function(){
   
   jQuery(this).find('div.description').stop(true,true).fadeIn('normal');
   
  },function(){
   
   jQuery(this).find('div.description').stop(true,true).fadeOut('normal');
    
  });	


jQuery('.latest-home-posts  .image').hover(function(){
   
   jQuery(this).find('div.hover').stop(true,true).fadeIn('normal');
   
  },function(){
   
   jQuery(this).find('div.hover').stop(true,true).fadeOut('normal');
    
  });	
  
 
  jQuery('.accordion-heading').click( function (e) { 
  jQuery(this).parents('div.shortcodes-accordion').find('.accordion-heading').removeClass('active');
  
  if(!jQuery(this).next().hasClass('in'))
  jQuery(this).addClass('active');
  
  e.preventDefault();
  // do something…
})
// ==========  SLIDER ================================================================

if(jQuery('.fadeSlider').length>0)  jQuery('.fadeSlider').qSlider();
if(jQuery('.jquerySlider').length>0)  jQuery('.jquerySlider').soleaSlider();


// == Menu Code ==========================================================================

menu.children("li").children('a').css('opacity',0.5);
menu.find("li").hover(function(){
   jQuery(this).children('.sub-menu').show();
  
  
   
   jQuery(this).children('.sub-menu').css({ 'opacity' : 0 , 'visibility': 'visible'  }).animate({opacity:1},'normal');
   
  },function(){
  jQuery(this).children('.sub-menu').stop(true,true).css('visibility','hidden').hide(); 
  
  });	



jQuery("ul.top-social-icons li a,ul.social-icons li a").hover(function(){ 
   jQuery(this).children('span.def').stop(true,true).animate({opacity:0},'normal');
   jQuery(this).children('span.hov').stop(true,true).animate({opacity:1},'normal');
  },function(){
   jQuery(this).children('span.def').stop(true,true).animate({opacity:1},'normal');
   jQuery(this).children('span.hov').stop(true,true).animate({opacity:0},'normal');
  });	

var testSubtitle = false;
  
menu.children("li").each(function(){
		temp = jQuery(this);
		
		
		if(temp.children('ul.sub-menu"').length>0)
		{
			temp.addClass("showdropdown");
			temp.find('.sub-menu').append('<span class="mg-menu-tip" style="width:'+(40+temp.width())+'px;"></span>');
		}
		else
		{
			temp.addClass("showdropdown");
			temp.find('.sub-menu').append('<span class="mg-menu-tip" style="width:'+(40+temp.width())+'px;left:'+temp.position().left+'px"></span>');
		}
		
		temp.find("a").each(function(){ if(jQuery(this).attr('href')!="#") str = str + '<option value="'+jQuery(this).attr('href')+'">'+jQuery(this).html()+'</option>'; });	
		
		});



menu.find('li').each(function(){
	temp = jQuery(this);
	
	if(temp.children().hasClass('sub-menu'))
		{
			temp.children('a').append('<span class="hasDropdown"></span>');
		}
	
	

});
		
menu.children("li").find('ul.sub-menu').each(function(){  jQuery(this).find('li:last').css('borderBottom','none');  });	
jQuery('#mobile-menu').html(str);

jQuery('#mobile-menu').change(function(){
	if(jQuery(this).val()!="none")
	{
		location.href = jQuery(this).val();
	}
	});

// == Lightbox related code ===================================================================

jQuery(".lightbox").prettyPhoto();


// == Home page scrollable thumb =======================
var feature_thumb;

var factor = [];

  
  var index,capi = [];
  
  jQuery('.isScrollable .scrollable').each(function(i){ capi[i] = jQuery(this).scrollable({api:true }); factor[i] = 70; });
 
 jQuery('.isScrollable  .scrollable-next').live('click',function(e){
	 e.preventDefault();
	 
	 index = jQuery('.isScrollable').index( jQuery(this).parents('.isScrollable') ); 
	 capi[index].next(); 
	 });
 jQuery('.isScrollable  .scrollable-prev').live('click',function(e){
	 e.preventDefault();
	 index = jQuery('.isScrollable').index( jQuery(this).parents('.isScrollable') ); 
	 capi[index].prev(); 
	 });


jQuery('.isScrollable .scrollable .view').hover(function(){  jQuery(this).find('canvas,.mask').fadeIn('normal');  },function(){  jQuery(this).find('canvas,.mask').fadeOut('normal');  });  
  
  
  jQuery('a[rel=tooltip]').tooltip();
   jQuery('a[rel=popover]').popover();

var page_starter = jQuery("#page-starter"), ep = 1, top = jQuery('.top-area'); 


jQuery(window).scroll(function(){
	

	console.log( 1 - ep/100 );
	ep = top.position().top;
	 	if(jQuery(window).width()>750)  page_starter.css("opacity", ( 1.02 - ep/500 ) );
	
	if(ep<=1)
	{
		top.css({'box-shadow':'none',borderBottom:'1px solid #fff'});
	}
	else
	{
		top.css({'box-shadow':'0px 1px 5px rgba(0, 0, 0, 0.3)','border-bottom':'none'});
	}
	
	
	});
 

 
 
 if(jQuery('.portfolio-scrollable').length>0) {
 
 var p2 =  jQuery('.portfolio-scrollable').scrollable({api:true });
 
 var size = 2;

 
 jQuery('.portfolio-scrollable-next').live('click',function(e){
	 e.preventDefault();
	 p2.next(); 
	 });
 jQuery('.portfolio-scrollable-prev').live('click',function(e){
	 e.preventDefault();
	 p2.prev(); 
	 });

 var w = (jQuery(window).width()), ls = jQuery('.portfolio-block').last(); 

  p2.onBeforeSeek(function(event, index) {
	// console.log(ls.offset().left) 
    if ( w >= ( ls.offset().left + ls.width() ) ) {
		 if (index > this.getIndex())
        return false;
    }
  });


 }
 
function create_effect(parent)
	{
		if( ( jQuery.browser.msie && jQuery.browser.version < 9 ) || jQuery('.portfolio-one-column').length>0 )
		return;
		
		counter = 0;
		parent.find("img").each(function(){
			 temp = jQuery(this);
			 temp_parent = temp.parent();
			
			 generateEffect(temp,counter,temp.height(),temp.width());
			 counter++;
			 
			 
			});
			
			
	}
	
 jQuery(window).load(function(){
	 
	
	if(jQuery('.filterable').length>0)
	create_effect(jQuery(".filterable"));
	
	if(jQuery('.view').length>0)
	create_effect(jQuery("div.latest-info-wrapper"));
	
	
	

	});	
	
var taxonomy_parent= jQuery('.portfolio-taxonomy li:first') ,portfolio = jQuery('div.portfolio-item');
jQuery(".portfolio-taxonomy li a").click(function(e){
		
		taxonomy_parent.removeClass("active");
		taxonomy_parent = jQuery(this).parent();
		taxonomy_parent.addClass("active");
		
		var query = jQuery(this).html();
		var flag= false;
		
		if(jQuery.trim(query)=="All")
		{
			
			portfolio.find('canvas').fadeOut('normal');	
			e.preventDefault();
			return;
		}
	//	portfolio.hide();
		portfolio.each(function(){
			flag= false;
			
			
				if(jQuery(this).hasClass(query))
				{
					flag = true; 
				}
			
				
			if(flag==false)
			{
				if( ( jQuery.browser.msie && jQuery.browser.version < 9 ) || jQuery('.portfolio-one-column').length>0 )
				jQuery(this).find('img').fadeTo('normal',0.3);
				else
				jQuery(this).find('canvas').fadeIn('normal');
			}
			else
			{
				if( ( jQuery.browser.msie && jQuery.browser.version < 9 ) || jQuery('.portfolio-one-column').length>0 )
				jQuery(this).find('img').fadeTo('normal',1);
				else
			    jQuery(this).find('canvas').fadeOut('normal');
			}
			});
		
		e.preventDefault();
		});
			
/* ==================================================================== */
/* === Contact Form Settings ========================================== */
/* ==================================================================== */ 
	
	
    var valFlag = false;
	jQuery(".d_submit").click(function(e){
		
		e.preventDefault();
		obj = jQuery(this);
		valFlag = false;
		obj.parent().find("input[type=text],textarea").each(function(){
			
			if(jQuery.trim(jQuery(this).val())=="")
			{
				jQuery(this).parent().addClass("error");
			valFlag = true;
			}
			else
			jQuery(this).parent().removeClass("error");
			
			});
		
		if(valFlag) return;
	
		var msg = obj.parents(".dynamic_forms").find(".alert");
		
		var loader = jQuery(this).parents(".dynamic_forms").find(".ajax-loading-icon").fadeIn("slow");
		
		jQuery.post( obj.parent().attr("action"), { name : obj.parent().find('.qname').val(), email : obj.parent().find('.qemail').val(), msg : obj.parent().find('.qmsg').val() , notify_email : obj.parent().find(".notify_email").val()  } , function(data){
			
			if(data=="success")
			{
				loader.fadeOut("slow");
			    msg.addClass('alert-success').removeClass('alert-error').html("Your Message been sent");
			   
			}
			else
			{
				loader.fadeOut("slow");
				 msg.addClass('alert-error').removeClass('alert-success').html("Error ! Please try later. ");
				
			}
			msg.fadeIn("slow").delay(3000).fadeOut("fast");
			}  );
		
		
		
		});   



}); // End of Scope
	


(function(jQuery)
{
	jQuery.fn.testable = function(options, callback) 
	{
	
	    jQuery('.compo-tabs-wrapper').each(function(){
	 obj = jQuery(this); temp = jQuery(this).find('li');
	 obj.find('a').width(jQuery('.skeleton').width()/temp.length - 10 );
	 });  	
		
		jQuery('.blurb-wrapper .blurb-button a').css('left', ( jQuery('.skeleton').width()/2 - ( jQuery('.blurb-wrapper .blurb-button a').width()/2)  - 30)   );

	};
	
})(jQuery);



(function(d){function h(e,b){var a=d(b);return a.length<2?a:e.parent().find(b)}function g(e,b){var a=this,o=e.add(a),f=e.children(),l=0,g=b.vertical;b.next=d(e).find(".next");b.prev=d(e).find(".prev");j||(j=a);f.length>1&&(f=d(b.items,e));if(b.size>1)b.circular=false;d.extend(a,{getConf:function(){return b},getIndex:function(){return l},getSize:function(){return a.getItems().size()},getNaviButtons:function(){return m.add(n)},getRoot:function(){return e},getItemWrap:function(){return f},getItems:function(){return f.find(b.item).not("."+
b.clonedClass)},move:function(c,b){return a.seekTo(l+c,b)},next:function(c){return a.move(b.size,c)},prev:function(c){return a.move(-b.size,c)},begin:function(c){return a.seekTo(0,c)},end:function(c){return a.seekTo(a.getSize()-1,c)},focus:function(){return j=a},addItem:function(c){c=d(c);b.circular?(f.children().last().before(c),f.children().first().replaceWith(c.clone().addClass(b.clonedClass))):(f.append(c),n.removeClass("disabled"));o.trigger("onAddItem",[c]);return a},seekTo:function(c,i,e){c.jquery||
(c*=1);if(b.circular&&c===0&&l==-1&&i!==0)return a;if(!b.circular&&c<0||c>a.getSize()||c<-1)return a;var k=c;c.jquery?c=a.getItems().index(c):k=a.getItems().eq(c);var h=d.Event("onBeforeSeek");if(!e&&(o.trigger(h,[c,i]),h.isDefaultPrevented()||!k.length))return a;k=g?{top:-k.position().top}:{left:-k.position().left};l=c;j=a;if(i===void 0)i=b.speed;f.animate(k,i,b.easing,e||function(){o.trigger("onSeek",[c])});return a}});d.each(["onBeforeSeek","onSeek","onAddItem"],function(c,i){d.isFunction(b[i])&&
d(a).bind(i,b[i]);a[i]=function(c){c&&d(a).bind(i,c);return a}});if(b.circular){var q=a.getItems().slice(-1).clone().prependTo(f),r=a.getItems().eq(1).clone().appendTo(f);q.add(r).addClass(b.clonedClass);a.onBeforeSeek(function(c,b,d){if(!c.isDefaultPrevented())if(b==-1)return a.seekTo(q,d,function(){a.end(0)}),c.preventDefault();else b==a.getSize()&&a.seekTo(r,d,function(){a.begin(0)})});var p=e.parents().add(e).filter(function(){if(d(this).css("display")==="none")return true});p.length?(p.show(),
a.seekTo(0,0,function(){}),p.hide()):a.seekTo(0,0,function(){})}var m=h(e,b.prev).click(function(c){c.stopPropagation();a.prev()}),n=h(e,b.next).click(function(c){c.stopPropagation();a.next()});b.circular||(a.onBeforeSeek(function(c,d){setTimeout(function(){c.isDefaultPrevented()||(m.toggleClass(b.disabledClass,d<=0),n.toggleClass(b.disabledClass,d>=a.getSize()-1))},1)}),b.initialIndex||m.addClass(b.disabledClass));a.getSize()<2&&m.add(n).addClass(b.disabledClass);b.mousewheel&&d.fn.mousewheel&&e.mousewheel(function(c,
d){if(b.mousewheel)return a.move(d<0?1:-1,b.wheelSpeed||50),false});if(b.touch){var s,t;f[0].ontouchstart=function(a){a=a.touches[0];s=a.clientX;t=a.clientY};f[0].ontouchmove=function(c){if(c.touches.length==1&&!f.is(":animated")){var b=c.touches[0],d=s-b.clientX,b=t-b.clientY;a[g&&b>0||!g&&d>0?"next":"prev"]();c.preventDefault()}}}b.keyboard&&d(document).bind("keydown.scrollable",function(c){if(b.keyboard&&!c.altKey&&!c.ctrlKey&&!c.metaKey&&!d(c.target).is(":input")&&!(b.keyboard!="static"&&j!=a)){var e=
c.keyCode;if(g&&(e==38||e==40))return a.move(e==38?-1:1),c.preventDefault();if(!g&&(e==37||e==39))return a.move(e==37?-1:1),c.preventDefault()}});b.initialIndex&&a.seekTo(b.initialIndex,0,function(){})}d.tools=d.tools||{version:"@VERSION"};d.tools.scrollable={conf:{activeClass:"active",circular:false,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:true,mousewheel:false,next:".next",prev:".prev",size:1,speed:400,vertical:false,touch:true,
wheelSpeed:0}};var j;d.fn.scrollable=function(e){var b=this.data("scrollable");if(b)return b;e=d.extend({},d.tools.scrollable.conf,e);this.each(function(){b=new g(d(this),e);d(this).data("scrollable",b)});return e.api?b:this}})(jQuery);
(function(d){var h=d.tools.scrollable;h.autoscroll={conf:{autoplay:true,interval:3E3,autopause:true}};d.fn.autoscroll=function(g){typeof g=="number"&&(g={interval:g});var j=d.extend({},h.autoscroll.conf,g),e;this.each(function(){function b(){f=setTimeout(function(){a.next()},j.interval)}var a=d(this).data("scrollable"),g=a.getRoot(),f,h=false;a&&(e=a);a.play=function(){f||(h=false,g.bind("onSeek",b),b())};a.pause=function(){f=clearTimeout(f);g.unbind("onSeek",b)};a.resume=function(){h||a.play()};
a.stop=function(){h=true;a.pause()};j.autopause&&g.add(a.getNaviButtons()).hover(a.pause,a.resume);j.autoplay&&a.play()});return j.api?e:this}})(jQuery);

	 function generateEffect(image,index,height,width)
	{
		var im = image,
		 parent = im.parent(),
		 arr = new Array(); i =0;  j =0, 
		 src = im.attr("src");
		
		parent.append("<canvas width='"+width+"' height='"+height+"' id='s"+index+"' /><span class='zoom-icon'/>");
		
		
		image = im[0];
						
		var canvas = document.getElementById('s'+index);
		var context = canvas.getContext('2d');
       
	    context.drawImage(image, 0, 0);
        var grayscale,imageData    = context.getImageData(0,0,canvas.width,canvas.height),
		data        = imageData.data;
       
	 	
      for(var i = 0,z=data.length;i<z;i++){	
	        grayscale = ( data[i] * 0.02   + data[i+1]  + data[i+2] * 0.1 )/3;
			 data[i] = grayscale;
            data[++i] = grayscale;
            data[++i] = grayscale;
 			data[++i] = 255;
			
			}
			
	  	

         // Putting the modified imageData back on the canvas.
        context.putImageData(imageData,0,0,0,0,imageData.width,imageData.height);
		
		
			//jQuery("#s"+index).hide();	
		
			
				
			}	