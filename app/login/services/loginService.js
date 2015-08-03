import config from '../../config';

class LoginService {

    constructor($q, $resource){
        this.service = $resource(config.url + 'authenticate', {token: '@token', digest: '@digest', user: '@user'}, {post: {method:'POST',headers: {
            'Content-Type': 'application/json'
        }}});
        this.q = $q;
    }

    post(userName, password, digest){
        var deferred = this.q.defer();

        this.service.post(
            {
                "token" : config.token,
                "digest" : digest,
                "user" : { 
                            "username" : userName,
                            "password" : password
                }
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

LoginService.$inject = ['$q', '$resource'];

export { LoginService };