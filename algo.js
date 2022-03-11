// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


function bump(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'n') {
      count++;
    }
  }
  if (count > 15) {
    return "Car Dead";
  }
  return "Woohoo!";
}
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like thi


function likes(names) {
  //  let output = [];
  //   console.log(names)
  if (names.length === 0) {
    return 'no one likes this';
  }
  if (names.length === 1) {
    return `${names[0]} likes this`
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }

}