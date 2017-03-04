/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("SignupController", ['UserService',SignupController]);

    function SignupController(UserService) {
        var vm = this;

        var check = UserService.checkUser();
        if(check) {
            console.log("session");
            $state.go('dashboard');
        }


        this.email =  "";
        this.password =  "";
        this.name = "";


        this.userSignUp = function() {

            console.log(this.email);
            console.log(this.password);
            console.log(this.name);

            firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).then(function (data) {
                console.log("ELSE BLOCK");
                var user = firebase.auth().currentUser;
                conosle.log("user");
                conosle.log(user);

                /*firebase.database().ref('users/' + userId).set({
                 username: name,
                 email: email,
                 profile_picture : imageUrl
                 });*/

            },function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
            vm.email =  ""; vm.password =  "";vm.name = "";
        }
    }

})();