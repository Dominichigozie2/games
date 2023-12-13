const btnPred = document.querySelector("#pred-btn");
const btnHist = document.querySelector("#hist-btn");
const bodyPred = document.querySelector(".my-bet");
const bodyHist = document.querySelector(".my-history");

btnHist.addEventListener('click', () =>{
    bodyHist.style.width="100%";
    bodyHist.style.height="100%";
    bodyPred.style.width="0px";
    bodyPred.style.height="0px";
    btnHist.classList.add('active');
    btnPred.classList.remove('active');
});

btnPred.addEventListener('click', () =>{
    bodyHist.style.width="0px";
    bodyHist.style.height="0px";
    bodyPred.style.width="100%";
    bodyPred.style.height="100%";
    btnHist.classList.remove('active');
    btnPred.classList.add('active');
});

const searchClicked = document.querySelector(".search-container");

searchClicked.addEventListener('click', () =>{
    const searchbody = document.querySelector(".search");
    const searchclose = document.querySelector(".fa-times");
    searchbody.classList.add("scale");
    searchclose.addEventListener('click', () =>{
        searchbody.classList.remove("scale");
    });
});





const btnlog = document.querySelector(".log");
const btnsign = document.querySelector(".sign");
const bodysign = document.querySelector(".signup");
const bodylog = document.querySelector(".signin");

btnlog.addEventListener('click', ()=>{
    bodysign.style.top="-100%";
    bodylog.style.bottom="0";
    btnlog.classList.add('active');
    btnsign.classList.remove('active');

    btnsign.addEventListener('click', ()=>{
        bodysign.style.top="0";
        bodylog.style.bottom="-100%";
        btnlog.classList.remove('active');
        btnsign.classList.add('active');
    });

});


const logSign = document.querySelectorAll(".buttons a");
const logSignbody = document.querySelector(".login-signup");
logSign.forEach(but =>{

    but.addEventListener('click', ()=>{
        logSignbody.style.display="flex";
    });

    const close = document.querySelector("#fa-times");
    close.addEventListener('click', ()=>{
        logSignbody.style.display="none";
    });
});
