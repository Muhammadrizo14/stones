import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) { }
  create(createProfileDto: CreateProfileDto) {
    return this.prismaService.profile.create({ data: createProfileDto });
  }

  findAll() {
    return this.prismaService.profile.findMany({
      orderBy: {
        id: 'desc'
      },
      include: { uploadedFile: true }
    });
  }

  findOne(id: number) {
    return this.prismaService.profile.findUnique({ where: { id }, include: { uploadedFile: true } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prismaService.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  remove(id: number) {
    return this.prismaService.profile.delete({ where: { id } });
  }
}
