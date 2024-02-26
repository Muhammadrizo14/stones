import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartnersService {
  constructor(private prismaService: PrismaService) { }
  create(createPartnerDto: CreatePartnerDto) {
    return this.prismaService.partners.create({ data: createPartnerDto });
  }

  findAll() {
    return this.prismaService.partners.findMany({
      include: { uploadedFile: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.partners.findUnique({ where: { id }, include: { uploadedFile: true }, });
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return this.prismaService.partners.update({ where: { id }, data: updatePartnerDto });
  }

  remove(id: number) {
    return this.prismaService.partners.delete({ where: { id } });
  }
}
