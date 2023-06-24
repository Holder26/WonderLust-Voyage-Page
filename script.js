let bgImg = document.querySelector("#myImg")
const decouvrirBtn = document.querySelector(".decouvrir")
const introductionSection = document.querySelector(".introductionSection")

const textAnim = document.querySelector("h1")


const prestaImg = document.querySelectorAll(".imgBox")
const prestaTitre = document.querySelectorAll(".presta h3")
const prestaText = document.querySelectorAll(".presta p")
const prestaBtn = document.querySelectorAll(".button")
const introText =document.querySelector(".introText p")




let imageArray = ["media/img1.jpg", "media/img2.jpg", "media/img3.jpg"]
let imageIndex = 0

function changeBg (){
    bgImg.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length){
        imageIndex=0
    }
}

setInterval(changeBg, 5000)



new Typewriter(textAnim,{
    deleteSpeed: 10
})
.typeString(`Venez explorer`)
.pauseFor(300)
.typeString(` <span style= "color :yellow"> LE MONDE.</span`)
.pauseFor(400)
.deleteChars(9)
.typeString(` <span style= "color :yellow"> L'INFINI.</span`)
.pauseFor(500)
.deleteChars(9)
.typeString(` <span style= "color :yellow"> VOS RÊVES.</span`)


.start()

decouvrirBtn.addEventListener('click', slideDown)
function slideDown(){
    window.scrollTo({
        top: introductionSection.offsetTop,
        behavior: "smooth"
    })
    
}

const observer = new IntersectionObserver(handle,{rootMargin: "-5%"})

prestaImg.forEach(item => observer.observe(item))
prestaTitre.forEach(item => observer.observe(item))
prestaText.forEach(item => observer.observe(item))
prestaBtn.forEach(item => observer.observe(item))
introText.forEach(item => observer.observe(item))

function handle(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")}
        
    });
}
