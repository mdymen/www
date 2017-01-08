angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    //$http.post("http://www.bolaocraquedebola.com.br/public/index/celaddprovisorio", { us: "mdymen", pass: "3345531" }).then(function (res) {

        //$http.post("http://www.bolaocraquedebola.com.br/public/index/login", { username: "mdymen", password: "3345531" }).then(function (res) {

        //});

        //$http.get("http://www.bolaocraquedebola.com.br/public/index/celproximojogos?us_id=1")
        //    .success(function (data) {
        //        $scope.items = data;
        //    })
        //    .error(function (data) {
        //        alert("error");
        //    });

    //$stateParams({
    //    method: 'POST',
    //    url: 'http://www.bolaocraquedebola.com.br/public/index/celaddprovisorio',
    //    data: $.param({
    //        us: "mdymen",
    //        pass: "33444531"
    //    }), //forms user object
    //    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //})




}])
   
.controller('palpitarCtrl', ['$scope', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http) {

    $scope.time = "Nacional";

    //$http({
    //    method: 'POST',
    //    url: 'http://localhost/penca/public/index/celaddprovisorio',
    //    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },      
    //    data: { username: 'sdfdadfsf', password: 'sdfdadfsf' }
    //}).success(function () { });
    //$http.post('http://localhost/penca/public/index/celaddprovisorio/?', { us: $scope.time, pass: "dfrwe23" } )   
    //.success(function (data) {
    //});

    $http.post('http://localhost/penca/public/index/cellogin/?', { us: "mdymen", pass: "3345531" })
    .success(function (data) {
        $scope.time = data;
    });

    $http.get('http://localhost/penca/public/index/celproximojogos/?')
    .success(function (data) {
        $scope.palpites = data;
    });
    

    //$scope.time1 = "Nacional";
    //$scope.match.time = "Penadoy";
    //$scope.user.name = "sasa";



}])
   
.controller('meusPalpitesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('campeonatosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cadastreSeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('caixaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('transaEsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('meuPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('palpiteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('campeonatoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 