## PRIMO PASSO - INSTALLAZIONE

npx -p @angular/cli ng new "nome-progetto"

- installazione di @angular/cli -> y
- analytics -> n
- angular routing -> y
- style -> SCSS

cd "nome-progetto"

per tutto lo stile utilizzare file globale di scss (styles.scss)

## CARTELLE DI CORE

strutture possibili:

- prima versione:

  - \_core

    - models

    - resolvers

    - services

- seconda versione:

  - \_models

  - \_resolvers

  - \_services

## GENERAZIONE COMPONENTE -- !!CONSIGLIATO PER AUTO IMPORT IN MODULE!!

entrare in cartella pages | shared | altro dentro app

ng g c "Nome" _--- se non funziona ---->_ npx ng g c "Nome"

rimuovere file scss e spec

## VISUALIZZAZIONE SITO

npm start || ng serve --open

## NGMODEL

importare FormsModule in imports dentro il module
