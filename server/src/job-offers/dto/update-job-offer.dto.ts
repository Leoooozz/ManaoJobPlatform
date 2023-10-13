import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class UpdateJobOfferDto {
    @ApiProperty()
    @IsString()
    title: string;
  
    @ApiProperty()
    @IsString()
    description: string;
  
    @ApiProperty()
    @IsString()
    company: string;
  
    @ApiProperty()
    @IsDate()
    publication_date: Date;
  
    @ApiProperty()
    @IsString()
    status: string;
}
