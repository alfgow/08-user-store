import { CustomError } from "../errors/custom.errors"

export class UserEntity {

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public emailValidated: boolean, 
        public password: string,
        public telefono: string,
        public role: string,
        public avatar?: string,
    ){}

    static fromObject(object:{[key:string]:any}){

        const {id, _id, name, email, emailValidated, password, telefono, role, avatar} = object

        if(!_id && !id) throw CustomError.badRequest('Missing id')
        if (!name) throw CustomError.badRequest('Missing name')
        if (!email) throw CustomError.badRequest('Missing email')
        if(emailValidated === undefined) throw CustomError.badRequest('Missing emailValidated')
        if (!password) throw CustomError.badRequest('Missing password')
        if (!telefono) throw CustomError.badRequest('Missing telefono')
        if (!role) throw CustomError.badRequest('Missing role')
        
        return new UserEntity(
            id || _id,
            name,
            email,
            emailValidated,
            password,
            telefono,
            role,
            avatar
        )

    }

}