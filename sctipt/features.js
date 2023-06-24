import { getDate } from "./function.js"

const about = document.querySelector(".about > .container .inner > .content");

getDate("GET", " http://localhost:3000/about", (data) => {
    for (let item of data) {
        about.innerHTML +=
            `
        <h1>${item.heading}</h1>
        <p>${item.paragraph1}</p>
        <div class="button">
            <a href="#" class="btn">book a meeting <i class="fa-solid fa-arrow-right"></i></a>
            <p>${item.paragraph2}</p>
        </div>
        <div class="images">
            ${item.img1}
            ${item.img2}
            ${item.img3}
        </div>
        
        `
    }
})

const images = document.querySelector(".about > .container > .inner")

getDate("GET", "  http://localhost:3000/images", (data) => {
    for (let item of data) {
        images.innerHTML +=
            `
    <div class="img">
        ${item.img}
    </div>

    `
    }

})

const headline = document.querySelector(".hedline > .container > .inner > .content")

getDate("GET", "http://localhost:3000/headline__", (data) => {
    for (const item of data) {
        headline.innerHTML +=
            `
        <p>${item.paragraph1}</p>
        <div class="big-div">
            <div class="big">
                <h3>${item.heading1}</h3>
                <p>${item.paragraph2}</p>
            </div>
            <div class="big">
                <h3>${item.heading2}</h3>
                <p>${item.paragraph2}</p>
            </div>
        </div>
        `
    }
})

const video = document.querySelector(".hedline > .container > .inner");

getDate("GET", " http://localhost:3000/headlineImages", (data) => {
    for (let item of data) {
        video.innerHTML +=
            `
        <div class="video">
        ${item.video}
        </div>
        `
    }
})

const platform = document.querySelector(".platform > .container > .inner > .content > .big");

getDate("GET", " http://localhost:3000/platform", (data) => {
    for (let item of data) {
        platform.innerHTML +=
            `
            <div class="min">
                ${item.icon}
                <h3>${item.heading}</h3>
                <p>${item.paragraph}</p>
            </div>

        `
    }
})

const story = document.querySelectorAll(".story > .container > .inner")

getDate("GET", " http://localhost:3000/story_features", (data) => {
    for (let item of data) {
        story[0].innerHTML +=
            `
        <div class="content">
        <h2>${item.heading}</h2>
        <p class="paragraph">${item.paragraph}</p>
        <img src="./images/Logitech.png" alt="Logitech">
        <a href="#"><p>Read Complete Case Study <i class="fa-solid fa-arrow-right"></i></p></a>
        <p><span>.</span>..</p>
    </div>
        `
    }
})

getDate("GET", "http://localhost:3000/storyimg__", (data) => {
    for (let item of data) {
        story[0].innerHTML +=
            `
        <div class="img">
        ${item.img}
        </div>
        `
    }
})

// getDate("GET", "http://localhost:3000/story2", (data) => {
//     for (let item of data) {
//         story[1].innerHTML +=
//             `
//         <div class="content">
//         <h2>${item.heading}</h2>
//         <p class="paragraph">${item.paragraph}</p>
//         <img src="./images/Logitech.png" alt="Logitech">
//         <a href="#"><p>Read Complete Case Study <i class="fa-solid fa-arrow-right"></i></p></a>
//         <p><span>.</span>..</p>
//     </div>
//         `
//     }
// })

// getDate("GET", "http://localhost:3000/story3", (data) => {
//     for (let item of data) {
//         story[2].innerHTML +=
//             `
//         <div class="content">
//         <h2>${item.heading}</h2>
//         <p class="paragraph">${item.paragraph}</p>
//         <img src="./images/Logitech.png" alt="Logitech">
//         <a href="#"><p>Read Complete Case Study <i class="fa-solid fa-arrow-right"></i></p></a>
//         <p><span>.</span>..</p>
//     </div>
//         `
//     }
// })

// getDate("GET", "http://localhost:3000/storyimg", (data) => {
//     for (let item of data) {
//         story[2].innerHTML +=
//             `
//         <div class="img">
//         ${item.img1}
//         </div>
//         `
//     }
// })

const busines = document.querySelector(".busines > .container > .inner > .content > .parent")

getDate("GET", "http://localhost:3000/businesdiv", (data) => {
    for (let item of data) {
        busines.innerHTML += `

        <div class="child">
        ${item.img}
        <h3>${item.heading1}</h3>
        <p>${item.paragraph}</p>
        </div>
        `

    }
})


// const slayder = document.querySelectorAll(".story > .container > .inner");


//     setInterval(()=>{
//         slayder[0].addEventListener("click", ()=>{
//             slayder[0].style.display = "none";
//             slayder[1].style.display = "block"
//         })
//     }, 5000)

