import config from '../../config';

class SalesService {

    constructor($q, $resource){
        this.resource = $resource;
        this.q = $q;
    }

    getTotalSalesMan(sessionId){
        var service = this.resource(config.url + 'salesmandata'),
            deferred = this.q.defer();

        service.get(
            {
                sessionid: sessionId
            }
        )
            .$promise
            .then(function (data) {
                let series = data.data.map(function(man){
                    return man[0];
                }),
                values = data.data.map(function(man){
                    return {
                        x: man[0],
                        y: [man[1]],
                        toottip: man[0]
                    };
                }),
                pieData ={
                    series: series,
                    data: values
                };

                deferred.resolve(pieData);
            });

        return deferred.promise;
    }

    getTotalSalesMonth(sessionId){
        var service = this.resource(config.url + 'lastyeardata'),
            deferred = this.q.defer();

        service.get(
            {
                sessionid: sessionId
            }
        )
            .$promise
            .then(function (data) {
                let series = data.data.map(function(month){
                    return month[0];
                }),
                values = data.data.map(function(month){
                    return {
                        x: month[0],
                        y: [parseFloat(month[1])],
                        toottip: month[0]
                    };
                }),
                barData ={
                    series: ['Sales'],
                    data: values
                };

                deferred.resolve(barData);
            });

        return deferred.promise;
    }

    getTop5SalesOrders(sessionId){
        return this._get(sessionId, 'topsalesorders');
    }

    getTop5SalesMen(sessionId){
        return this._get(sessionId, 'topsalesmen');
    }

    _get(sessionId, serviceName){
        var service = this.resource(config.url + serviceName),
            deferred = this.q.defer();

        service.get(
            {
                sessionid: sessionId
            }
        )
            .$promise
            .then(function (data) {
                deferred.resolve(data);
            });

        return deferred.promise;
    }
}

SalesService.$inject = ['$q', '$resource'];

export { SalesService };