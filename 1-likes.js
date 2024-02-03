let names = ["Andika", "Rayhan", "Hafiz", "Dirga", "Zidan", "Fairuz", "aden"];

function likes(names) {
  let dataLikes = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ];

  let idx = Math.min(names.length, 4);

  return dataLikes[idx].replace(/{name}|{n}/g, function (val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}
let runLikes = likes(names);
console.log(runLikes);

// function likes(names) {
//   if(names.length === 0) return "no one likes this";
//   if(names.length === 1) return names[0] + " likes this";
//   if(names.length === 2) return names[0] + " and " + names[1] + " like this";
//   if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//   return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
// }


// console.log(likes(["Rayhan","Alsauqi","Fairuz","Amir","Slamet"]))

// const likes = names => [
//   'no one likes this',
//   `${names[0]} likes this`,
//   `${names[0]} and ${names[1]} like this`,
//   `${names[0]}, ${names[1]} and ${names[2]} like this`,
//   `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// ][Math.min(4, names.length)];


// console.log(likes(["Rayhan","Alsauqi","Fairuz","Hamid","Slamet","Muhammad"]))