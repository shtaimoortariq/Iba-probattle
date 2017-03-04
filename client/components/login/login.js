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

            firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(function (data) {
                console.log(data);
                console.log(true);
                $state.go('dashboard');

            },function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);

            });

        }


    }

})();