const API_URL = "http://localhost:8080/users"
const login_url = "http://localhost:8080/login"
const buttonLogin = document.querySelector("#login__button")
const buttonSignin = document.querySelector("#signin__button")
const emailInput = document.querySelector("#typeEmail")
const passwordlInput = document.querySelector("#typePassword")

buttonSignin.addEventListener("click", async (event) =>{
    console.log("prueba click")
    event.preventDefault()
    const email = emailInput.value
    const password = passwordlInput.value

    const dataBackend = {
        email,
        password
    }

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(dataBackend),
        headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) 
        .then((response) => {
            console.log(response, "Si entro al fetch de new comment")
            return response.json()
        })
        .then((finalResponse) => {
            alert (`Usuario creado con exito!`)
        })

} )



buttonLogin.addEventListener("click", async (event) =>{
    event.preventDefault()
    const email = emailInput.value
    const password = passwordlInput.value

    const dataBackend = {
        email,
        password
    }

    const data = await fetch(login_url,  {
        method: "Post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataBackend)
    })

    const response = await data.json()
    const token = response?.token
    console.log (token) 
    if (!token){
        window.alert("Invalid Password")
        return
    }
    localStorage.setItem("token", token)
    window.location.href = "/index.html"
    
})