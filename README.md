# AlgamoneyUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instalação e configuração do primeng
 npm i primeng --save
 npm i primeicons --save

 COLAR ESSAS LINHAS NO ARQUIVO angular.json / angular.cli.json
 "node_modules/primeicons/primeicons.css",
 "node_modules/primeng/resources/themes/nova-light/theme.css",
 "node_modules/primeng/resources/primeng.min.css",

 CRIAR O MODULO DOS COMPONENTES PRIMENG: prime.module.ts
 adicionar os componentes que serão usados

 IMPORTAR O PrimeModule no AppModule

 ## Instalação e configuração do material angular
 npm i @angular/material --save
 npm i @angular/cdk --save
 npm i @angular/animations --save

 COLAR ESSAS LINHAS NO ARQUIVO index.html
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

 NO ARQUIVO style.css / style.scss cole isso
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
    body {
        font-family: Roboto, Arial, sans-serif;
        padding: 0;
        margin: 0;
    }  

 NO app.module.ts faça o seguinte import
     import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   

 CRIAR O MODULO DOS COMPONENTES PRIMENG: prime.module.ts
 adicionar os componentes que serão usados

 IMPORTAR O PrimeModule no AppModule
