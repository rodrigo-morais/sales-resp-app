var headerController = ($scope, $location, localStorageService) => {
    
    $scope.logoff = () => {
        if(localStorageService.isSupported) {
            localStorageService.remove('userName', 'sessionId');
            $location.path('/');
        }
    };
};

headerController.$inject = ['$scope', '$location', 'localStorageService'];

export default headerController;