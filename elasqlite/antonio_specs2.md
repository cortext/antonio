ANTONIO
=

Objectif:
========
Visualiser et modifier les datasets produits des scripts du Cortext Manager

Outil de visualisation et modification
des datasets produits par les scripts du Cortext Manager
Antonio prend la forme d'un bouton "View" sur la page View Datasets qui charge une nouvelle page
où s'affiche la dernière .db produite par le Cortext Manager sous forme de table éditable et modifiable. A chaque modification la db est modifiée ainsi que son numéro de version si changement il y a.
On ajoutera une fonction sparkline dans une des colonnes pour permettre
la visualization de fréquence de je sais pas quoi.

Fonctionnement
=======
- 1) Afficher une table qui contient les valeurs de la base de données produite par un script

Liste des scripts à visualiser:



- Stocker en base les données pertinentes ==> base par projet
- Afficher une page qui :
1. Charge les données et injecte le javascript datatable
2. Permet la recherche le tri et le filtre multicolonnes
3. Affiche une colonne sparkline
4. Chaque cellule, chaque colonne est éditable et modifiable un bouton enregistrer permet de sauvegarder la version en cours
5. Une option rechercher remplacer l'ensemble des occurences d'une recherche (Selection multivaleurs)


Docs
=======

* Le script Cortext de dataexplorer:
https://github.com/cortext/cortext/tree/dev/manager/scripts/
https://github.com/cortext/cortext/tree/dev/manager/scripts
A cloner ???!!!

* Le proto de Jean Philippe:
Inside Cortext Manager
http://manager.cortext.net/projects/jphcoi_cop_fr/cop-explorer/data/scopusessaipourscortext-ris-53390-1-scopusessaipourscortext-ris-db~53397/1/reader.html
http://manager.cortext.net/projects/jphcoi_cop_fr/copfinal/data/cop-clean-updated-reindexed-final-1~51084/1/reader4.html

/projets/antonio/jphcoiproto
Les fichiers de scripts

Yaml du script
http://manager.cortext.net/projects/jphcoi_cop_fr/cop-explorer/data/scopusessaipourscortext-ris~53390/1/scopusessaipourscortext-ris.yaml
Yampl des params
dans le dossier


Composants:

- Datatables
https://editor.datatables.net
https://editor.datatables.net/examples/simple/simple.html

- Handsontable
http://handsontable.com/

- Sparkline
