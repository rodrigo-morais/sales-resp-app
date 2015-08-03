import config from '../../config';

class CustomerDetailsService {

    constructor($q, $resource){
        this.service = $resource(config.url + 'customer/details',
                        {sessionId: '@sessionId', customerid: 'customerid'},
                        {post: {
                                    method: 'POST',
                                    headers: {
                                                'Content-Type': 'application/json'
                                    }
                                }
                        });
        this.q = $q;
    }

    post(sessionId, custometId){
        var deferred = this.q.defer();

        this.service.post(
            {
                "sessionId" : sessionId,
                "customerid" : custometId
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

CustomerDetailsService.$inject = ['$q', '$resource'];

export { CustomerDetailsService };