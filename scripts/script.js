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




