import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export class Usuario {
    @Prop() id: ObjectId;
    @Prop() nome: string;
    @Prop() cargo: string;
    @Prop() senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);