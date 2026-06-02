function imageslideP(filesrc) {
    let image = document.querySelector("#portrait");
    image.setAttribute("src",filesrc);
}
 
function changetxtP(newtxtP) {
 if (newtxtP === 0) {
 document.getElementById("lore").innerText="Ryu was an orphaned child, with no knowledge of who his parents were or if they are still alive. When Ryu was a young child, he was adopted by a man named Gouken and began living with him as well as learning a mysterious martial art. Gouken would later train his best friend's bratty son, Ken Masters, who served not only as a sparring partner for Ryu, but also to give Ryu some company since Gouken was the only person Ryu had seen in a long time due to the seclusion of Gouken's dojo. Ryu looked up to Gouken as a father figure during his early years and Ken as a best friend and surrogate brother, which is how their relationship remains to this day."
 }   
 if (newtxtP === 1) {
 document.getElementById("lore").innerText="When Ken was about 12 years old, his father, a rich hotel tycoon, thought that his son needed to learn about discipline, lest his son become a spoiled brat all of his life and try to leech onto the Masters' family fortune. In order to do so, the elder Masters sent Ken to Japan to train under his best friend, the mysterious karate master Gouken. At first, Ken was very hesitant to learn from Gouken, wanting to go back to the United States, but later began to respect his master. He even enjoyed the company of Gouken's adopted son, Ryu, since he had a foil to finally pull pranks on, although this got Ken into a lot of trouble. Ryu and Ken would later become best friends and each other's principal rivals."               
 }
 if (newtxtP === 2) {
 document.getElementById("lore").innerText="Chun-Li was an Interpol investigator who had been searching for clues to the recent death of her father. During a friendly spar with an old teacher of hers and friend of her father, Gen, she received a clue as to who may have been behind her father's death—the mysterious crime syndicate Shadoloo. Chun-Li tracked down the syndicate's leader, M. Bison, and demanded that he tell her what happened to her father. Bison attacked and defeated her, then flew away laughing, telling her that if she attacked him again he would kill her just like he did her father. With tears in her eyes, Chun-Li swore vengeance."                
 }      
 if (newtxtP === 3) {
 document.getElementById("lore").innerText="Zangief is said to have trained by wrestling polar bears in Siberia, on which he practiced his trademark Screw Piledriver after being picked up by a cyclone while performing a piledriver on a bear. The scars covering his body are said to have been the results of wrestling with bears. "          
 }               
}

function changecharname(newchar) {
 if (newchar === 0) {
 document.getElementById("charname").innerText="Ryu"                
 }   
 if (newchar === 1) {
 document.getElementById("charname").innerText="Ken"               
 }
 if (newchar === 2) {
 document.getElementById("charname").innerText="Chun-Li"                
 }      
 if (newchar === 3) {
 document.getElementById("charname").innerText="Zangief"          
 }         
}

function changetxtmv(newtxtmv) {
    if (newtxtmv === 0) {
        document.getElementById("mv1").innerText="Hadouken"                
        document.getElementById("mv2").innerText="Shoryuuken"                
        document.getElementById("mv3").innerText="Tatsumaki"                
    }
    if (newtxtmv === 1) {
        document.getElementById("mv1").innerText="Hadouken"                
        document.getElementById("mv2").innerText="Shoryuuken"                
        document.getElementById("mv3").innerText="Kama Barai Geri"       
      }
    if (newtxtmv === 2) {
        document.getElementById("mv1").innerText="Kikouken"                
        document.getElementById("mv2").innerText="Spinning Bird Kick"                
        document.getElementById("mv3").innerText="Hyakuretsu Kyaku"                
     }
    if (newtxtmv === 3) {
        document.getElementById("mv1").innerText="Screw Piledriver "                
        document.getElementById("mv2").innerText="Flying Powerbomb "                
        document.getElementById("mv3").innerText="Banishing Flat"       
      }
}


// first half of input
function changelogo1 (row1,row2,row3) {
        let logo1 = document.querySelector("#inp1_1");
    logo1.setAttribute("src",row1);
        let logo2 = document.querySelector("#inp2_1");
    logo2.setAttribute("src",row2);
        let logo3 = document.querySelector("#inp3_1");
    logo3.setAttribute("src",row3);
}

// second half of input
function changelogo2 (row1,row2,row3) {
        let logo1 = document.querySelector("#inp1_2");
    logo1.setAttribute("src",row1);
        let logo2 = document.querySelector("#inp2_2");
    logo2.setAttribute("src",row2);
        let logo3 = document.querySelector("#inp3_2");
    logo3.setAttribute("src",row3);
}

// Array of image sources
const frames = [
    'Ryu/Ryu1.PNG',
    'Ryu/Ryu2.PNG',
    'Ryu/Ryu3.PNG',
    'Ryu/Ryu4.PNG',
    'Ryu/Ryu5.PNG',
    'Ryu/Ryu6.PNG',
    'Ryu/Ryu7.PNG',
];

