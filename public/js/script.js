document.addEventListener('DOMContentLoaded', function(){
    let gameButton = document.getElementById('gameButton');
    let diceTab = [];
    gameButton.addEventListener('click', function(){
        console.log('coucou')
        
        for(let i = 0 ; i < 5; i++){

            diceTab[i]= (Math.floor(Math.random()*10 + 1))
        }
        console.log(diceTab)
    });
    return diceTab
})


