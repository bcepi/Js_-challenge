

//http://127.0.0.1:5501/post.html?reponsepost=-N4oTPZlExYsU685Czlk

let url= window.location.search.substring(13)
console.log(url)



fetch (`https://devto-8117c-default-rtdb.firebaseio.com/posts/${url}.json`)
.then((response) => {
    if(!response.ok){
        console.log(response)
        throw new Error(
            'Ups!'
        )
    } else {
        return response.json()
    }
})
.then((response) => {
    console.log(response.title)
    let templateCreateBtn=""
    templateCreateBtn += `
        <a href="#" class="container__log d-none d-lg-block  cont-link m-3">Log in</a>
        <a class="d-lg-none me-2 " href="#"><i><img src="images/magnifying-icon.svg"
        alt=""></i></a>
        <a class="btn container__btn" href=update.html?response${url}>Create Post</a>
    `
    document.querySelector('#createBtn').innerHTML = templateCreateBtn

    let template=""

    let {photo, userName, title, tag, content, pph, date, readTime}=  response
    // BereNote: Se extrajo el codigo del documento post.html linea 162
    
    template += `
            <div class="col-12 d-lg-none">
                <img class="top-img" src="${photo}" alt="">
            </div>

            <div class="d-none d-lg-flex col-lg-12">
                <img class="top-img-desk" src="${photo}" alt="">
            </div>
                
            <!--wrapper del resto del doc-->
            <div class="wrapper">

            <!--detalles del post-->
            <div class="post-details">
                <div class="row">
                
                    <!--1ra columna ocupada solo para la info-->
                    <div class="col-lg-1"></div>
                    <div class="col-1 col-lg-1">
                        <img class="post-details__user-img" src="${pph}" alt="">
                    </div>
            
                    <div class="col-10 col-lg-5">
                        <a class="post-details__user-name" href="#"> ${userName}</a>
                        <p class="post-details__post-info"><small> posted on <time>${date}</time> • Originally published at
                            <a href="#">prplcode.dev</a></small></p>
                    </div>
                </div>
            </div>
        
            <!--***POST BODY***-->
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-12 col-lg-10">
                    <!--caja de titulo-->
                    <div class="tittle-box">
                        <h1 class="tittle-box__tittle"> ${title} </h1>
                        <div class="tittle-box__tags">
                            <a class="tittle-box__tags__related1" href="#">${tag}</a>
                        </div>
                    </div>

                    <!--contenedor de texto del post-->
                    <div class="text-container">
                        <p>${content}</p>
                        <p>Originally published at <a href="#">https://prplcode.dev</a></p>
                    </div>

                    <!--titulo caja de comentarios-->
                    <div>
                        <div class="comment">
                            <h2 class="comment__discussion">Discussion (7)</h2>
                            <button class="comment__subscribe-btn">Subscribe</button>
                        </div>
                    </div>

                    
                    <!--READ NEXT BOX-->
                </div>
            </div>

            <div class="read-next">
                        <div class="row">
                            <div class="col-lg-1"></div>
                            <div class="col-12 col-lg-11">
                                <h2 class="read-next-tittle">Read Next</h2>
                            </div>
                            <!--1ra columna ocupada solo para la info-->
                            <div class="col-lg-1"></div>
                            <div class="col-2 col-lg-1 read-next">
                                <img class="read-next__user-img" src="images/user-tina.webp" alt="">
                            </div>
                            <div class="col-10 col-lg-10">
                                <a class="read-next__user-name" href="#">What is the ONE language/framework you refuse
                                    touse? But...WHY???
                                    <p class="read-next__post-info">Tina Huynh - 30 abr</p>
                                </a>
                            </div>

                            <div class="col-lg-1"></div>
                            <div class="col-2 col-lg-1">
                                <img class="read-next__user-img" src="images/user-elsa.webp" alt="">
                            </div>
                            <div class="col-10 col-lg-10">
                                <a class="read-next__user-name" href="#">Is time travel possible?
                                    <p class="read-next__post-info">Elsa - 17 abr</p>
                                </a>
                            </div>

                            <div class="col-lg-1"></div>
                            <div class="col-2 col-lg-1">
                                <img class="read-next__user-img" src="images/user-efraim.webp" alt="">
                            </div>
                            <div class="col-10 col-lg-10">
                                <a class="read-next__user-name" href="#">Do you Prototype before coding?
                                    <p class="read-next__post-info">Efraim - 27 abr</p>
                                </a>
                            </div>

                            <div class="col-lg-1"></div>
                            <div class="col-2 col-lg-1">
                                <img class="read-next__user-img" src="images/user-michael.webp" alt="">
                            </div>
                            <div class="col-10 col-lg-10">
                                <a class="read-next__user-name" href="#">Programming with python 2
                                    <p class="read-next__post-info"><small> E.Michael - 30 abr</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div> 


            `
    
    document.querySelector('#postBody').innerHTML = template

    let templateRigthCol=""
    templateRigthCol+= `
    
        <!-- columna derecha  -->

        <!--card mobile-->
            <div class="d-lg-none card p-3 col-lg-12">
                <div class="card card-user">
                    <div class="row">
                        <div class="col-2">
                        <img class="card-user__img" src="${pph}" alt="imagen">
                        </div>
                        <div class="col-10 d-flex align-items-center">
                        <h3>${userName}</h3>
                        </div>
                    </div>
                    
                    <div class="row p-3">
                        <button type="button" class="btnM">Follow</button>
                    </div>
                    
                    <div class="row p-1">
                        <div class="col-12">
                            I know languages like Python, Bash, and JavaScript, and also libraries for JavaScript like anime.js, Chartist.js, Puppeteer, and framework like Electron.js
                        </div>
                    </div>

                    <div class="row p-1">
                        <div class="col-7 ptext">LOCATION</div>
                        <div class="col-6">Ukraine, Kyiv</div>
                    </div>
                    <div class="row p-1">
                        <div class="col-7 ptext">EDUCATION</div>
                        <div class="6">Python developer in UJCA</div>
                    </div>
                    <div class="row p-1">
                        <div class="col-7 ptext">WORK</div>
                        <div class="6">Owner of Dazy Software</div>
                    </div>
                    <div class="row p-1">
                        <div class="col-7 ptext">JOINED</div>
                        <div class="6">26 dic 2019</div>
                    </div>
                </div>
            </div>

        <!--desktop-->
            <div class=" d-lg-flex card p-3 col-lg-9 carda">
                <div>
                    <div class="row">
                        <div class="col-2">
                            <img class="post-details__user-img" src=${pph} alt="imagen"
                                height="40px" width="40px">
                        </div>
                        <div class="col-10">
                            <h3>${userName}</h3>
                        </div>
                    </div>

                    <div class="row p-2 m-auto">
                        <button type="button" class="btnN btn-primary">Follow</button>
                    </div>
                    
                    <div class="row p-1">
                        <div class="col-12">I know languages like Python, Bash, and JavaScript, and also libraries for JavaScript like anime.js, Chartist.js, Puppeteer, and framework like Electron.js
                    </div>
                </div>
            
                <div>
                    <div class="row p-1">
                        <div class="col-7 ptext">LOCATION</div>
                        <div class="col-6">Ukraine, Kyiv</div>
                    </div>
            
                    <div class="row p-1">
                        <div class="col-7 ptext">EDUCATION</div>
                        <div class="6">Python developer in UJCA</div>
                    </div>
                    <div class="row p-1">
                        <div class="col-7 ptext">WORK</div>
                        <div class="6">Owner of Dazy Software</div>
                    </div>
                    
                    <div class="row p-1">
                        <div class="col-7 ptext">JOINED</div>
                        <div class="6">26 dic 2018</div>
                    </div>
                </div>
            </div>

        <!--more of mobile-->
            <div class="d-lg-none card p-3 col-lg-12">
                <div class="row">
                    <h2>More from <span class="word">${userName}</span></h2>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">What do your friends and family think software development is like?</span>
                    <span class="down pb-2">#discuss #watercode</span>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">Describe the worst job interview you've ever taken part in</span>
                    <span class="down pb-2">#career</span>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">What do you wish you had time to learn</span>
                    <span class="down pb-2">#discuss #career #watercooler</span>
                </div>
            </div>

        <!--more of desktop-->

            <div class="d-none d-lg-flex card p-3 col-lg-9 more-of">

                <div class="row">
                    <h2>More from <span class="word">${userName}</span></h2>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">What do your friends and family think software development is
                        like?</span>
                    <span class="down pb-2">#discuss #watercode</span>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">Describe the worst job interview you´ve ever taken part in</span>
                    <span class="down pb-2">#career</span>
                </div>
                <div class="row fila">
                    <span class="up pt-3 pb-1">What do you wish you had time to learn</span>
                    <span class="down pb-2">#discuss #career #watercooler</span>
                </div>
            </div>
    `

    document.querySelector('#rigthCol').innerHTML = templateRigthCol

}).catch((err)=> {
    console.log(err)})