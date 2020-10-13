import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CredenciaisDTO } from "../../models/credenciais.dto";
import { API_CONFIG } from "../../config/api.config";
import { LocalUser } from "../../models/local_user";
import { StorageService } from "./storage.service";



@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
    successfulLogin(authorizationValue: string) {
        // substring cortando a string a partir do 7
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }
    logout() {
        this.storage.setLocalUser(null);
    }
}