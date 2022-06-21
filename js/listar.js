

fetch("https://devto-8117c-default-rtdb.firebaseio.com/posts.json")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((response) => {
    console.log(response)
    
    let template=""
    let contador = 1

    for(post in response){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response[post]
        
        if (contador > 1){
            
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
                        <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
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
                            <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                    
                document.querySelector(".centro").innerHTML =template
            }
            contador++
            console.log(contador)
        }
        
})
.catch((err)=> {
    console.log(err)
})

let btnAll = document.querySelector('#allPosts')

let btnJS = document.querySelector('#jsPosts')

let btnHtml = document.querySelector('#htmlPosts')

btnAll.addEventListener("click", () => {
    fetch("https://devto-8117c-default-rtdb.firebaseio.com/posts.json")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((response) => {
    console.log(response)
    
    let template=""
    let contador = 1

    for(post in response){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response[post]
        
        if (contador > 1){
            
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
                        <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
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
                            <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                    
                document.querySelector(".centro").innerHTML =template
            }
            contador++
            console.log(contador)
        }
        
})
.catch((err)=> {
    console.log(err)
})
})

btnJS.addEventListener("click", () => {
    fetch("https://devto-8117c-default-rtdb.firebaseio.com/posts.json")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((response) => {
    console.log(response)
    
    let template=""
    let contador = 1

    for(post in response){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response[post]
        
        if (contador > 1){
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
                        <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
                                <a class="btn btn__saveC ">Save</a>
                        </div>
                        
                    </div>
                </div>
                `
            }
            document.querySelector(".centro").innerHTML =template
            } else {
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
                            <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                }
                document.querySelector(".centro").innerHTML =template
            }
            contador++
            console.log(contador)
        }
        
})
.catch((err)=> {
    console.log(err)
})
})

btnHtml.addEventListener("click", () => {
    fetch("https://devto-8117c-default-rtdb.firebaseio.com/posts.json")
.then((response) => {
    console.log(response)
    return response.json()
})
.then((response) => {
    console.log(response)
    
    let template=""
    let contador = 1

    for(post in response){
        let {photo, userName, title, tag, content, pph, date, readTime }=  response[post]
        
        if (contador > 1){
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
                        <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                            ${title}
                        </a>
                    </div>
                    <div class="row ps-5">
                        <button class="btn__discussC">#${tag}</button>
                    </div>
                    <div class="row">
                        <div class="col-7">
                            <div class="row mt-3 ms-3 mb-5">
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                            </div>
                        </div>   
                        <div class="col-5 d-flex justify-content-center mt-3">
                                <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
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
                            <a class="title_articleC aC" href="post.html?reponsepost=${post}">
                                ${title}
                            </a>
                        </div>
                        <div class="row ps-5">
                            <button class="btn__discussC">#${tag}</button>
                        </div>
                        <div class="row">
                            <div class="col-7">
                                <div class="row mt-3 ms-3 mb-5">
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-30.svg">6 reactions</img></a>
                                    <a href="#" class="btn btn__actionsC"><img src="images/svgexport-29.svg">6 comments</img></a>
                                </div>
                            </div>   
                            <div class="col-5 d-flex justify-content-center mt-3">
                                    <p class="time__readC me-1 pe-0 mt-2">${readTime}min read</p>
                                    <a class="btn btn__saveC ">Save</a>
                            </div>
                            
                        </div>
                    </div>
                    `
                }
                document.querySelector(".centro").innerHTML =template
            }
            contador++
            console.log(contador)
        }
        
})
.catch((err)=> {
    console.log(err)
})
})












