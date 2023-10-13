import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';

@Controller('job-offers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) { }

  @Post()
  create(@Body() createJobOfferDto: CreateJobOfferDto) {
    return this.jobOffersService.createOffer(createJobOfferDto);
  }

  @Get()
  getAll() {
    return this.jobOffersService.getAll();
  }

  @Get('company/:company')
  getByCompany(@Param('company') company: string) {
    return this.jobOffersService.findByCompany(company);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.jobOffersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJobOfferDto: UpdateJobOfferDto) {
    return this.jobOffersService.update(id, updateJobOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jobOffersService.removeOffer(id);
  }
}