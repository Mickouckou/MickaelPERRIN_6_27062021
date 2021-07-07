Bienvenue dans mon 6ème projet
Pour l'installer :

commencer par cloner le projet avec :
git clone https://github.com/Mickouckou/MickaelPERRIN_6_27062021.git

puis entrer dans le dossier MickaelPERRIN_6_27062021
cd .\MickaelPERRIN_6_27062021

cloner la partie front :
git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git

Pour lancer la partie front, executer les commandes suivantes :

cd .\dwj-projet6
npm install
npm install -g @angular/cli
npm install node-sass@4.14.1
npm start

Le front devrait fonctionner.

Passons à l'API. Dans un nouveau terminal, lancer la commande :
cd .\MickaelPERRIN_6_27062021\backend
npm install

copier le fichier .env dans le répertoire backend.

Enfin executer :
node server

Le serveur Node est lancé vous pouvez tester l'application.


