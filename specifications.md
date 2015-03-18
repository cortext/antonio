ANTONIO
==

* Specifications fonctionnelles:
====

Outil de retour au texte:
consultation et modification des données produites
par le Cortext Manager



1. Parsing du YAML :
=====
*chemin de la DB et son ID
* version de la DB
* listes des champs autorisées (et leur type(categoriel/non categoriel?))
qui produit un formulaire affichant une liste des champs autorisés à l'affichage, ils sont présélectionnés et pré-filtrées selon la règle : seul les tables qui contiennent id, data (parse_rank, parse_id) ? seront affichés.

2. Exécution du script :
=====
Le formulaire exécute un script qui à partir du chemin + ID de la DB + version :
* Convertit la base SQL en JSON
* Injecte les datas du JSON dans du javascript + HTML (méthode ? AJAX ou construction à la volée en utilisant les plugins datatables)
* pour afficher les données tabulaire sur une (page/url/onglet spécifique) correspondant à l'application Antonio

3. Affichage des données tabulaires
=====
Cette page offre un menu à gauche avec les tables sélectionnées cochées.
Les tables sélectionnées correspondent aux colonnes sélectionnées.
En haut, elle offre un menu de recherche, filtrage/tri et modification (rechercher remplacer cf.point4).
Les données catégorielles s'affichent sous forme de listes.
Les opérateurs logiques et mathématiques dans la barre de recherche permettent une vue filtrée.
Exemple : YEAR > 2000

En bas trois bouton : Save/ Export all/ Export view/
* Save :  enregistre en JSON et incrémente la version
* Export : enregistre dans la Base de données
* Export view : télécharge le csv correspondant à la vue actuelle (qui prend en compte le tri, filtrage et la recherche)

4.Modification des données tabulaires :
=====
Les opérations de modification dans l'interface d'Antonio s'appliquent au niveau de la cellule, de la colonne, et de la ligne. La structure des données n'est pas modifiée (pas de merge split seulement en externe en exportant la vue actuelle en CSV)
Liste des opérations de modification permises :
* Select and modify all
* Select and modify row
* Select and modify column
* Select/modify/delete cell content
* Add/Delete row
* Add/Delete column
