

fetch("http://localhost:8080/post/")
.then((response) => {
    return response.json()
})
.then((response) => {
    
    let template=""
    let contador = 0

    for(post in response.data.posts){
        let {photo, userName, title, tag, content, pph, date, readTime, _id }=  response.data.posts[post]


        // console.log( response.data.posts);

        contador++
        if (contador == Object.keys(response.data.posts).length){
            
                template += `
                <div class="card cardC mb-2">
                    <div class="row">
                        <img src="${photo}" alt="">
                    </div>
                    <div class="row">
                        <div class="col-1 ms-3 mt-4">
                            <img class="pph" src="${pph}" alt="" />
                        </div>
                        <div class="col-10 my-4 ms-2">
                            <div class="row">
                                <p class="col-12 title__nameC">${userName}</p>
                            </div>
                            <div class="row">
                                <p class="col-11 title__timeC">${date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row px-5">
                        <a class="title_articleC aC" href="post.html?url=${_id}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="buttonC btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                <a class="btn btn__saveC ">Save</a>
                        </div>
                        
                    </div>
                </div>
                ` 
            document.querySelector(".centro").innerHTML = template
            
            } else {
                    template += `
                    <div class="card cardC mb-2">
                        <div class="row">
                            <div class="col-1 ms-3 mt-4">
                                <img class="pph" src="${pph}" alt="">
                            </div>
                            <div class="col-10 my-4 ms-2">
                                <div class="row">
                                    <p class="col-12 title__nameC">${userName}</p>
                                </div>
                                <div class="row">
                                    <p class="col-11 title__timeC">${date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row px-5">
                            <a class="title_articleC aC" href="post.html?url=${_id}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="buttonC btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
               
                document.querySelector(".centro").innerHTML =template
            }
        }   
})
.catch((err)=> {
    console.log(err, "hubo un error al ir al inicio")
})


let btnAll = document.querySelector('#allPosts')
let btnJS = document.querySelector('#jsPosts')
let btnHtml = document.querySelector('#htmlPosts')



btnAll.addEventListener("click", () => {
    fetch("http://localhost:8080/post/")
.then((response) => {
    return response.json()
})
.then((response) => {
    
    let template=""
    let contador = 0

    for(post in response.data.posts){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response.data.posts[post]
        
        contador++
        if (contador == Object.keys(response.data.posts).length){
            console.log('entro al if')
                template += `
                <div class="card cardC mb-2">
                    <div class="row">
                        <img src="${photo}" alt="">
                    </div>
                    <div class="row">
                        <div class="col-1 ms-3 mt-4">
                            <img class="pph" src="${pph}" alt="" />
                        </div>
                        <div class="col-10 my-4 ms-2">
                            <div class="row">
                                <p class="col-12 title__nameC">${userName}</p>
                            </div>
                            <div class="row">
                                <p class="col-11 title__timeC">${date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row px-5">
                        <a class="title_articleC aC" href="post.html?url=${_id}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="buttonC btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                <a class="btn btn__saveC ">Save</a>
                        </div>
                        
                    </div>
                </div>
                `

            document.querySelector(".centro").innerHTML =template
            
            } else {
                    template += `
                    <div class="card cardC mb-2">

                        <div class="row">
                            <div class="col-1 ms-3 mt-4">
                                <img class="pph" src="${pph}" alt="" />
                            </div>
                            <div class="col-10 my-4 ms-2">
                                <div class="row">
                                    <p class="col-12 title__nameC">${userName}</p>
                                </div>
                                <div class="row">
                                    <p class="col-11 title__timeC">${date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row px-5">
                            <a class="title_articleC aC" href="post.html?url=${_id}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="buttonC btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                    
                document.querySelector(".centro").innerHTML =template
            }
        }
})
.catch((err)=> {
    console.log(err)
})
})

btnJS.addEventListener("click", () => {
    fetch("http://localhost:8080/post/")
.then((response) => {
    // console.log(response)
    return response.json()
})
.then((response) => {
     console.log(response)
    
    let template=""
    let bandera= ''
    

    for(post in response.data.posts){
        let {tag, title}=  response.data.posts[post]

        console.log(title)

        if (tag.toLowerCase() === "javascript"){
            bandera = response.data.posts[post][title]
        } 
    }

    for(post in response.data.posts){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response.data.posts[post]

        if (bandera === title){
            console.log('entre')
            if(tag.toLowerCase() === "javascript"){
                template += `
                <div class="card cardC mb-2">
                    <div class="row">
                        <img src="${photo}" alt="" />
                    </div>
                    <div class="row">
                        <div class="col-1 ms-3 mt-4">
                            <img class="pph" src="${pph}" alt="" />
                        </div>
                        <div class="col-10 my-4 ms-2">
                            <div class="row">
                                <p class="col-12 title__nameC">${userName}</p>
                            </div>
                            <div class="row">
                                <p class="col-11 title__timeC">${date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row px-5">
                        <a class="title_articleC aC" href="post.html?url=${_id}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="buttonC btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                <a class="btn btn__saveC ">Save</a>
                        </div>
                        
                    </div>
                </div>
                `
            }
            document.querySelector(".centro").innerHTML =template
            } 
            else {
                if(tag.toLowerCase() === "javascript"){
                    template += `
                    <div class="card cardC mb-2">

                        <div class="row">
                            <div class="col-1 ms-3 mt-4">
                                <img class="pph" src="${pph}" alt="" />
                            </div>
                            <div class="col-10 my-4 ms-2">
                                <div class="row">
                                    <p class="col-12 title__nameC">${userName}</p>
                                </div>
                                <div class="row">
                                    <p class="col-11 title__timeC">${date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row px-5">
                            <a class="title_articleC aC" href="post.html?url=${_id}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="buttonC btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                }
                document.querySelector(".centro").innerHTML =template
            }
        } 
})
.catch((err)=> {
    console.log(err)
})
})

btnHtml.addEventListener("click", () => {
    fetch("http://localhost:8080/post/")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((response) => {
    console.log(response)
    
    let template=""
    let bandera= ''
    

    for(post in response.data.posts){
        let {tag, title}=  response.data.posts[post]

        console.log(title)

        if (tag.toLowerCase() === "html"){
            bandera = response.data.posts[post][title]
        } 
    }

    for(post in response.data.posts){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response.data.posts[post]

        
        if (bandera === title){
            if(tag.toLowerCase() === "html"){
                template += `
                <div class="card cardC mb-2">
                    <div class="row">
                        <img src="${photo}" alt="" />
                    </div>
                    <div class="row">
                        <div class="col-1 ms-3 mt-4">
                            <img class="pph" src="${pph}" alt="" />
                        </div>
                        <div class="col-10 my-4 ms-2">
                            <div class="row">
                                <p class="col-12 title__nameC">${userName}</p>
                            </div>
                            <div class="row">
                                <p class="col-11 title__timeC">${date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row px-5">
                        <a class="title_articleC aC" href="post.html?url=${_id}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="buttonC btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                <a class="btn btn__saveC ">Save</a>
                        </div>
                        
                    </div>
                </div>
                `
            }
            document.querySelector(".centro").innerHTML =template
            } else {
                if(tag.toLowerCase() === "html"){
                    template += `
                    <div class="card cardC mb-2">
                        <div class="row">
                            <div class="col-1 ms-3 mt-4">
                                <img class="pph" src="${pph}" alt="" />
                            </div>
                            <div class="col-10 my-4 ms-2">
                                <div class="row">
                                    <p class="col-12 title__nameC">${userName}</p>
                                </div>
                                <div class="row">
                                    <p class="col-11 title__timeC">${date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row px-5">
                            <a class="title_articleC aC" href="post.html?url=${_id}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="buttonC btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime} min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                }
                document.querySelector(".centro").innerHTML =template
            }
        }
})
.catch((err)=> {
    console.log(err)
})
})












