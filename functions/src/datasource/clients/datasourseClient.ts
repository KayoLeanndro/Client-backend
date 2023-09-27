import { messageTreatmentBusiness} from '../../business/exportsBusiness';
import { Client,MessageTreatment} from "../../interfaces/exportInterface";


class ClientDatasource {

    getClientById = (idClient: String) => {
        return { name: `Kayo get id - ${idClient}` };
    } 

    getClients = () : MessageTreatment => {
        let client : Client = {id:'1',name: 'Kayo', email:'kayolele222@gmail.com', sucess : true};
        return messageTreatmentBusiness.sucessMsg('Alguns clientes foram encontrados', client);
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