let btnCreate = document.querySelector("#create")

btnCreate.addEventListener("click", () => {
    
    let photo= document.getElementById("photo").value
    let userName= document.getElementById("userName").value
    let title= document.getElementById("title").value
    let hash= document.getElementById("hash").value
    let content= document.getElementById("content").value

    if(photo === "" || userName === "" || title === "" || hash === "" || content === ""){
        alert("Empty input")
    } else {
        let newComment= {
            photo: photo,
            userName: userName,
            title: title,
            hash: hash,
            content: content
        }

        console.log(newComment)

        fetch("https://devto-8117c-default-rtdb.firebaseio.com/post.json", {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => {
                console.log(response)
                return response.JSON()
            })
            .then((finalResponse) => {
                alert (finalResponse.name)
            })
            
    }
})



