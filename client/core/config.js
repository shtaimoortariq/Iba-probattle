/**
 * Created by Taimoor tariq on 1/19/2016.
 */


(function () {
    angular.module("myApp")
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider


                .state("login", {
                    url: '/login',
                    templateUrl: 'components/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'login'
                })

                .state("userinformation", {
                    url: '/userinformation',
                    templateUrl: 'components/userinformation/userinformation.html',
                    controller: 'UserInfoController',
                    controllerAs: 'userinfo'
                })

                .state("signup", {
                    url: '/signup',
                    templateUrl: 'components/signup/signup.html',
                    controller: 'SignupController',
                    controllerAs: 'signup'
                })

                .state("view", {
                    url: "/view",
                    templateUrl: "components/view/view.html",
                    controller: "ViewController",
                    controllerAs: "view"

                })
                .state("dashboard", {
                    url: "/dashboard",
                    templateUrl: "components/dashboard/dashboard.html",
                    controller: "DashboardController",
                    controllerAs: "dashboard"

                })


                .state("edit", {
                    url: "/edit/:id",
                    templateUrl: "components/edit/edit.html",
                    controller: "EditController",
                    controllerAs: "edit"


                });


            $urlRouterProvider.otherwise('/login')

        })

})();