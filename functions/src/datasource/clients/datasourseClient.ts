import { Client } from "../../interfaces/exportInterface";


class ClientDatasource {

    getClientById = (idClient: String) => {
        return { name: `Kayo get id - ${idClient}` };
    } 

    getClients = () : Client => {
        let client : Client = {id:'1',name: 'Kayo', email:'kayolele222@gmail.com', sucess : true};
        return client
    }
    
    postClients = () => {
        return { name: `kayo post` };
    }
    
    putClients = () => {
        return { name: `kayo put` };
    }
    
    deleteClients = () => {
        return { name: `kayo delete` };
    }
    

}

export const clienteDatasource = new ClientDatasource();