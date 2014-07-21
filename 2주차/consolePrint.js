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

        //delegation 방법으로 구현했네. 잘했다.
        //원래 출제 의도는 아래 코드가 registerEvents 안에 들어가는 거였거든. 
        //그렇게 되면 THIS가 좀 달라지고, 그 문제를 BIND로 해결하면 됨.
	document.querySelector('ul').addEventListener('click', function(e){obj.registerEvents(e)});

});
