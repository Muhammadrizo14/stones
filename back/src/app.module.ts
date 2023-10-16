import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { StonesModule } from './stones/stones.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ServiceModule } from './service/service.module';
import { UploadModule } from './upload/upload.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CirclestoneModule } from './circlestone/circlestone.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';
import { AppController } from './app.controller';
import { ProfileModule } from './profile/profile.module';
import { SliderModule } from './slider/slider.module';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [
    PrismaModule,
    StonesModule,
    ReviewsModule,
    ServiceModule,
    UploadModule,
    UsersModule,
    AuthModule,
    AuthModule,
    CirclestoneModule,
    BlogModule,
    CategoryModule,
    ProfileModule,
    SliderModule,
    YoutubeModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
