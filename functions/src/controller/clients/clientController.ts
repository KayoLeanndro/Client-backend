import { clientBusiness } from '../../business/exportsBusiness'
// import { Client } from '../../interfaces/exportInterface';

class ClientController{

    getClientById = (idClient: String) => {
        return clientBusiness.getClientById(idClient);
    }

    getClients = () => {
        return clientBusiness.getClients();
    }
    
    postClients = () => {
        return clientBusiness.postClients();
    }
    
    putClients = () => {
        return clientBusiness.putClients();
    }
    
    deleteClients = () => {
        return clientBusiness.deleteClients();
    }
    

}

export const clientController = new ClientController();