import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private prismaService: PrismaService) { }
  create(createServiceDto: CreateServiceDto) {
    return this.prismaService.services.create({ data: createServiceDto });
  }

  findAll() {
    return this.prismaService.services.findMany();
  }

  findOne(id: number) {
    return this.prismaService.services.findUnique({ where: { id } });
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return this.prismaService.services.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  async findSeoText(id: number) {
    let text = await this.prismaService.services.findUnique({ where: { id } });
    const fs = require('fs/promises');

    async function example() {
      try {
        const data = await fs.readFile(text.path, { encoding: 'utf8' });
        return data
      } catch (err) {
        console.log(err);
      }
    }    

    return example();




  }

  

  updateSeoText(id: number, createServiceDto: any) {
    console.log(createServiceDto);
    return this.prismaService.services.update({
      where: { id },
      data: createServiceDto,
    });
  }

  remove(id: number) {
    return this.prismaService.services.delete({ where: { id } });
  }
}
