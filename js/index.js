let playerPokemon 
let playerNameOficial
let pokemonPlayerName


const btnAhtml = document.querySelector('.ahtml');
const btnAjs = document.querySelector('.Ajs');
const btnAcss = document.querySelector('.Acss');
const btnBack = document.querySelector('.Back');

const colorBtnHtml = btnAhtml.style.backgroundColor;


const enemyName = document.querySelector('.enemyNameBattle');
const gameMsg = document.querySelector('.gameMsg'); 

const enemyLifeLine = document.querySelector('.lifeLineGreenEnemy')
const playerLifeLine = document.querySelector('.lifeLineGreenPlayer')
//document.querySelector(".lifeLineGreenEnemy").style.width = "100px";
let enemyLife = 100;
let playerLife = 100;
//let roundBattle = 1;


let htmlTextOrigin = "Attaquer - HTML";
let jsTextOrigin = "Attaquer - JavaScript";
let cssTextOrigin = "Attaquer - CSS";
let backTextOrigin = "Retour"

let positionTopO
let positionLeftO


//ROUND 1#
let textHTML1Rnd1= "\< h4 class = 'SuperAtack' \> Button \< /h4\>";
let textHTML2Rnd1= "\< button \> Superatack \< /button\>"; //CorrectOption
let textHTML3Rnd1= "\< button \> SuperAtack \< /button\>";  //CorrectOption

let textJS1Rnd1 = "enemyLife == 100";
let textJS2Rnd1 = "playerLife -+ 100";
let textJS3Rnd1 = "playerLife = 100"; //CorrectOption

let textCSS1Rnd1 = "enemyImage { top : 200px}";//CorrectOption
let textCSS2Rnd1 = "enemyImage { width == 0px}"; 
let textCSS3Rnd1 = "enemyImage { left : 300px}"; //CorrectOption

//ROUND 2#
let textHTML1Rnd2= "\< img src = ' images/ Rondoudou.png '\>";//CorrectOption
let textHTML2Rnd2= "\< img src == 'images/ .Carapuce.png '\>";
let textHTML3Rnd2= "\< img src : 'images// Rondoudou.png '\>";

let textJS1Rnd2 = "if(pokemonEnemy == Arcko){enemyLife -= 34}"; //CorrectOption
let textJS2Rnd2 = "if(pokemonEnemy == Carapuce){enemyLife != 34}";
let textJS3Rnd2 = "if(pokemonEnemy == Mewtwo){enemyLife +- 34}";

let textCSS1Rnd2 = "playerImage { visibility : 'hidden'}"; //CorrectOption
let textCSS2Rnd2 = "playerImage { width : 0}"; 
let textCSS3Rnd2 = "playerImage { visibility : \"hidden\"}"; //CorrectOption

//ROUND 3#
let textHTML1= "\< h3 class = 'EnemyName' \> Ditto \< /h3\>"; //CorrectOption
let textHTML2= "\< h3 class == 'EnemyName' \> Ditto \< //h3\>";
let textHTML3= "\< h3 class = 'EnemyName' \> Ditto \< h3\>";

let textJS1 = "playerLife -= 34"; 
let textJS2 = "enemyLife -= 34"; //CorrectOption
let textJS3 = "enemyLife == -34"; 

let textCSS1 = "body { background-color : red}"; //CorrectOption
let textCSS2 = "body { background-color = red}";
let textCSS3 = "body { background-color == red}";

let atackOptions = true;

let atackHTML = false;
let atackCSS = false;
let atackJS = false;


let wastedHTML = false;
let wastedCSS = false;
let wastedJS = false;

const gameplayBattleUI = document.querySelector('.gameplayBattle')
const canvasGet = document.querySelector(".canvasMap")

let playerNameBattleJS = document.querySelector('.playerNameBattle')
const imgPlayerPokemon = document.querySelector('.playerImg')
const imgEnemyPokemon = document.querySelector('.enemyImg')
//const enemyNameBattleJS = document.querySelector('.enemyNameBattle')
//gameMsg.innerHTML = "Que dois faire "+ playerNameBattleJS.innerHTML + " ?";

let isNextRound = false
let isRoundBattleFinish = false



function battleGame(){
    
    //musicOn(1)

    gameplayBattleUI.style.visibility = "visible"
    canvasGet.style.visibility = "hidden" 
    playerNameBattleJS.innerHTML = playerNameOficial


    if (playerPokemon == 1){
        imgPlayerPokemon.src = "./images/Pikachu.png"
        pokemonPlayerName = "Pikachu"
    }
    else if(playerPokemon == 2){
        imgPlayerPokemon.src = "./images//Dracaufeu.png"
        pokemonPlayerName = "Dracaufeu"
    }
    else{
        imgPlayerPokemon.src = "./images/Rondoudou.png"
        pokemonPlayerName = "Rondoudou"
    }

    if (roundBattle == 1) {
        imgEnemyPokemon.src = "./images/Carapuce.png"
        enemyName.innerHTML = "Carapuce";
    }

    if(roundBattle== 3){            imgEnemyPokemon.style.visibility = "Visible"
    }


    
    //gameMsg.innerHTML = "Que dois faire "+ playerNameBattleJS.innerHTML + " ?";
}
function textAtackMoment( optionAtack){
    if (optionAtack == 11){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va créer un bouton Super Attack pour attaquer l'ennemi";

    }
    else if (optionAtack == 12){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va déplacer l'ennemi pour l'attaquer"
    }
    else if(optionAtack == 13){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va s'auto-guérir"

    }
    else if(optionAtack == 21){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va changer l'image de l'ennemi avec une autre pokemon"

    }
    else if (optionAtack == 22){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va utiliser l'invisibilité"

    }
    else if (optionAtack == 23){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va réduire la vie de l'ennemi avec le nom  correct"

    }
    else if (optionAtack == 31){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va changer le nom de l'ennemi en Ditto"

    }
    else if (optionAtack == 32){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " changera la couleur de l'arrière-plan en rouge"

    }
    else if (optionAtack == 33){
        gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va réduire la vie de l'ennemi"

    }
}

btnAhtml.addEventListener('click', function(){
    if(roundBattle == 1){
        if (!wastedHTML && atackOptions){
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va attaquer le code HTML de l'adversaire";
            textAtackMoment(11)
            btnAhtml.innerHTML = textHTML1Rnd1;
            btnAcss.innerHTML = textHTML2Rnd1;
            btnAjs.innerHTML = textHTML3Rnd1;
    
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
    
            atackHTML = true;
            atackOptions = false;
        }
        else if(atackHTML||atackJS){
            playerDmg();
            
        }
        else if (atackCSS){
            positionTopO = imgEnemyPokemon.style.top
            imgEnemyPokemon.style.top = "650px"
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            atackCSS = false;
            wastedCSS = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé la position de l'ennemi. L'ennemi est plus faible";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";
        }
    }
    else if (roundBattle == 2){
        if (!wastedHTML && atackOptions){
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va attaquer le code HTML de l'adversaire";
            textAtackMoment(21)
            btnAhtml.innerHTML = textHTML1Rnd2;
            btnAcss.innerHTML = textHTML2Rnd2;
            btnAjs.innerHTML = textHTML3Rnd2;
    
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
    
            atackHTML = true;
            atackOptions = false;
        }
        else if(!wastedCSS &&atackCSS  ){
                //imgEnemyPokemon.style.visibility = "hidden"
                imgPlayerPokemon.style.visibility = "hidden"
                enemyLife -= 33;
                enemyLifeLine.style.width=enemyLife+"%";
                atackCSS = false;
                wastedCSS = true; NameBattleJS.innerHTML+" est invisible. L'ennemi confus s'est blessé";
                if (wastedCSS && wastedHTML && wastedJS){
                    gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                    //imgPlayerPokemon.style.visibility = "hidden"
                    BtnBackAction();
                }
                btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
                
        }
        else if((!wastedJS &&atackJS)){
            
                enemyLife -= 34;
                enemyLifeLine.style.width=enemyLife+"%";
                atackJS = false;
                wastedJS = true;
                gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a attaque à votre ennemi. L'ennemi est plus faible";
                if (wastedCSS && wastedHTML && wastedJS){
                    gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                    BtnBackAction();
                }
                btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
                //BtnBackAction();
        }
        else if (!wastedHTML &&atackHTML){
            
            imgEnemyPokemon.src = "./images/Rondoudou.png"
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            
            atackHTML = false;
            wastedHTML = true;
        
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé le bouton et effectue une super attaque";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
    
        }
        else{
    
        }

    }
    else if(roundBattle == 3){ 
        if (!wastedHTML && atackOptions){
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML + " va attaquer le code HTML de l'adversaire";
            textAtackMoment(31)
            btnAhtml.innerHTML = textHTML1;
            btnAcss.innerHTML = textHTML2;
            btnAjs.innerHTML = textHTML3;
    
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
    
            atackHTML = true;
            atackOptions = false;
        }
        else if(!wastedHTML && atackHTML){
            enemyName.innerHTML = "Ditto"; 
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            
            atackHTML = false;
            wastedHTML = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé le nom de l'ennemi. Il est plus faible";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
            //BtnBackAction();
            
        }
        else if (atackCSS|| atackJS){
            
            playerLife -=20;
            playerLifeLine.style.width=playerLife+"%";
    
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" se blesse dans sa confusion";
            //BtnBackAction();
            if (playerLife <=0){
                wastedCSS =true;
                wastedJS = true;
                wastedHTML = true;
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                BtnBackAction();
            }
        }
    }
    else{


    }
    
    
    
});

btnAjs.addEventListener('click', function(){
if(roundBattle==1){
    if (!wastedJS && atackOptions){
        //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le code Java Script de l'adversaire.";
        textAtackMoment(13)
        btnAhtml.innerHTML = textJS1Rnd1;
        btnAcss.innerHTML = textJS2Rnd1;
        btnAjs.innerHTML = textJS3Rnd1;

        btnAhtml.style.backgroundColor = colorBtnHtml;
        btnAcss.style.backgroundColor = colorBtnHtml;
        btnAjs.style.backgroundColor = colorBtnHtml;

        atackJS = true;
        atackOptions = false;
    }   
    else if(!wastedCSS &&atackCSS  ){
        positionLeftO = imgEnemyPokemon.style.left
            imgEnemyPokemon.style.left = "-278px"
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            atackCSS = false;
            wastedCSS = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé la position de l'ennemi. L'ennemi est plus faible";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";
            
    }
    else if((!wastedJS &&atackJS)){
        
        playerLife =100;
        playerLifeLine.style.width=playerLife+"%";

            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            atackJS = false;
            wastedJS = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" vous avez récupéré votre vie. L'ennemi est plus faible";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";
            //BtnBackAction();
    }
    else if (!wastedHTML &&atackHTML){
        enemyLife -= 34;
        enemyLifeLine.style.width=enemyLife+"%";
        
        atackHTML = false;
        wastedHTML = true;

        btnAjs.innerHTML = "SuperAtack";

        gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé le bouton et effectue une super attaque";
        if (wastedCSS && wastedHTML && wastedJS){
            gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
            BtnBackAction();
        }
        btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";

    }
    else{

    }
}
else if(roundBattle==2){
    if (!wastedJS && atackOptions){
        //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le code Java Script de l'adversaire.";
        textAtackMoment(23)
        btnAhtml.innerHTML = textJS1Rnd2;
        btnAcss.innerHTML = textJS2Rnd2;
        btnAjs.innerHTML = textJS3Rnd2;

        btnAhtml.style.backgroundColor = colorBtnHtml;
        btnAcss.style.backgroundColor = colorBtnHtml;
        btnAjs.style.backgroundColor = colorBtnHtml;

        atackJS = true;
        atackOptions = false;
    }   
    else if(!wastedCSS &&atackCSS  ){
        imgPlayerPokemon.style.visibility = "hidden"
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            atackCSS = false;
            wastedCSS = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" est invisible. L'ennemi confus s'est blessé";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";
            
    }
    else if(atackJS || atackHTML ){
        
        playerDmg();
    }
    else{

    }
}
else if(roundBattle==3){
    if (!wastedJS && atackOptions){
        //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le système Java Script de l'adversaire.";
        textAtackMoment(33)

        btnAhtml.innerHTML = textJS1;
        btnAcss.innerHTML = textJS2;
        btnAjs.innerHTML = textJS3;

        btnAhtml.style.backgroundColor = colorBtnHtml;
        btnAcss.style.backgroundColor = colorBtnHtml;
        btnAjs.style.backgroundColor = colorBtnHtml;

        atackJS = true;
        atackOptions = false;
    }   
    else if(!wastedCSS &&atackCSS  ){
            document.body.style.backgroundColor="red";
            enemyLife -= 33;
            enemyLifeLine.style.width=enemyLife+"%";
            atackCSS = false;
            wastedCSS = true;
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé la couleur de fond. L'ennemi est plus faible";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
        btnAcss.style.backgroundColor = "grey";
        btnAjs.style.backgroundColor = "grey";
            //BtnBackAction();
            
    }
    else if((atackHTML|| atackJS)){
        
        playerLife -=20;
        playerLifeLine.style.width=playerLife+"%";

        gameMsg.innerHTML = playerNameBattleJS.innerHTML+" se blesse dans sa confusion";
        if (playerLife <=0){
            wastedCSS =true;
            wastedJS = true;
            wastedHTML = true;
            gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
            BtnBackAction();
        }
    }
    else{

    }
}
else{
    
}
    
});
btnAcss.addEventListener('click', function(){

    if(roundBattle==1){
        if (!wastedCSS && atackOptions ){
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le code CSS de l'adversaire";
            textAtackMoment(12)
            btnAhtml.innerHTML = textCSS1Rnd1;
            btnAcss.innerHTML = textCSS2Rnd1;
            btnAjs.innerHTML = textCSS3Rnd1;
            
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
            atackCSS = true;
            atackOptions = false;
        }
        else if(!wastedHTML && atackHTML){
            enemyLife -= 34;
            enemyLifeLine.style.width=enemyLife+"%";
            
            atackHTML = false;
            wastedHTML = true;
    
            btnAcss.innerHTML = "SuperAtack";
    
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé le bouton et effectue une super attaque";
            if (wastedCSS && wastedHTML && wastedJS){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                BtnBackAction();
            }
            btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
                
     //Pierde Vida
        }
        else if(atackJS || atackCSS){
            playerDmg();
        }
        else{
    
        }
    }
    else if(roundBattle==2){
        if (!wastedCSS && atackOptions ){
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le code CSS de l'adversaire";
            textAtackMoment(22)
            btnAhtml.innerHTML = textCSS1Rnd2;
            btnAcss.innerHTML = textCSS2Rnd2;
            btnAjs.innerHTML = textCSS3Rnd2;
            
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
            atackCSS = true;
            atackOptions = false;
        }
        
        else if(atackJS || atackCSS || atackHTML){
            playerDmg();
        }
        else{
    
        }
    }
    else if(roundBattle==3){
        if (!wastedCSS && atackOptions ){
            
            //gameMsg.innerHTML = playerNameBattleJS.innerHTML+" va attaquer le CSS de l'adversaire";
            textAtackMoment(32)
            btnAhtml.innerHTML = textCSS2;
            btnAcss.innerHTML = textCSS3;
            btnAjs.innerHTML = textCSS1;
            
            btnAhtml.style.backgroundColor = colorBtnHtml;
            btnAcss.style.backgroundColor = colorBtnHtml;
            btnAjs.style.backgroundColor = colorBtnHtml;
    
            atackCSS = true;
            atackOptions = false;
        }
        else if(!wastedJS && atackJS){
                enemyLife -= 34;
                enemyLifeLine.style.width=enemyLife+"%";
                atackJS = false;
                wastedJS = true;
                gameMsg.innerHTML = playerNameBattleJS.innerHTML+" a changé la quantité de vie de l'ennemi. L'ennemi est plus faible";
                if (wastedCSS && wastedHTML && wastedJS){
                    gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a gagné!";
                    BtnBackAction();
                }
                btnAhtml.style.backgroundColor = "grey";
            btnAcss.style.backgroundColor = "grey";
            btnAjs.style.backgroundColor = "grey";
                //BtnBackAction();
                
     //Pierde Vida
        }
        else if(atackHTML || atackCSS){
            
            playerLife -=20;
            playerLifeLine.style.width=playerLife+"%";
    
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" se blesse dans sa confusion";
            if (playerLife <=0){
                wastedCSS =true;
                wastedJS = true;
                wastedHTML = true;
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                BtnBackAction();
            }
        }
        else{
    
        }
    }
    else{
    }
    

});

btnBack.addEventListener('click', function(){
    BtnBackAction();
});

function BtnBackAction (){

    if(roundBattle==1){
        if (wastedCSS){
            btnAcss.style.backgroundColor = "grey";
            }
            else{
                btnAcss.style.backgroundColor = colorBtnHtml;
            }
            if (wastedHTML){
                btnAhtml.style.backgroundColor = "grey";
            }
            else{
                btnAhtml.style.backgroundColor = colorBtnHtml;
            }
            if (wastedJS){
                btnAjs.style.backgroundColor = "grey";
            }
            else{
                btnAjs.style.backgroundColor = colorBtnHtml;
            }
            if (wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&!isRoundBattleFinish){ 
                gameMsg.innerHTML= playerNameBattleJS.innerHTML +" a gagné!";
                isRoundBattleFinish = true;
                isNextRound = true;
                btnBack.innerHTML = "Continuer"
            }
            else if (playerLife <=0 && !isRoundBattleFinish){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                isRoundBattleFinish = true;
            isNextRound = false;
                btnBack.innerHTML = "Jouer à nouveau"
            }
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&isRoundBattleFinish){
                console.log("newxtMatch")
                roundBattle++
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";

                nextRound();
            }
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife<=0)&&isRoundBattleFinish){
                console.log("NewGa")
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";
                nextRound();
            }
            else{
                gameMsg.innerHTML = "Que dois faire "+ playerNameBattleJS.innerHTML + " ?";            
            }
            btnAhtml.innerHTML = htmlTextOrigin;
            btnAcss.innerHTML = cssTextOrigin;
            btnAjs.innerHTML = jsTextOrigin;
            atackHTML = false;
            atackCSS = false;
            atackJS = false;
            atackOptions = true;
    }
    else if(roundBattle==2){
        if (wastedCSS){
            btnAcss.style.backgroundColor = "grey";
            }
            else{
                btnAcss.style.backgroundColor = colorBtnHtml;
            }
            if (wastedHTML){
                btnAhtml.style.backgroundColor = "grey";
                imgPlayerPokemon.style.visibility = "visible"

            }
            else{
                btnAhtml.style.backgroundColor = colorBtnHtml;
            }
            if (wastedJS){
                btnAjs.style.backgroundColor = "grey";
                imgPlayerPokemon.style.visibility = "visible"

            }
            else{
                btnAjs.style.backgroundColor = colorBtnHtml;
            }
            if (wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&!isRoundBattleFinish){ 
                gameMsg.innerHTML= playerNameBattleJS.innerHTML +" a gagné!";
                isRoundBattleFinish = true;
                isNextRound = true;
                btnBack.innerHTML = "Continuer"
            }
            else if (playerLife <=0 && !isRoundBattleFinish){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                isRoundBattleFinish = true;
            isNextRound = false;
                btnBack.innerHTML = "Jouer à nouveau"
            }
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&isRoundBattleFinish){
                console.log("newxtMatch")
                roundBattle++
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";
                imgPlayerPokemon.style.visibility = "hidden"

                nextRound();
            }
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife<=0)&&isRoundBattleFinish){
                console.log("NewGa")
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";
                imgPlayerPokemon.style.visibility = "hidden"

                nextRound();
            }
            else{
                gameMsg.innerHTML = "Que dois faire "+ playerNameBattleJS.innerHTML + " ?";            
            }
            btnAhtml.innerHTML = htmlTextOrigin;
            btnAcss.innerHTML = cssTextOrigin;
            btnAjs.innerHTML = jsTextOrigin;
            atackHTML = false;
            atackCSS = false;
            atackJS = false;
            atackOptions = true;
    }
    else if(roundBattle==3){
        if (wastedCSS){
            btnAcss.style.backgroundColor = "grey";
            }
            else{
                btnAcss.style.backgroundColor = colorBtnHtml;
            }
            if (wastedHTML){
                btnAhtml.style.backgroundColor = "grey";
            }
            else{
                btnAhtml.style.backgroundColor = colorBtnHtml;
            }
            if (wastedJS){
                btnAjs.style.backgroundColor = "grey";
            }
            else{
                btnAjs.style.backgroundColor = colorBtnHtml;
            }

            if (wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&!isRoundBattleFinish){ 
                gameMsg.innerHTML= playerNameBattleJS.innerHTML +" a gagné!";
                isRoundBattleFinish = true;
                isNextRound = true;
                btnBack.innerHTML = "Continuer"
            }
            else if (playerLife <=0 && !isRoundBattleFinish){
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                isRoundBattleFinish = true;
                isNextRound = false;
                btnBack.innerHTML = "Jouer à nouveau"
            }
            
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife>0)&&isRoundBattleFinish){
                console.log("newxtMatch")
                roundBattle++
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";

                nextRound();
            }
            else if(wastedCSS && wastedHTML && wastedJS && (playerLife<=0)&&isRoundBattleFinish){
                console.log("NewGa")
                gameMsg.innerHTML = playerNameBattleJS.innerHTML +"Le joueur a son prochain combat";
                nextRound();
            }
            else{
                gameMsg.innerHTML = "Que dois faire "+ playerNameBattleJS.innerHTML + " ?";            
            }
            btnAhtml.innerHTML = htmlTextOrigin;
            btnAcss.innerHTML = cssTextOrigin;
            btnAjs.innerHTML = jsTextOrigin;
            atackHTML = false;
            atackCSS = false;
            atackJS = false;
            atackOptions = true;
    }
    else{}
}

function nextRound (){
    
    btnBack.innerHTML = backTextOrigin
    imgEnemyPokemon.style.top = "575px"
    imgEnemyPokemon.style.left = "0px"
    btnAhtml.innerHTML = htmlTextOrigin;
        //roundBattle++ 
        playerLife = 100
        playerLifeLine.style.width=playerLife+"%";
        enemyLife = 100;
        enemyLifeLine.style.width=enemyLife+"%";
        btnAhtml.style.backgroundColor = colorBtnHtml;
btnAcss.style.backgroundColor = colorBtnHtml;
btnAjs.style.backgroundColor = colorBtnHtml;
        isRoundBattleFinish = false;
            btnAcss.innerHTML = cssTextOrigin;
            btnAjs.innerHTML = jsTextOrigin;
            atackHTML = false;
            atackCSS = false;
            atackJS = false;
            atackOptions = true;
            wastedCSS = false
            wastedHTML = false
            wastedJS = false
            isNextRound = false
            //imgPlayerPokemon.style.visibility = "hidden"
            if(roundBattle == 1){
                imgEnemyPokemon.src = "./images/Carapuce.png"
                enemyName.innerHTML = "Carapuce";
                


            }
            else if (roundBattle == 2){
                imgEnemyPokemon.src = "./images/Arcko.png"
                enemyName.innerHTML = "Arcko";
                level = "Moyen"
                //gameplayBattleUI.style.visibility = "hidden"
                //canvasGet.style.visibility = "visible"
                
            }
            else if (roundBattle == 3){
                imgEnemyPokemon.src = "./images/Mewtwo.png"
                enemyName.innerHTML = "Mewtwo";
                
                level = "Professionnel"
            }
            else{
                //WIN CONDITION
                imgEnemyPokemon.src = "./images/ProfesorOak.png"
                gameMsg.innerHTML = "Félicitations ! Tu as battu tous les pokémons. Tu as gagné une médaille en tant que développeur Web. "
                enemyName.innerHTML = ""
                enemyLife = 0;
                enemyLifeLine.style.width=playerLife+"%";
                let divEnemyHO = document.querySelector('.enemyHP')
                divEnemyHO.style.visibility = "hidden"
                
            }

            gameplayBattleUI.style.visibility = "hidden"
            canvasGet.style.visibility = "visible"
            if (!(roundBattle>3)) {battle.initated = false}
}
function playerDmg (){
    playerLife -=20;
            playerLifeLine.style.width=playerLife+"%";
    
            gameMsg.innerHTML = playerNameBattleJS.innerHTML+" se blesse dans sa confusion";
            if (playerLife <=0){
                wastedCSS =true;
                wastedJS = true;
                wastedHTML = true;
                gameMsg.innerHTML=playerNameBattleJS.innerHTML+" a perdu!";
                BtnBackAction();
            }
}



