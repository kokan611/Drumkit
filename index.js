// Button Events.......


var i;
for(i=0;i<document.querySelectorAll("button").length;i++)
{document.querySelectorAll("button")[i].addEventListener("click",drum);
function drum(){
  sound(this.innerHTML);
}
}


//Keyboard Events.........


document.addEventListener("keydown",drumkit);
function drumkit(event)
{
  sound(event.key);
}


//Play Sound
function sound(key)
{var audio;
switch(key)
{
  case "w":    audio   = new Audio("sounds/tom-1.mp3");
                   audio.play();
                   break;
  case "a":    audio   = new Audio("sounds/tom-2.mp3");
                   audio.play();
                   break;
  case "s":    audio   = new Audio("sounds/tom-3.mp3");
                          audio.play();
                           break;
 case "d":    audio   = new Audio("sounds/tom-4.mp3");
                             audio.play();
                            break;
 case "j":    audio   = new Audio("sounds/snare.mp3");
                             audio.play();
                             break;
 case "k":    audio   = new Audio("sounds/crash.mp3");
                             audio.play();
                             break;
 case "l":    audio   = new Audio("sounds/kick2.mp3");
                       audio.play();
                        break ;
  default: console.log(innerHTML);
}
}
