let speech=new SpeechSynthesisUtterance();

document.querySelector(".btn").addEventListener("click",()=>{
     speech.text=document.querySelector("#txt").value;
     window.speechSynthesis.speak(speech);
})