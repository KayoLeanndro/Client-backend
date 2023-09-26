

class ClientDatasource {

    getClientById = (idClient: String) => {
        return { name: `Kayo get id - ${idClient}` };
    } 

    getClients = () => {
        return { name: `kayo get` };
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