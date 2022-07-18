let users = []
let page=window.location.href.split("/");
page=page
console.log(page)

function AllUsers(){
    let takeUser=localStorage.getItem("usersItem")

    users=JSON.parse(takeUser)||[]
}
AllUsers()

const signup = () => {
    console.log("users Entery:", users)
    let fName = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    let Cpassword = document.getElementById("Cpass").value

    
    console.log(fName, email, password)
    if (password === Cpassword) {
        let newUser = {
            userFirstName: fName,
            userEmail: email,
            userPass: password,
            userCpass: Cpassword,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].userEmail === email) {
                alert("user already exist")
                return 0;
            }
        }
        users.push(newUser)

        localStorage.setItem("usersItem", JSON.stringify(users))
        window.location.href = "./login.html"
    }
    else {
        alert("Password Dont Match")
    }
}

const login = () => {
    let LoginEmail = document.getElementById("email").value
    let Loginpass = document.getElementById("password").value
    console.log(LoginEmail)
    console.log(Loginpass)

    let isMatch = false

    for (let i = 0; i < users.length; i++) {

        if (users[i].userEmail === LoginEmail) {
            if (users[i].userPass === Loginpass) {
                isMatch = true
                localStorage.setItem("LoginItem",JSON.stringify(users[i]))
                 window.location.href="./home.html";
            }
        }


    }
    if (!isMatch) {
        alert("sorry")
    }

}

const logout=()=>{
    localStorage.removeItem("LoginItem")
    window.location.href="./login.html"
}