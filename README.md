# 📘 TP de  Développement clients web

## 📖 Déscription 
---
Ce TP a pour but de mettre en oeuvre les deux technologies HTML et CSS.
Pour ce faire unepage contenant un example CV [clickez ici](https://kramatile.github.io/dosi-Friends-resume/).
- [ ] Apprendre et appliqué les concepts de : **HTML**, **CSS**

## 🗂 Structure du PROJET 
---
Ce TP comprend un répertoire et trois fichiers fichier :
* CSS : contient deux fichiers de style : resume.css et reponsive.css
* responsive.css : comprend les spécification de l'adaptabilité du systéme
* resume.css : spécifie les styles.
* index.html : le contenu et la structure de la page ainsi que certaines metadonnées.

## ⚙️ Requirements  
- html : hyperText markup language

- CSS : Cascading stylesheet


## Structure
---

La page contient plusieurs sections : 
- Un header contenant les informations de la personne.
- Des sections :
    - presentation
    - Compétences / skills
    - Experiences
- Un footer contenant les informations de contact

## Style 
---
Ce fichier définit une mise en page sobre et moderne pour un CV en HTML.
Il utilise la police principale **Poppins**, accompagnée de **BBH Sans Hegarty** pour les titres, afin de donner une apparence professionnelle et élégante.
Nous avons importés les police de **google fonts** grace à la balise qu'on a intégré dans l'entete de `index.html`.
```
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

```
Le corps de page est centré grâce au conteneur `#wrapper`, avec une largeur maximale de 900 px et un fond gris clair `(#b6b2b2)`.

Les icônes et liens disposent d’un effet hover fluide : agrandissement `(transform: scale(1.2))` et changement de couleur vers un bleu d’accent `(#00acee)`.


## Mise en ligne
Il suffit de créer un répertoire github, d'y mettre notre projet et puis de finalement activer github pages (parmétre -> pages -> activer)

## Adaptif 
J’ai rendu le CV adaptatif en créant un fichier `responsive.css` contenant plusieurs media queries.
Ces règles ajustent la disposition, la taille des images et la mise en page selon la largeur de l’écran (ordinateur, tablette, mobile).

## Micro-données
Dans cette partie du TP, j’ai intégré des micro-données `Schema.org` dans le CV afin d’enrichir sa structure sémantique.
J’ai utilisé les attributs `itemscope`, `itemtype`, `itemprop`, `itemid` et itemref pour décrire la personne, ses compétences, sa formation et ses expériences.



# Java Script
On a ajouté l'aspect dynamique à notre site web.
## Apparition des descriptions :
    L'apparition des déscriptions dans la partie formation est dynamiques

## Apparition des descriptions détaillés :
    L'apparition des déscriptions des entreprises ce fait quand on passe le curseur dessus.

## Auto-évaluation des connaissances :
    Les étoiles apparaissent grace au script js 
    de meme pour le graphe en fin de séction.