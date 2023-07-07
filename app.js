changingText = document.querySelector('#changing-text');
if(!changingText){
    console.log("changing text element could not be found");
} 
const texts = [
    'Creatives?', 'Enthusiasts?', 'Confidence?', 'Cine Manuel'];
    let currentTextIndex = 0;
    
    function changeText() {
        changingText.textContent = texts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    


if(changingText){ 
    changeText();
    changingTextInterval = setInterval(changeText, 2000);
}


const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    scrollToSection(section.id);
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

