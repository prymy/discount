(function(){
	let params = (function(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;})();
	let fafifu = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
	if(params.id) {
		if(fafifu) location.replace('https://aliexpress.ru/item/'+params.id+'.html');
		else location.href = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_ALiWwG&dl_target_url=https://aliexpress.ru/item/'+params.id+'.html';
	}
	if(params.gotcha) { document.addEventListener('DOMContentLoaded', function(){ document.title = 'Gotcha'; }); }
})();