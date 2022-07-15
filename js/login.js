const API_URL = "http://localhost:8080/login"
const buttonLogin = document.querySelector("#login__button")
const emailInput = document.querySelector("#typeEmail")
const passwordlInput = document.querySelector("#typePassword")

buttonLogin.addEventListener("click", async (event) =>{
    event.preventDefault()
    const email = emailInput.value
    const password = passwordlInput.value

    const dataBackend = {
        email,
        password
    }

    const data = await fetch(API_URL,  {
        method: "Post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dataBackend)
    })

    const response = await data.json()
    const token = response.token

    localStorage.setItem("token", token)
    window.location.href = "/index.html"

})