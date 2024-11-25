import { regularExps } from "../../../config"

export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string,
        public telefono: string,
        public role: string,
        //! Al tener el endpoint /solicitud-arrendatario o /solicitud-arrendador o /solicitud-fiador se asignara el rol de solicitante automatico
        public avatar?: string,
    ){}

    static create(object:{[key:string]:any}):[string?, RegisterUserDto?]{

        const {name, email, password, telefono, role, avatar} = object
        if(!name) return ['Missing name']
        if(!email) return ['Missing email']
        if(!regularExps.email.test(email)) return ['email is not valid']
        if(!password) return ['Missing password']
        if(password.length < 6) return ['Password must be at least 6 characters']
        if(!telefono) return ['Missing telefono']
        if(!role) return ['Missing role']

        return[undefined, new RegisterUserDto(name, email, password, telefono, role, avatar)]

    }

}