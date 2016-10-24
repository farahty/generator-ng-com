class <%= component %>Controller{
    constructor(){
        'ngInject';
        
    }

    $onInit(){

    }
}

export const <%= component %>Component = {
    templateUrl: 'views/<%= comp_path %>.component.html',
    controller: <%= component %>Controller,
    controllerAs: 'vm',
    bindings: {}
}