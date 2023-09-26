import { clienteDatasource } from '../../datasource/clients/datasourseClient'
import { Client } from '../../interfaces/exportInterface';

class ClientBusiness{

    getClientById = (idClient: String) => {
        return clienteDatasource.getClientById(idClient);
    }

    getClients = () : Client => {
        return clienteDatasource.getClients();
    }
    
    postClients = () => {
        return clienteDatasource.postClients();
    }
    
    putClients = () => {
        return clienteDatasource.putClients();
    }
    
    deleteClients = () => {
        return clienteDatasource.deleteClients();
    }
    

}

export const clientBusiness = new ClientBusiness();