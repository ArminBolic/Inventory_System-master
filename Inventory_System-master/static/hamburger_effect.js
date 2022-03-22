let menu = document.getElementById('menu');
let active = true;
let nulla = 'dada'
let full = 'edib'
menu.addEventListener('click',() =>
{
    
    if (active === true){
    document.getElementsByClassName('hero-section')[0].style = "grid-template-columns:0% 100%";
     
    document.getElementById('side_bar').style.visibility = 'hidden';
    
    active = false
    }
    
    else {
        
        document.getElementsByClassName('hero-section')[0].style = "grid-template-columns:21% 76%";
        document.getElementById('side_bar').style.visibility = 'visible';
        active = true
        
    };
    
});