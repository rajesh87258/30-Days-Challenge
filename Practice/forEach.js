

const coding = ["js", "ruby", "c++", "python"];

/*
coding.forEach( function (item){
    console.log(item)
} )
// js
// ruby
// c++
// python

coding.forEach( (value) =>{
    console.log(value)
} )
// js
// ruby
// c++
// python


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)




//IT JUST TAKE REFERENCE OF FUNCTION 
// js
// ruby
// c++
// python





coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})
// js 0 [ 'js', 'ruby', 'c++', 'python' ]
// ruby 1 [ 'js', 'ruby', 'c++', 'python' ]
// c++ 2 [ 'js', 'ruby', 'c++', 'python' ]
// python 3 [ 'js', 'ruby', 'c++', 'python' ]

*/



const myCoding = [
    {
        languageName : "javaScript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }

]

myCoding.forEach( (item) =>{

    console.log(item.languageName);
} )
// javaScript
// java
// python