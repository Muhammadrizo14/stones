import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendMailDto } from './helpers/entity';
import { PrismaService } from './prisma/prisma.service';
@Controller('')
export class AppController {
  constructor(private prismaService: PrismaService) { }

  @Post('sendmail')
  async create(@Body() sendMailDto: SendMailDto) {
    const nodemailer = require('nodemailer');

    var transporter = await nodemailer.createTransport({
      host: 'smtp.timeweb.ru',
      port: 25,
      auth: {
        user: 'info@vkamne.com',
        pass: 'UeYY7kld'
      }
    });

    var mailOptions = {
      from: 'Vkamne',
      to: 'iozxckali@gmail.com',
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
    let reviews = this.prismaService.reviews.findMany()
    return {
      services: (await services).length, 
      blog: (await blog).length, 
      stone: (await stone).length, 
      reviews: (await reviews).length
    }
  } 
}
