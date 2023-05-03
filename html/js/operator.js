//--------Assigment operator

let firstName = "Jonh"
// let num1 = 50
// num1 += 50 // num1 = num1 + 50
// num2 = 50
// num2 -= 20 
// console.log(num2)
// console.log(num1)

// //--------String Operator
// let fullName = "Weekend"
// fullName += firstName
// console.log(fullName)

//--- Array---can store multiple variable in string name
let student1 ={
    fullName:"Taylor",
    age:45,
    profile:"https://variety.com/wp-content/uploads/2023/03/GettyImages-1463250014.jpg",
    favorite:"singer",
}
let student2 ={
    fullName:"Taylor",
    age:45,
    profile:"https://variety.com/wp-content/uploads/2023/03/GettyImages-1463250014.jpg",
    favorite:"singer",
}
let student3 ={
    fullName:"Taylor",
    age:45,
    profile:"https://variety.com/wp-content/uploads/2023/03/GettyImages-1463250014.jpg",
    favorite:"singer",
}
let student4 ={
    fullName:"Taylor",
    age:45,
    profile:"https://variety.com/wp-content/uploads/2023/03/GettyImages-1463250014.jpg",
    favorite:"singer",
}

let product = [student1,student2,student3,student4]
let ROW = document.querySelector('.row')
//loop to iterate
// product.map(product => ROW.innerHTML += `
// <div class="col-12 col-sm-6 col-md-4 col-lg-3">
// <div class="card">
//     <img src=${product.profile} class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text">${product.fullName}</p>
//     </div>
// </div>
// </div>
// `)

//logical Operator
const x = 5, y = 3;
(x > 2)||( y< 1)
console.log((x>2)||(y<1))

//--- Ternary Operator
// condition ? expression_1 : expression_2
 let age = 17
 let output = age >= 18? "You are legal to vote":"You are not legal to vote"
 console.log(output)

 //user case for ternary operator
 let loading = true
 let noData = document.querySelector(".no-data")
 let hasData = document.querySelector(".has-data")

 let feedback = prompt("Do you want to see data?")
 console.log(feedback)

 feedback != "yes"? noData.innerHTML += `
 <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" aria-hidden="true">
        <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" class="card-img-top" alt="...">
        <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
</div>
 `
 :
 product.map(product => hasData.innerHTML += `

 <div class="col-12 col-sm-6 col-md-4 col-lg-3">
 <div class="card">
     <img src=${product.profile} class="card-img-top" alt="...">
     <div class="card-body">
     <p class="card-text">${product.fullName}</p>
     </div>
 </div>
 </div>
 
 `)



