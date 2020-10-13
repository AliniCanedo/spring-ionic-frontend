import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../../config/storage_keys.config";
import { LocalUser } from "../../models/local_user";

@Injectable()
export class StorageService {

    // retorna o usuario logado
    getLocalUser(): LocalUser {
        // pego o valr q estiver no localstorage com a STORAGE_KEYS
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);

        // PRA CASO O VALOR NÃO EXISTA
        if (usr == null) {
            return null
        }
        // SE EXISTIR EU CONVERTO PRA STRING
        else {
            return JSON.parse(usr);
        }

    }
    // recebe o localuser e armazena no storage
    setLocalUser(obj: LocalUser) {
        if(obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
}