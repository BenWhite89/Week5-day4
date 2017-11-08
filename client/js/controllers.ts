angular.module('myBlogApp.controllers', ['ngRoute', 'ngResource', 'myBlogApp.factories'])

    .controller('NavbarController', ['$scope', '$location', 'Categories', 'Users', function($scope, $location, Categories, Users) {
        Users.query(function(data: any) {
            $scope.users = data;
        });
        Categories.query(function(data: any) {
            $scope.categories = data;
        });
    }])
    .controller('BlogpostsController', ['$scope', '$location', 'Posts', 'Users', 'Categories', function($scope, $location, Posts, Users, Categories) {
        Posts.query(function(data: any) {
            $scope.posts = data;
        });

        $scope.saveUser = function () {
            let newUser = new Users({
                firstName: $scope.newFirst,
                lastName: $scope.newLast,
                email: $scope.newEmail,
                password: $scope.newPass
            });
            newUser.$save(function() {
                $location.url('/');
            });

        };
        $scope.saveCategory = function() {
            let newCategory = new Categories({
                categoryName: $scope.newCategory
            });
            newCategory.$save()
               .then($location.url('/'));
        };

    }])

    .controller('ComposeController', ['$scope', '$location', 'Posts', 'Users', 'Categories', function ($scope, $location, Posts, Users, Categories) {
        $scope.categories = Categories.query(function(data: any) {
            $scope.category = data[0];
        });
        $scope.users = Users.query(function(data: any) {
            $scope.user = data[0];
        });
        $scope.title = '';
        $scope.content = '';

        $scope.click = function() {
            console.log($scope.category);
        }

        $scope.createPost = function() {
            let newPost = new Posts({
                userId: $scope.user.id,
                categoryId: $scope.category.id,
                title: $scope.title,
                content: $scope.content
            });
            newPost.$save(function(success: any) {
                $location.url('/');
            })
        };
    }])

    .controller('SingleController', ['$scope', '$location', '$routeParams', 'Posts', 'Users', 'Categories', function($scope, $location, $routeParams, Posts, Users, Categories) {

        // Posts.get({ id: $routeParams.id }, function(data: any) {
        //     $scope.post = data;
        // });

        $scope.post = Posts.get({id: $routeParams.id});

        $scope.updateView = function(id: any) {
            $location.url(`/${id}/update`);
        }

        $scope.delete = function() {
            $scope.post.$delete();
            $location.replace().path('/');
        };


        $scope.cancel = function () {
            $location.url('/');
        }

    }])

    .controller('UpdateController', ['$scope', '$location', '$routeParams', 'Posts', 'Users', 'Categories', function($scope, $location, $routeParams, Posts, Users, Categories) {

        Posts.get({ id: $routeParams.id }, function(data: any) {
            $scope.post = data;
            $scope.title = data.title;
            $scope.content = data.content;
            $scope.default = $scope.categories.findIndex((obj: any) => obj.id === data.categoryId);
            $scope.category = $scope.categories[$scope.default];
        });

        $scope.updatePost = function() {
            let e = new Posts({
                categoryId: $scope.category.id,
                title: $scope.title,
                content: $scope.content
            });

            e.$update({id: $routeParams.id});
            $location.url(`/${$routeParams.id}`);
        }
    }]);