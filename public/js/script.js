document.addEventListener('DOMContentLoaded', function(){
    let imageDe = document.getElementById('imageDe');
    let diceTab = [];
    imageDe.addEventListener('click', function(){
        console.log('coucou')
        div.classList.add("gameButton");
        for(let i = 0 ; i < 5; i++){

            diceTab[i]= (Math.floor(Math.random()*10 + 1))
        }
        console.log(diceTab)
    });
    return diceTab
})


