import { Injectable } from '@nestjs/common';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SliderService {
  constructor (private prismaService: PrismaService) {}
  create(createSliderDto: CreateSliderDto) {
    return this.prismaService.slider.create({data: createSliderDto}) ;
  }

  findAll() {
    return this.prismaService.slider.findMany({
      include: { uploadedFile: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.slider.findUnique({where: {id}, include: { uploadedFile: true },});
  }

  update(id: number, updateSliderDto: UpdateSliderDto) {
    return this.prismaService.slider.update({where: {id}, data: updateSliderDto});
  }

  remove(id: number) {
    return this.prismaService.slider.delete({where: {id}})
  }
}
