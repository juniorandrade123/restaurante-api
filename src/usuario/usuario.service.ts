import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name) private userRepo: Model<Usuario>
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const createdCat = new this.userRepo(createUsuarioDto);
    return createdCat.save();
  }

  findAll() {
    return this.userRepo.find().exec();
  }

  findOne(id: number) {
    return this.userRepo.findOne({id: id}).exec();
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.userRepo.findByIdAndUpdate(id, updateUsuarioDto).exec();
  }

  remove(id: number) {
    return this.userRepo.findOneAndDelete({id: id}).exec();
  }
}
