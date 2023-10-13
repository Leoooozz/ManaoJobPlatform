import { IsString, IsDate } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateJobOfferDto {

    @ApiProperty({ type: String })
    @IsString()
    title: string;

    @ApiProperty({ type: String })
    @IsString()
    description: string;

    @ApiProperty({ type: String })
    @IsString()
    company: string;

    @ApiProperty({ type: Date })
    @IsDate()
    publication_date: Date;

    @ApiProperty({ type: String })
    @IsString()
    status: string;
}