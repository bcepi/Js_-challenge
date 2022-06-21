let url= window.location.search.substring(9)
//console.log(url)
//update.html?response-N4t5up9edBD9pqRRWgX
fetch(`https://devto-8117c-default-rtdb.firebaseio.com/posts/${url}.json`)
.then((response)=>{
    console.log("ya entré")
    if (!response.ok){
        throw new Error("big mistake :o")
    } else {
        return response.json()
    }
})
.then((response) =>{
    console.log(response)
    let {photo, userName, title, tag, content, date, pph, readTime} = response
    document.querySelector("#photo").value = photo
    document.querySelector("#userName").value = userName
    document.querySelector("#title").value = title
    document.querySelector("#tag").value = tag
    document.querySelector("#content").value = content
    document.querySelector("#date").value = date
    console.log(date)
    document.querySelector("#pph").value = pph
    document.querySelector("#readTime").value = readTime
})
.catch((Err)=>{
    console.log(Err)
})


let btnUpdate = document.getElementById("btnUpdate")
btnUpdate.addEventListener("click",()=>{
    photo = document.querySelector("#photo").value
    userName = document.querySelector("#userName").value 
    title = document.querySelector("#title").value 
    tag = document.querySelector("#tag").value 
    content = document.querySelector("#content").value 
    date = document.querySelector("#date").value 
    pph = document.querySelector("#pph").value 
    readTime = document.querySelector("#readTime").value 

    if(userName === "" || title === "" || tag === "" || content === "" || date === "" || pph ===""){
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
        fetch(`https://devto-8117c-default-rtdb.firebaseio.com/posts/${url}.json`, {
            method: 'PATCH',
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
                console.log(finalResponse)
                alert('Post editado con exito')
                window.location.pathname = 'index.html'
        })
        .catch((err)=>{
            console.log(err)
        })
}})

let btnEliminar = document.getElementById("btnDelete")

btnEliminar.addEventListener("click", ()=>{
    let respuesta = confirm('Esta seguro que desea eliminar el post?')
    if(respuesta == false){
        window.location.pathname = 'index.html' 
    } else{
        fetch(`https://devto-8117c-default-rtdb.firebaseio.com/posts/${url}.json`,{
            method: 'DELETE'
        })
        .then((response) =>{
            if (!response.ok){
                let err = new Error(
                    `Algo salio mal ${err}`
                ) 
                throw err
            } else {
                return response.json()
            }
        }).then((response) =>{
            console.log(response)
            window.location.pathname = 'index.html' 

        }).catch((err) => {
            console.log(err)
        })
    }})