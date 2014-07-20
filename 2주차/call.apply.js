var mainObj = {
	class: "NotThing",
	play: function(name, time){
		console.log("my name is: " + name +", I Have " + this.class+" Class At " + time);
	}
}

var monday = {
	class : "HCJ"
}

var tuesday = {
	class : "DB"
}

mainObj.play.call(monday, '민주', '1교시');
mainObj.play.apply(monday, ['민주', '1교시']);
//위의 두 경우 mainObj의 play함수의 this는 monday라는 object이다.

mainObj.play.call(tuesday, '민주', '1교시');
mainObj.play.apply(tuesday, ['민주', '1교시']);
//위의 두 경우 mainObj의 play함수의 this는 tuesday라는 object이다.

// 3. apply와 call의 차이점: 
//	applay는 함수 인자를 배열 형태로, call은 쉼표로 구분지어 전달한다. 
//	둘 다 첫번째 인자로 this의 값을 전달한다.