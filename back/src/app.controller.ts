import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendMailDto } from './helpers/entity';
import { PrismaService } from './prisma/prisma.service';
import { CacheModule } from '@nestjs/cache-manager';
import { Inject, CACHE_MANAGER } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor(private prismaService: PrismaService) { }



  @Post('sendmail')
  async create(@Body() sendMailDto: SendMailDto) {
    const nodemailer = require('nodemailer');

    var transporter = await nodemailer.createTransport({
      host: 'smtp.beget.com',
      port: 25,
      auth: {
        user: 'info@vkamne.com',
        pass: '&5aCquW7'
      }
    });

    var mailOptions = {
      from: 'Vkamne',
      to: 'info@vkamne.com',
      subject: 'Vkamne',
      text: `
      имя: ${sendMailDto.name}, 
      вопрос: ${sendMailDto.question}, 
      номер телефона: ${sendMailDto.phoneNumber}`
    };

    let response = await transporter.sendMail(mailOptions, await function (error, info) {
      return 'Email sent: ' + info.response;
    });

    return response
  }

  @Get('models')
  async find() {
    let services = this.prismaService.services.findMany()
    let blog = this.prismaService.blog.findMany()

    let stone = this.prismaService.stone.findMany()
    let slider = this.prismaService.slider.findMany()

    let reviews = this.prismaService.reviews.findMany()
    let portfolio = this.prismaService.profile.findMany()

    return {
      services: (await services).length,
      blog: (await blog).length,
      stone: (await stone).length,
      slider: (await slider).length,
      reviews: (await reviews).length,
      portfolio: (await portfolio).length
    }
  }
}
