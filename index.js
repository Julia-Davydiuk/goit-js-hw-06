import users from './users.js';

console.log(users)
//----------------1--------------------------
const getUserNames = users => users.map(function(user){
  return user.name;
  });

  console.log(getUserNames(users));
//----------------1--------------------------

//----------------2--------------------------
  const getUsersWithEyeColor = (users, color) => 
  users.filter(function (user) {
      if (user.eyeColor === color) {
          return user.name;
      };
  });

  console.log(getUsersWithEyeColor(users, 'blue')); 
//----------------2--------------------------

//----------------3--------------------------
  const getUsersWithGender = (users, gender) =>
  users.filter(function (user) {
    if (user.gender === gender) {
      return user.name;
    }
  })
  .map(users => users.name);

  console.log(getUsersWithGender(users, 'male'));  
//----------------3--------------------------

//----------------4--------------------------
const getInactiveUsers = users => 
users.filter(function (user) {
    return !user.isActive;
});

console.log(getInactiveUsers(users));
//----------------4--------------------------

//----------------5--------------------------
const getUserWithEmail = (users, email) => 
users.find(function (user) {
return user.email === email;
});

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
//----------------5--------------------------

//----------------6--------------------------
const getUsersWithAge = (users, min, max) => 
users.filter(function (user) {
return user.age > min && user.age < max
});

console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));
//----------------6--------------------------

//----------------7--------------------------
const calculateTotalBalance = users => 
users.reduce (function (accumulator, user) {
return accumulator + user.balance;
},0);

console.log(calculateTotalBalance(users));
//----------------7--------------------------

//----------------8--------------------------
// Массив имен всех пользователей у которых есть друг с указанным именем
const getUsersWithFriend = ( users, friendName ) => {
  return users
    .filter( userFriend => userFriend.friends.includes( friendName ) )
    .map( obj => obj.name );
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//----------------8--------------------------
//----------------9--------------------------
const getNamesSortedByFriendsCount = users => 
users.sort(function (prevUser, nextUser) {
  return prevUser.friends.length - nextUser.friends.length
})
.map(obj => obj.name);

console.log(getNamesSortedByFriendsCount(users));
//----------------9--------------------------
//----------------10-------------------------
//Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => 
users.reduce((acc, user) => {
  acc.push(...user.skills);
  return acc;
}, [])
.filter((user, index, arr) => {
return arr.indexOf(user) === index;
})
.sort()


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
//'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//----------------10-------------------------
