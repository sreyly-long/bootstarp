//data type
//----- 1. string -------
let fistName = "Sreyly"
let lastName = "Long"
let favorite = 'Researching and Gaming'
let selfIntroduction = `Hi, greeting from Cambodia. I,
                        ${lastName}${fistName}, my favorite is ${favorite}.`
console.log(selfIntroduction)
console.log(typeof(fistName))
let numberOfApple = '90'

// -------2. Number
let myApple = 80
console.log(typeof(numberOfApple))
let result = numberOfApple + myApple

console.log('------- Total apple:',typeof(result),result)
//--------backtick
let HEADING = `
            <h1>Welcome, Developer Cambodia</h1>
            <h2>Welcome</h2>

`
let ITEM = `
        <p>javascript</p>
`
document.querySelector('.heading').innerHTML = HEADING

document.querySelector('.item').innerHTML = ITEM

// 2. Number
let num1 = 40
let num2 = "abc"
let num3 = 5e-5 // 5 X 10^-5 = 0.00005
let num4 = 5e5 // 5000000
let output = num1/num2  // number/string result is NAN.
console.clear
console.log(output)

//BigInt


//Boolean (true, false)- condition
let loading = true
loading = false
if (loading){
    // show skelato
}
else{
    //show real data
}
//Undefined


//object
let student ={
    fullName: "weekend",
    age:45,
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0EUmWQ55_rI7tHVk38AUVrAWams2dbChcA&usqp=CAU",
    favorite: "singer",
}
console.log(student.fullName,student.favorite,student.age)
console.log(student)

document.querySelector('.row').innerHTML = `

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card border-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top"alt="">
    <div class="card-body">
        <p class="card-text"> ${student.fullName}
        </p>
        <p class= "card-text"> ${student.age}</p>
    </div>

</div>

</div>

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card border-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top"alt="">
    <div class="card-body">
        <p class="card-text"> ${student.fullName}
        </p>
        <p class= "card-text"> ${student.age}</p>
    </div>

</div>

</div>

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card border-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top"alt="">
    <div class="card-body">
        <p class="card-text"> ${student.fullName}
        </p>
        <p class= "card-text"> ${student.age}</p>
    </div>

</div>

</div>

<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card border-0 h-100 shadow">
    <img src=${student.profile} class="card-img-top"alt="">
    <div class="card-body">
        <p class="card-text"> ${student.fullName}
        </p>
        <p class= "card-text"> ${student.age}</p>
    </div>

</div>

</div>

</div>
`


   


