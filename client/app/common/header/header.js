import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import headerComponent from './header.component';

let headerModule = angular.module('header', [
  uiRouter
])

.component('header', headerComponent)
  
.name;

export default headerModule;
