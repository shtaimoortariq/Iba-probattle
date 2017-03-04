/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("SignupController", ['UserService',SignupController]);

    function SignupController(UserService) {
        var _self = this;

        var check = UserService.checkUser();
        if(check) {
            console.log("session");
            $state.go('dashboard');
        }


        this.username =  ""; this.password =  "";this.name = "";
        this.userSignUp = function() {

            console.log(this.username);
            console.log(this.password);
            console.log(this.name);

            _self.username =  ""; _self.password =  "";_self.name = "";



            firebase.auth().createUserWithEmailAndPassword(_self.username, _self.password).then(

                function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ...
                });
        }
    }

})();