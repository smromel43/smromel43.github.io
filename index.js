var typed = new Typed(".typing", {
    strings: ["Engineer", "E-sports Player", "Web Developer", "Volleyball Player"],
    typeSpeed: 100,
    bsckSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Engineer.", "E-sportss Player.", "Web Developer.", "Volleyball Player.", "Designer."],
    typeSpeed: 100,
    bsckSpeed: 60,
    loop: true
});

function fun() {
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let subject= document.getElementById("subject").value;
    let describe= document.getElementById("describe").value;

  
    alert("Message is sent");
}
