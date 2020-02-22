$(document).ready(function(){
	console.log('Ready App');
	tabControl();
});

let currentTabID;

function tabControl(){
	setInterval(function(){
		let hash = document.location.hash;
		let tabID = hash.split('#tab=')[1];
		if(typeof tabID != 'undefined'){
			if(currentTabID != tabID){
				let tab = $('#' + tabID);
				if(!tab.hasClass('active')){
					$('.tab.active').removeClass('active');
					$('[data-tab].active').removeClass('active');
					
					$('#' + tabID).addClass('active');
					$('[data-tab="' + tabID + '"]').addClass('active');
				}
				currentTabID = tabID;
			}
		}else{
			// default tab
		}
	}, 50);
}