


## Les tests End to End

**Définition**
 Les test end to end sont des test qui sert  à tester la fonctionnalité et les performances de l'application on mettant en consideration que l'utilisateur lui-même expérimente le produit par des scénarios biens définis. autrement c'est le fait pour tester si le flux d'une application du début à la fin se comporte comme prévu.


**Exemple**
  Un *End d to end*  test qui décrit le scénario du login dés que l'utilisateur navigues vers la page du login jusqu'il arrivera à se connecter correctement.

**Pourquoi les test End to End?**

  - Soyez sur que le flux est toujours correcte du point de vue utilisateur finale.
  - Assurer *l'intégration continue ( CI )*

## L'intégration continue CI

**Définition**

l'integration continue est pratique qui consiste à automatiser l'integration du changement de code de plusieurs contributeurs dans un projet. Il est composé d'outils automatiques qui garantissent l'exactitude du nouveau code avant l'intégration.


**Pourquoi le CI ?**
- L'un des pointsss importants de l'utilisation de CI est d'avoir moins de conflits lors de l'intégration du code.
- Etre sur du succès des tests ( E2E ) aprés chaque changement , autrement c'est facile d'avoir un suivi sur les erreurs qui peuvent  se produire lors du changement.
- assurez que l'intégration n'excute jamais qu'avant avoir passé par des etapes des tests qui sont défnis dans le *Pipeline* !!!
 
**Pipeline**

Le pipeline est une série d'étapes qui doivent être exécutées à chaque changement dans le code  afin de fournir une nouvelle version stable si les etapes sont bien passés . Ce dernier est définie par le développeur.

**Si tous est Ok**

La dérniere étape du flow est le **Release** , c'est la distribution de la version finale d'une application autrement c'est une version déployable du projet vu que c'est quelle a passé du étapes.
 