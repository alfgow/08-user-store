import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email:{
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    emailValidated:{
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    telefono:{
        type: String,
        required: [true, 'El telefono es obligatorio'],
        unique: true
    },
    role:{
        type: [String],
        enum: ['admin', 'user', 'arrendador', 'arrendatario', 'obligado solidario', 'fiador'],
    },
    avatar:{
        type: String,
    }
})

export const UserModel = mongoose.model('User', userSchema)