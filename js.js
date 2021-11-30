var user = prompt("enter your name")

var arr =[
    'ali',
    'hasan',
    'mmad',
    'arman',
    'amir'
]

var isLogin = arr.includes(user)
if (isLogin === true) {
    console.log("خوش آمدید")
} else {
    console.log("ابتدا باید ثبت نام کنید")
}