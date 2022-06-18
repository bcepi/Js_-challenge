let btnCreate = document.querySelector("#create")

btnCreate.addEventListener("click", () => {
    
    let photo= document.getElementById("photo").value
    let userName= document.getElementById("userName").value
    let title= document.getElementById("title").value
    let tag= document.getElementById("tag").value
    let content= document.getElementById("content").value
    let date= document.getElementById("date").value
    let pph= document.getElementById("pph").value
    let readTime= document.getElementById("readTime").value


    if(photo === "" || userName === "" || title === "" || tag === "" || content === "" || date === "" || pph ===""){
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

        fetch("https://devto-8117c-default-rtdb.firebaseio.com/posts/.json", {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((finalResponse) => {
                alert (`Post ${finalResponse.name}`)
            })
            .catch((err) => {
                console.log(err)
            })
            
    }
})



