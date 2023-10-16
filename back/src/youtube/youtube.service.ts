import { Injectable } from '@nestjs/common';
import { CreateYoutubeDto } from './dto/create-youtube.dto';
import { UpdateYoutubeDto } from './dto/update-youtube.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class YoutubeService {
  constructor (private prismaService: PrismaService) {}
  create(createYoutubeDto: CreateYoutubeDto) {
    return this.prismaService.youtube.create({data: createYoutubeDto}); 
  }

  findAll() {
    return this.prismaService.youtube.findMany();
  }

  findOne(id: number) {
    return this.prismaService.youtube.findUnique({where: {id}});
  }

  update(id: number, updateYoutubeDto: UpdateYoutubeDto) {
    return this.prismaService.youtube.update({where: {id}, data: updateYoutubeDto}); 
  }

  remove(id: number) {
    return this.prismaService.youtube.delete({where: {id}})
  }
  
}
