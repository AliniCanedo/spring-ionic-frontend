// deve conter os mesmos atributos do backend
export interface ClienteDTO {
    id: string;
    nome: string;
    email: string;
    imageUrl?: string;
}