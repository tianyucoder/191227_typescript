(()=>{

	//布尔值
	let isDone:boolean = false;
	isDone = true;
	//isDone = 2; //不能将类型“2”分配给类型“boolean”。

	//数字
	let a1:number = 10 // 十进制
	let a2:number = 0b1010  // 二进制
	let a3:number = 0o12 // 八进制
	let a4:number = 0xa // 十六进制
	//console.log(a1,a2,a3,a4);

	//字符串
	let str1:string = 'hello,1227'
	//str1 = 0 //不能将类型“0”分配给类型“string”
	console.log(str1);

	//undefined 和 null
	let u:undefined = undefined
	let n:null = null
	//备注:undefined 和 null一般用于给函数做类型注解

	//数组
	let arr1:number[] = [1,2]
	let arr2:string[] = ['1','2']
	let arr3:Array<number> = [2,4,6,8,10]

	//元组
	let t1:[number,string,string] = [2,'a','b']
	console.log(t1);
	console.log(t1 instanceof Array);

	//


})()



