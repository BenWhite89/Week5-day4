angular.module('myBlogApp.factories', ['ngResource'])
    .factory('Users', ['$resource', function($resource: any) {
        return $resource('/api/users', {}, {});
    }])
    .factory('Categories', ['$resource', function($resource: any) {
        return $resource('/api/categories', {}, {});
    }])
    .factory('Posts', ['$resource', function($resource: any) {
        return $resource('/api/posts/:id',
        {
            id: '@id'
        },
        {
            update: { method: 'PATCH' }
        });
    }]);