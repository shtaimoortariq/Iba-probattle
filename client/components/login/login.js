/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("LoginController", ['$state','UserService', LoginController]);

    function LoginController($state, UserService) {
        var vm = this;
        console.log("LOGIN")
        this.email = "";
        this.password = "";


        var check = UserService.checkUser();
        if(check) {
            console.log("session");
            $state.go('dashboard');
        }


        this.loginUser = function () {

            firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

        }


    }

})();