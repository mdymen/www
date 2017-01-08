angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.palpitar', {
    url: '/palpitar',
    views: {
      'tab1': {
        templateUrl: 'templates/palpitar.html',
        controller: 'palpitarCtrl'
      }
    }
  })

  .state('tabsController.meusPalpites', {
    url: '/meuspalpites',
    views: {
      'tab2': {
        templateUrl: 'templates/meusPalpites.html',
        controller: 'meusPalpitesCtrl'
      }
    }
  })

  .state('tabsController.campeonatos', {
    url: '/campeonatos',
    views: {
      'tab3': {
        templateUrl: 'templates/campeonatos.html',
        controller: 'campeonatosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastreSe', {
    url: '/page6',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })

  .state('caixa', {
    url: '/caixa',
    templateUrl: 'templates/caixa.html',
    controller: 'caixaCtrl'
  })

  .state('transaEs', {
    url: '/transacoes',
    templateUrl: 'templates/transaEs.html',
    controller: 'transaEsCtrl'
  })

  .state('meuPerfil', {
    url: '/meuperfil',
    templateUrl: 'templates/meuPerfil.html',
    controller: 'meuPerfilCtrl'
  })

  .state('palpite', {
    url: '/page10',
    templateUrl: 'templates/palpite.html',
    controller: 'palpiteCtrl'
  })

  .state('campeonato', {
    url: '/page11',
    templateUrl: 'templates/campeonato.html',
    controller: 'campeonatoCtrl'
  })

$urlRouterProvider.otherwise('/home/palpitar')

  

});