
//variables
//declare var a;or const a;(that's declaring a variable)
//assigning a value to a variable(example const r =0)


//remainder(gives reminder of the division of two numbers)oftenn used to determine if a number is even or odd
var a=5
var c=6
var b="i am happy"
a+=5
console.log(a)


//Write a function that takes a string as input and returns the last character of the string.
function strings(){
    const str1="i am so happy"
    const str2=str1.slice(-1)
    console.log(str2)
}
strings()
//STRINGS
//can concatinate strings with a plus operator
//CONCATINATING STRINGS
const sr3="The kindof "
const sr4="friends needed "
const all="the kindof " +"friends "
let mystr="i am a person, "
mystr+="oh no i mean female"
console.log(mystr)
console.log(sr3+sr4)
console.log(all)

let lastnm="love"
let last=lastnm.length
console.log(last)
//1.Write a function that takes a string as input and returns the length of the string.
function takes(){
    const str4="we are one"
    // const str5=str4.length   //no brackets for length its not a function
    console.log(str4.length)
    
}
takes()
//2.Write a function that takes a string as input and returns the string in uppercase letters.
function up(){
    const str6="we are happy"
    const str22=str6.toUpperCase()
    console.log(str22)
}
up()
//3.Write a function that takes a string as input and returns the string in lowercase letters.
function low(){
    const strl="AFRICANS ARE ONE"
    console.log(strl.toLowerCase())
}
low()
//4.Write a function that takes a string as input and returns the first character of the string.
function first(){
    const inl="my africa"
    // const inl2=inl.shift
    console.log(inl[0])
}
first()
//Write a function that takes a string as input and returns the last character of the string.
function last1(){
    const ny="Jayvonne"
    console.log(ny.slice(-1))
}
last1()
//Write a function that takes a string as input and returns it in titlecase.
function title(){
    const t1="achiving goals"
    const t2=t1.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase("")+rest.join("").toLowerCase("")).join(" ")
    console.log(t2)
}
title()
//Write a function that takes two strings as input and concatenates them together.
function together(){
    const c1="I stan my favs "
    const c="with my full chest "
    // const cc="marrion forever"
    // console.log(c1+c)     this can work or also the concat method
    // console.log(c1.concat(c,cc)) how to concat three strings
    console.log(c1.concat(c))
}
together()
//Write a function that takes two strings as input and checks if they are equal.
function checks(){
    const cks1="johanesburg"
    const cks2="bohanesburg"
    if(cks1.length===cks2.length){ //.length to compare their lengths
        console.log(true)
    }else{
        console.log(false)
    }
    
}
checks()
//Write a function that takes two strings as input and returns the index of the first occurrence of the second string in the first string.
 //If the second string does not occur in the first string, the function should return -1.
 function occur(string1,string2){
    if(string2.includes(string2)){
        return string2.indexOf(string1)
    }else{
        return -1
    }
}
   let string1="Hello world"
   let string2="world"
    let index=occur(string1,string2)
console.log(index)
//Write a function that takes a string as input and returns a new string with all the vowels removed.
function remove(){
    const w="i love eating"
    const removevowels=w.replace(/[a,e,i,o,u]/g,'')
    console.log(removevowels)
}
remove()
//Write a function that takes a string as input and returns a new string with all the consonants removed.
function removed(){
const d="decision made"
const removeconsonants=d.replace(/[bcdfghjklmnpqrstvwxyz]/g,'')
console.log(removeconsonants)
}
removed()
//Write a function that takes a string as input and returns a new string with all the digits removed.
function digits(){
    const in1="1 is better than 12 so as 7 is better than 14"
    const in2=in1.replace(/0123456789/g,'')
    console.log(in2)
}
digits()

function maybeArray(str1){
    if(Array.isArray(str1)){
        console.log('true')
    }else{
        console.log('false')
    }
}
const str1=[1,2,3,45]
//"1,2,3,4" will return false
maybeArray(str1)
function getArray(str2){
    console.log(Array.isArray(str2))
}
const str2 =[1,2,3,4,5]
getArray(str2)
ss

dhdx