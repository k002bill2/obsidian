symbol.for(): 전역심볼
toString()  10진수 > 2진수/16진수:컬러

Math.celi() : 올림
Math.floor() : 내림

소수점 자릿수 방식:
소수점 둘째자리까지 표현  >>>
Math.round(userRate *100) / 100 
userRate.toFixed(0);

parseInt();
parseFloat();qwer

Math.random()
Math.floor(Math.random()*100) +1
Math.abs() : 절대값
Math.pow(n,m): 제곱

str.slice(n,m) n:시작점, m:없으면 문자열 끝까지 양수면 그 숫자까지 음수면 끝에서 셈
str.substring(n,m) n과 m사이 문자열 반환

function hasCola(str) {
	str.indexof(‘’ > -1)
}
arr.splice(n,m,x) : 특정요소 지우고 추가
arr.slice(n,m) : n부터 m까지 반환
concat : 합쳐서 새배열 반환

arr.reduce() ; 배열 합

user ={
	…user, 
	…info, 
	skills : […fe, …lang],
};

Clousure >>> 어려움

setTimeout(fn, 2000);
 
this 값을 바꾸기 .>>>>
call, apply - apply는 매개변수를 배열로 받는다, 
bind - 함수의 this 값을 영구히 바꿀 수 있습니다.

prototype
constructor

Promise chain >>>>>>>
const pr = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(‘OK’);
	}, 3000);
});
pr.then((result) => {
	console.log(result);
}).catch((err) => {  
	console.log(err);
}).finally(() => {
		console.log(‘—— 주문 끝 ——’)
})

Promise.all();

async await 

코드브러시