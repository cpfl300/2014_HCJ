// namespace는 전역에 변수를 만들어서 그 안에 메소드, 변수 등을 담아두는 것으로
// 변수간의 충돌을 막기 위해 사용한다.

var minju = {
}

minju.greet = {
	msgHi: "hi",
	greeting: function(){
		console.log(this.msgHi);
	}
};

minju.subject = {
	sub: "HCJ",
	call: function(){
		console.log(this.sub);
	}
}

minju.subject.call();
minju.subject.greeting();
