let btnCreate = document.querySelector("#create")
const url = ("http://localhost:8080/post")

btnCreate.addEventListener("click", () => {
    
    let photo= document.getElementById("photo").value
    let userName= document.getElementById("userName").value
    let title= document.getElementById("title").value
    let tag= document.getElementById("tag").value
    let content= document.getElementById("content").value
    let date= document.getElementById("date").value
    let pph= document.getElementById("pph").value
    let readTime= document.getElementById("readTime").value


    if(userName === "" || title === "" || tag === "" || content === "" || date === "" || pph ==="" || readTime ===""){
        alert("Empty input")
    } else {
        let newComment= {
            photo: photo,
            userName: userName,
            title: title,
            tag: tag,
            content: content,
            date:date,
            pph: pph,
            readTime: readTime
        }

        console.log(newComment)
       fetch(url, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }) 
            .then((response) => {
                console.log(response, "Si entro al fetch de new comment")
                return response.json()
            })
            .then((finalResponse) => {
                alert (`Post creado con exito! ${finalResponse.name}`)
                window.location.pathname = "index.html"
            })
            .catch((err) => {
                console.log(err, "no entra al fetch de newcomment")
            })
            
    }
})



