let users = []

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
        users.push(newUser)
        for (let i = 0; i < users.length; i++) {
            if (users[i].userEmail === email) {
                alert("user already exist")
                return 0;
            }
        }

        localStorage.setItem("users", JSON.stringify(users))
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
                alert("sucess")
                // break
            }
        }


    }
    if (!isMatch) {
        alert("sorry")
    }

}