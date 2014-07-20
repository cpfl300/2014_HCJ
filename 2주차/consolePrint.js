window.addEventListener('load', function(){
	var obj = {
		strTexts : " 은 정말 몸에 좋아요 ^^ ",
		registerEvents : function(e){
			var clicked;
			if(e.target.tagName === 'LI'){
				clicked = e.target.textContent;
				console.log(clicked.concat(this.strTexts));
			}
		}
	};

	document.querySelector('ul').addEventListener('click', function(e){obj.registerEvents(e)});

});