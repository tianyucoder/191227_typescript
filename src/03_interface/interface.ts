//对象接口
interface Iperson {
	readonly id:string,
	name:string,
	age:number,
	sex?:string
}

const person:Iperson =  {
	id:'001',
	name:'tom',
	age:19,
}
// person.id = '007'

//函数接口
//定义一个查找关键字的函数，接收两个参数：查找源、关键词，返回布尔值表达是否包含该关键词。
interface IfindKeyWord{
	(a:string,b:string):boolean
}

const findKeyWord:IfindKeyWord = function (source,keyWord){
	return source.search(keyWord) > -1
}
console.log(findKeyWord('abc','c'));