document.getElementById('title').id
//'title'

document.getElementById('title').class
//undefined


document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute
// ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute()
// Failed to execute

document.getElementById('title').getAttribute('id')
//'title'

document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').setAttribute('class', 'test')
// class name changed to test

document.getElementById('title').setAttribute('class', 'test heading')
// CLASS NAME CHANGE TO TEST HEADING

const title =document.getElementById('title')
title.style.padding = '15px'
title.style.borderRadius = '10px'
title.style.borderRadius = '15px'


title.innerText
//ONLY SHOW WHICH IS VISIBLE
title.textContent
//SHOW ALL CONTENT
title.innerHTML
// whole line with html tag also
// '<span style="display: none;">246</span>DOM'

document.getElementsByClassName('heading')
//HTML COLLECTION

document.querySelector('h2')

document.querySelector('#title')

document.querySelector('.heading')

document.querySelector('input [type = "password"]')

document.querySelector('p:first-child')


document.querySelector('ul')
//<ul>

const myul = document.querySelector('ul')


myul.querySelector('li')
{/* <li> */}

const turnGreen = myul.querySelector('li')

turnGreen.style.backgroundColor = "green"

turnGreen.style.padding = "10px"

turnGreen.innerText

turnGreen.innerText = "five"


document.querySelectorAll('li')
const list = document.querySelectorAll('li')
// this is node list not array list SO ONLY FOREACH WILL WORK IF YOU WANT TO CHANGE INTO ARRAY YOU HAVE TO APPLY ON NODELIST THEN YOU CAN USE THIS AS ARRAY

list.style.color = "green"
//THIS NOT RIGHT WAY
list[0].style.color = "green"




list.forEach( function (l){
    l.style.backgroundColor = 'green'
})


document.getElementsByClassName('list-item')
const tempClassList = document.getElementsByClassName('list-item')
tempClassList

tempClassList.forEach(function(li){
    console.log(li)
})
//TypeError: tempClassList.forEach is not a function


// HOW TO CONVERT  into array

tempClassList
//HTML COLLECTION


Array.from(tempClassList)
//(4) [li.list-item, li.list-item, li.list-item, li.list-item] Now we can use array properties


const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function(li){
    li.style.color = "orange";
})

document.querySelectorAll('h2')
const allH2 = document.querySelectorAll('h2')
allH2[0].innerText

// const myh2 = document.querySelectorAll('list-item')

// myh2.forEach(function (li){
//     li.style.backgroundColor="red";
//     li.style.color="blue"
// })


const myh2 = document.querySelectorAll('h2')

myh2.forEach(function (li){
    li.style.backgroundColor="red";
    li.style.color="blue";
    li.style.innerText="boss"
})