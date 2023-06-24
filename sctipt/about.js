import { getDate } from "./function.js";

const about = document.querySelector(".option > .container > .headLine");
getDate("GET", "  http://localhost:3000/headLine", (data) => {
    for (let item of data) {
        about.innerHTML +=
            `
                <h1>${item.headLineMainPar}</h1>
                <p class="headLine_par">${item.headLinePar}</p>
                <div class="headLine_wumen"> 
                    <div class="headLine_wumen_img">${item.headLine_wumen_img}</div>
                    <div class="headLine_wumen_desc">
                        <p class="headLine_wumen_name">${item.headLine_wumen_name}</p>
                        <p class="headLine_wumen_profy">${item.headLine_wumen_profy}</p>
                    </div>
                </div>
                <div class="headLine_but"> 
                    ${item.headLinebtn1}
                </div>
            `
    }
});

const cleant =  document.querySelector(".option > .container > .cleant > .cleant_block");
getDate("GET", "  http://localhost:3000/cleant", (data) => {
    for (let item of data) {
        cleant.innerHTML +=
            `
            <div class="cleant_block_min">
                ${item.cleant_block_min_img}
                <p class="cleant_block_min_desc">${item.cleant_block_min_desc}</p>
                <p class="cleant_block_min_par">${item.cleant_block_min_par}</p>
                <a href="@">${item.cleant_block_min_link}</a>
            </div>
            
            
            `
    }
});


const work =  document.querySelector(".working > .container > .working_bolck");
getDate("GET", "http://localhost:3000/work__", (data) => {
    for (let item of data) {
        work.innerHTML +=
            `
                <div class="work_block">
                    <div class="work_block_img">
                        ${item.work_block_img}
                    </div>
                    <div class="working_desc">
                        <p class="work_dec">${item.work_dec}</p>
                        <p class="work_par">${item.work_par}</p>
                    </div>
                </div>
                
            
            `
    }
});

const story = document.querySelector(".story > .container > .inner > .story_content");
getDate("GET", "http://localhost:3000/story__", (data) => {
    for (let item of data) {
        story.innerHTML +=
            `
                ${item.story_img}
                <div class="story_main">
                        <p class="story_par">${item.story_par}</p>
                        ${item.story_logo}
                        <p class="story_desc">${item.story_desc}</p>
                        <p class="stor_prof">${item.stor_prof}</p>
                </div>
                    
            `
    }
});


const sponsor = document.querySelector(".sponsor > .container > .inner");
getDate("GET", "http://localhost:3000/sponsor", (data) => {
    for (let item of data) {
        sponsor.innerHTML +=
            `
                <div class="sponser_desc">
                    <p class="sponsor_user">${item.sponsor_user}</p>                    
                    <p class="sponsor_desc">${item.sponsor_desc}</p>  
                </div>    
                <div class="sponsor_icon">
                    ${item.img1}
                    ${item.img2}
                    ${item.img3}
                    ${item.img4}
                    ${item.img5}
                    ${item.img6}
                    ${item.img7}
                    ${item.img8}
                </div>
            `
    }
});


const team = document.querySelector(".team > .container > .inner > .team_blok");
getDate("GET", "http://localhost:3000/team", (data) => {
    for (let item of data) {
        team.innerHTML +=
            `
                <div class="team_bloks">
                    ${item.team_block_img}
                    <p class="team_block_dec">${item.team_block_dec}</p>
                    <p class="team_block_par_imp">${item.team_block_par_imp}</p>
                    <div class="team_block_icon">
                        ${item.icon1}
                        ${item.icon2}
                        ${item.icon3}
                    </div>
                </div>
            `
    }
});