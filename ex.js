// Add element
const friends = ["Mike", "Steven", "Peter"]
friends.push ("Bark") 
console.log (friends) // add element at the finish

friends.unshift ("Bober")
console.log (friends) // add element at the start

// Remove elevent
friends.pop () // Remove the last one element
console.log (friends)

friends.shift () // Remove the first one element
console.log (friends)

// indexOf wii give to us position of element
console.log (friends.indexOf("Steven")) 

// includes returns true is element in arrays or false if element not in arrays
console.log (friends.includes("Bober"))
console.log (friends.includes("Steven"))



const johas = {
    friends: ['Michael', 'Dmitry', 'Pavel'],
    firstName: 'Johas',
    birthYear: 1991,
    hasDriverLicence: false,
    job: "teacher",

    calcAge: function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    }
}
console.log (johas.calcAge())
if (johas.hasDriverLicence === true) {
    console.log (`${johas.firstName} is ${johas.age} years old ${johas.job} and he has a driver licence`)
}else{
    console.log (`${johas.firstName} is ${johas.age} years old ${johas.job} and he hasn't a driver licence`)
}




const myCountry = {
    country: "Ukraine",
    capital: "Kyiv",
    language: "Ukrainian",
    population: 42000000,
    neighbours: ["Russian", "Poland", "Belarus","Moldova", "Hungary", "Slovakia", "Rumunia"],
}
console.log (`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length}
neighbouring countries and a capital called ${myCountry.capital}`)



/* Write your code below. Good luck! 🙂 */
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}
mark.calcBMI()
john.calcBMI()


if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`)
} else if (john.BMI > mark.BMI) {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`)
}





  for(let election = 1; election <= 50; election++ ){
    console.log(`Voted ${election} is currently number`)
  }


  const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];
    for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours [i][y]}`);