

// start with strings, numbers and booleans

let age = 100; 
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes'; 
let name2 = name;
console.log(name, name2);
name = 'Tern'
console.log(name, name2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Rayan', 'Poppy'];

// ...and we want to maje a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem! 

// Oh, no - we have edited the original array too!

// So, how do we fix this? We take a copy instead!
// Or create a new array and concat the old one in
const team2 = players.slice();
const team3= [].concat(players);
console.log(team2, team3);

// one day

// Or use the new ES6 Spread

const team4 = [...players];
team4[3] = 'hee haw';
console.log(team4);

console.log(players);

const team5 = Array.from(players);

// Now when we update it, trhe original one isn't changed

// With objects 
const person = {
	name: 'Wesley', 
	age: 80
};


// And think we make a copy:

//const captain = person;
//captain.number = 99;
//console.log(person);

// how do we make a copy instead? 

const moussaillon = Object.assign({}, person, {number:99});
// This take a blank objct {}, pick 'person' and make the changes
console.log(moussaillon)

// We will hopefully soon see the object ...spread
// const captain3 = {...person}; //=> react

// Things to note- this is only 1 level deep - both for Arrays and Objects. 
// lodash has a cloneDeep method, but you should think twice before use it. 

const John = {
	name: 'John',
	age: 100, 
	social: {
		twitter: '@john',
		facebook: 'john.dev'
	}
}
console.clear();

const Bob = Object.assign({}, John);
Bob.name = 'Bob';
console.log(John, Bob)

Bob.social.twitter = '@Bob';
console.log(John.social);

// Only do 1 step deep so change the parent as well !

// Poor man deep clone
const Mario = JSON.parse(JSON.stringify(John));


