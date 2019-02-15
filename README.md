# LivreOkaz-Front

## Angular :
Mise en place du Front-End de l'application LivrOkaz.
Nous avons travaillé tous les trois de manière totalement indépendante pour être sûr de bien comprendre, chacun d'entre nous, la façon de faire et de travailler avec Angular et les interactions.

Pour ce faire, nous avons généré un projet Angular. A l'intérieur de celui-ci, nous avons généré un model pour les ouvrages, à l'instar du modèle en Back-End. Nous avons créé un service Data pour nous permettre de faire "passerelle" avec le Back-End. Ce service regroupe les méthodes CRUD que nous envoyons ensuite au Back. Ces données sont récupérées ou envoyées par un composant. Il y a un composant pour consulter un livre, un pour afficher les listes des ouvrages disponibles et un pour la création, la modification ou la suppression d'ouvrage.

Nous avons utilisé Material d'Angular pour aider à la mise en forme des templates. Les templates communiquent avec les composants via les string interpolations et les two-way binding [(ngModel)].

Sur la liste des ourvrages, nous avons utilisé une boucle ngFor dans le template pour afficher l'ensembles des ouvrages. La boucle ngIf nous sert à afficher une image "bateau" si l'image n'est pas présente dans la base de donnée.

L'ensemble des composants sont reliés par le module app-routing où sont déclarés les différentes routes internes en Angular.

![image](https://github.com/matthieu33770/LivreOkaz-Front/blob/master/Sch%C3%A9ma%20Angular.JPG)
