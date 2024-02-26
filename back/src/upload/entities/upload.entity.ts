export class UploadEntity {
  id: number;
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;


  // relations
  serviceTitle: string;
  circleStoneId: number;
  stoneId: number;
  blogId: number;
  profileId: number;
  partnerId: number;
  sliderId: number;
}
