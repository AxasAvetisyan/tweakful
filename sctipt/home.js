import { getDate } from "./function.js";

// Headline
const headContent = document.querySelector(".headline_1 .inner .content");

getDate("GET", "http://localhost:3000/headLine_1", (date) => {
    for (const item of date) {
        headContent.innerHTML += `
            <h1>
                 ${item.heading}
            </h1>
            <p class="dec_1">
                 ${item.paragraph}
            </p>

            <div class="btn-text">
                <a href="#" class="btn">${item.btn}</a>
                <p class="dec_2">${item.paragraph2}</p>
            </div>
            <div class="imgs">
                ${item.img1}
                ${item.img2}
                ${item.img3}
            </div>
        `
    }
});

const img_girl = document.querySelector(".headline_1 .inner .img-girl");

getDate("GET", "http://localhost:3000/img_girl", (date)=>{
    for (const item of date) {
        img_girl.innerHTML = item.img
    }

});

// Benefit

const benefit_blocks = document.querySelector(".benefit .inner .blocks");

getDate("GET", "http://localhost:3000/benfit_block", (date)=>{
    for (const item of date) {
        benefit_blocks.innerHTML +=`
            
        <div class="block">

            <div class="logo-icon">
                 ${item.icon}
            </div>

            <div class="logo-dec">
                 <p>${item.heading}</p>
                 <p>${item.paragraph}</p>
             </div>

        </div>
        `
    }
});

const benefit_headL_dec = document.querySelector(".benefit .inner .headL-dec");

getDate("GET", "http://localhost:3000/benefit_headL-dec", (date)=>{

    for (const item of date) {
        
        
        benefit_headL_dec.innerHTML += `
        
        <h2>
        ${item.heading}
        </h2>
        
        <p>
        ${item.paragraph}
        </p>
        
        <button class="btn">${item.btn}</button>
        ` 
    }
})

const working_works = document.querySelector(".working .inner .block");

getDate("GET", "http://localhost:3000/working_works", (date)=>{
    for (const item of date) {
        working_works.innerHTML += `
            <div class="works">
                    <div class="icon">
                        ${item.icon}
                    </div>
                <div class="work_text">
                        <p>${item.heading}</p>
                        <p>${item.paragraph}</p>
                </div>
            </div>
        ` 
    }
});

const story_text = document.querySelector(".story .inner .story-text");

getDate("GET", "http://localhost:3000/story_home", (date)=>{
    for (const item of date) {
        story_text.innerHTML += `

            <h3>${item.heading}</h3>
            <p>
                ${item.paragraph}
            </p>

            ${item.img}

            <div class="story-btn">
                <a href="#">${item.btn_a}</a>
            </div>

            <div class="dots">
                <span>.</span><span>.</span><span>.</span>
            </div>
        `
    }
})

const story_img = document.querySelector(".story .inner .story-img");

getDate("GET", "http://localhost:3000/story_img", (date)=>{
    story_img.innerHTML = date.img
})


const proceess = document.querySelector(".process .inner .blocks");

getDate("GET", "http://localhost:3000/process", (date)=>{
    for (const item of date) {
        proceess.innerHTML += `
            <div class="dashet">

                <div class="cir-das">
                    <div class="circle"></div>
                    <div class="dash"></div>
                </div>

                <div class="dashet-text">

                    <p>${item.heading}</p>
                    <p>${item.paragraph}</p>

                </div>

            </div>
        `
    }
})