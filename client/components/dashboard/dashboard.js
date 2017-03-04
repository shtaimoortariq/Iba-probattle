/**
 * Created by taimoortariqdev on 3/4/2017.
 */


/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("DashboardController", ['$state',DashboardController]);

    function DashboardController($state) {
        var vm = this;

        var user = firebase.auth().currentUser;
        console.log(user);

        this.logout = function () {
            firebase.auth().signOut().then(function() {
                console.log('Signed Out');
                $state.go('login');

            }, function(error) {
                console.error('Sign Out Error', error);
            });
        }



    }

})();