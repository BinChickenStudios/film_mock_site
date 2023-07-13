changingText = document.querySelector('#changing-text');
if(!changingText){
    console.log("changing text element could not be found");
} 
const texts = [
    'Craftsmanship', 'Mastery', 'Precision', 'Cine Manuel'];
    let currentTextIndex = 0;
    
    function changeText() {
        const text = texts[currentTextIndex];
        const words = text.split(" ");
        let modifiedText = "";
        
        for (let i = 0; i < words.length; i++) {
          const firstLetter = words[i].charAt(0);
          const restOfWord = words[i].slice(1);
          const modifiedWord = `<span class="title-highlight">${firstLetter}</span>${restOfWord}`;
          modifiedText += modifiedWord + " ";
        }

        changingText.innerHTML = modifiedText;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    


if(changingText){ 
    changeText();
    changingTextInterval = setInterval(changeText, 6000);
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

