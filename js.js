var userData = [
    {id : 1, name : 'ali' , age: 20},
    {id : 2, name : 'amir' , age: 20},
    {id : 3, name : 'mat' , age: 20},
]

var isInusere = userData.some(function (user){
    console.log(user)
    return user.name == 'hasn'
})

console.log(isInusere)