import { getDate } from "./function.js";

const library = document.querySelector('.library > .container > .inner');
getDate("GET", "http://localhost:3000/library", (data) => {
    for (const item of data) {
        library.innerHTML += `
        <h1>${item.heading}</h1>
        <p>${item.paragraph}</p>
        <div class="imgtext">
            ${item.img}
            <div class="h4span">
                <h4>${item.par1}</h4>
                <span>${item.par2}</span>
            </div>
        </div>
          `
    }
});

const matters = document.querySelector('.matters > .container > .inner > .content')
getDate("GET", "http://localhost:3000/matters", (data) => {
    for (const item of data) {
        matters.innerHTML += `
        <div class="block">
           <span>${item.count}</span>
           <h5>${item.text}</h5>
    </div>
    </div>
         `
    }
});

const lending = document.querySelector('.lending > .container > .inner');
getDate('GET', "http://localhost:3000/lending", (data) => {
    for (const item of data) {
        lending.innerHTML += `
        <div class="image">
        ${item.image}
    </div>
    <div class="content">
        <h3>${item.heading}</h3>
        <p>${item.text}</p>
        <div class="icons">
            <a href=""><i class="fa-regular fa-circle-play"></i></a>
            <span>Play Tutorial</span>
        </div>
    </div>
        `
    }
});

const features = document.querySelector('.features > .container > .inner > .content');
getDate('GET', "http://localhost:3000/features", (data) => {
    for (const item of data) {
        features.innerHTML += `
          <div class="block">
            <div class="icon">${item.icon}</div>
            <h4>${item.heading}</h4>
            <p>${item.text}</p>
         </div>
            `
    }
});

const featuresimg = document.querySelector('.features > .container > .inner');
getDate('GET', '  http://localhost:3000/featuresimg', (data) => {
    for (const item of data) {
        featuresimg.innerHTML += `
           <div class="image">
                 ${item.img}
           </div>
               `
    }
});

const strategy = document.querySelector('.strategy > .container > .inner > .content' );
getDate('GET', ' http://localhost:3000/strategy', (data) => {
    for (const item of data) {
        strategy.innerHTML +=
            `
            <h4>${item.heading}</h4>
            <div class="icons">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
         </div>

            `
    }
});


const teamblock = document.querySelector(".strategy > .container > .inner > .teamblock");
getDate("GET", "http://localhost:3000/teamblock", (data) => {
        for (let item of data) {
            teamblock.innerHTML += `
            <div class="block">
                ${item.img}
                <h4>${item.heading}</h4>
                <p>${item.text}</p>
            </div>
                 `
        }
    })


const story = document.querySelector('.story > .container > .inner > .content');
getDate("GET", "http://localhost:3000/story", (data, data2) => {
    for (const item of data) {
        story.innerHTML += `
        <h4>${item.heading}</h4>
        <p>${item.text}</p>
        <img src="images/Logitech.png" alt="Logitech">
        <div class="social">
            <a href="#">Read Complete Case Study <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="dot">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
        `
    }
});

const storyimg = document.querySelector(".story > .container > .inner");
getDate("GET", " http://localhost:3000/storyimg", (data) => {
    for (const item of data) {
        storyimg.innerHTML += `
        <div class="images"> ${item.image}</div>
        `
    }
});

const work = document.querySelector(".work > .container > .inner > .content");
getDate("GET", " http://localhost:3000/work", (data) => {
    for (const item of data) {
        work.innerHTML += `
        <div class="block">
            <div class="image">  ${item.img}</div>
            <p class="heading">${item.heading}</p>
            <p class="text">${item.text}</p>
        </div>
            `
    }
})


