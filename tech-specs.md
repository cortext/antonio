ANTONIO
=

Specifications techniques:
==

Outil de retour au texte:
consultation et modification des données produites 
par le Cortext Manager

Objectif 1: Accéder aux données et les requêter:

Créer une instance elasticsearch pour chq utilisateur.

Pour chaque utilisateur ou un projet: on crée un noeud elasticsearch (on lui attribue un nom unique sur une instance globale pour éviter les collisions)
toutes les bases de données du project seront contenues dans le même noeud elastic search.
Chaque base aura sa collection (sa table particulière)


Read data from user project:
===
For each project: 
- intanciate a node of ElasticSearch (global instance will give an overview of all the project in Cortext Manager).
- Create a specific collection for the corresponding sqlite_db to push it into ElasticSearch (for more reliability we will add a databroker redis???)
- The conversion from sqlite to elastic search  is driven by a python script + a logstash plugin 
(http://www.logstash.net/docs/1.3.3/inputs/sqlite)
- Once the project is loaded and indexed by Elastic Search
- To acess it we create a simple and dashboard with Kibana: that let's you search query and acess the items in tables




Create a node of ElasticSearch for each project 
