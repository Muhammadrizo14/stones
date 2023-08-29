import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BaseQueryDto } from 'src/util/baseQuery.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptionsText } from 'src/util/uploadConfig';
import { Prisma } from '@prisma/client';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }


  // SeoText
  @Get(':id/seoText')
  @UseGuards(JwtAuthGuard)
  getSeoText(@Param('id') id: string) {
    return this.serviceService.findSeoText(+id);
  }

  @Patch(':id/upload')
  @UseInterceptors(FileInterceptor('file', multerOptionsText))
  upload(@Param('id') id: string,@UploadedFile() file: Prisma.ServicesCreateInput) {    
    return this.serviceService.updateSeoText(+id, file);
  }



  // End seoText


  
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
