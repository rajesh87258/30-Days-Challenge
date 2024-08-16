// const coding = ["js", "ruby", "c++", "python"];

// const values  = coding.forEach( (item)=>{
//     console.log(item);
//     return item;
// } )

// console.log(values)

/*

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {

    //  WHEN YOU ARE GIVING CURLY BRACKET YOU HAVE TO USE RETURN STATEMENT
    return num > 4
})
console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
});
console.log(newNums);

//[ 5, 6, 7, 8, 9, 10 ]


*/



const books = [
    {title: 'Book one', genre:'Fiction', publish:1981, edition:2004},
    {title: 'Book two', genre:'Non-Fiction', publish:1993, edition:2020},
    {title: 'Book three', genre:'History', publish:1999, edition:2003},
    {title: 'Book four', genre:'Non-Fiction', publish:2000, edition:2010},
    {title: 'Book five', genre:'Science', publish:2003, edition:2006},
    {title: 'Book six', genre:'History', publish:2005, edition:2008},

];
let userBooks = books.filter( (bk)=> bk.genre === 'History')
// console.log(userBooks);

/*
[
  {
    title: 'Book three',
    genre: 'History',
    publish: 1999,
    edition: 2003
  },
  { title: 'Book six', genre: 'History', publish: 2005, edition: 2008 }
]
  */

userBooks =books.filter((bk)=>{
    return bk.publish >= 2000 && bk.edition >=2006
})
console.log(userBooks);

/*
[
  {
    title: 'Book four',
    genre: 'Non-Fiction',
    publish: 2000,
    edition: 2010
  },
  {
    title: 'Book five',
    genre: 'Science',
    publish: 2003,
    edition: 2006
  },
  { title: 'Book six', genre: 'History', publish: 2005, edition: 2008 }
]
  */