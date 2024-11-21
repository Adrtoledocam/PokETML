PokemonBattle V1 - English Mode

Contexte : Vous êtes un dresseur de Pokemon et vous devez gagner une bataille. 
L'ennemi présente différentes conditions pour être vaincu et en utilisant 
le code de la console web (comme dans Inspect dans GoogleChrome) et un dé, 
vous pouvez attaquer l'ennemi et découvrir le résultat. 

Version 1.0
Il n'y a qu'un seul ennemi : Mewtwo
Il n'aime pas la couleur rouge de l'arrière-plan, 
il n'aime pas que son nom s'appelle Ditto 
et que son dé porte le chiffre 1 ou 2. 

Instructions pour jouer (Pour chaque modification, enregistrer CTRL+S):
1. Activez la console dans le navigateur. Dans ce cas, vous devez accéder à l'Inspect de GoogleChrome. 
2. Dans la "Elements" le joueur doit regarder dans le code HTML où se trouve le nom de l'ennemi et le changer en "Ditto".
   [<p class="nickNameEnemie">Mewtwo</p>] à [<p class="nickNameEnemie">Ditto</p>]
3. Ensuite, accédez au "Sources" au code CSS (style.css) et changez la valeur de la couleur d'arrière-plan en ROUGE.
   [body{background-color: blue;}] à [body{background-color: red;}]
4. Accédez au fichier JavaScript (index.js)  et changez le nombre de dés en 1 ou 2. 
   Option 1: [var randomNumber2 = Math.floor(Math.random() * 6)+3] à [var randomNumber2 = Math.floor(Math.random() * 2) +1]
   Option 2: [var randomNumber2 = 1]  
5. Lancez les dés et obtenez un nombre plus grand que celui de votre adversaire. 
6. VICTOIRE 