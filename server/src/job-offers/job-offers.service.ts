import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JobOffer } from './entities/job-offer.entity';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';
import { UpdateJobOfferDto } from './dto/update-job-offer.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class JobOffersService {
  constructor(
    @InjectRepository(JobOffer)
    private jobOfferRepository: Repository<JobOffer>,
  ) { }

  async createOffer(createJobOfferDto: CreateJobOfferDto): Promise<JobOffer> {
    const jobOffer: JobOffer = new JobOffer();
    jobOffer.title = createJobOfferDto.title;
    jobOffer.description = createJobOfferDto.description;
    jobOffer.company = createJobOfferDto.company;
    jobOffer.publication_date = createJobOfferDto.publication_date;
    jobOffer.status = createJobOfferDto.status;
    return await this.jobOfferRepository.save(jobOffer);
  }

  async getAll() {
    return this.jobOfferRepository.find();
  }

  async findById(id: number) {
    return this.jobOfferRepository.findOneBy({ id });
  }

  async findByCompany(company: string) {
    return this.jobOfferRepository.findBy({ company });
  }

  async update(id: number, updateJobOfferDto: UpdateJobOfferDto): Promise<JobOffer> {
    const jobOffer = await this.findById(id);

    if (!jobOffer) {
      throw new NotFoundException(`L'offre d'emploi avec l'ID ${id} n'a pas été trouvée.`);
    }

    if (updateJobOfferDto.title) {
      jobOffer.title = updateJobOfferDto.title;
    }

    if (updateJobOfferDto.description) {
      jobOffer.description = updateJobOfferDto.description;
    }

    if (updateJobOfferDto.company) {
      jobOffer.company = updateJobOfferDto.company;
    }

    if (updateJobOfferDto.publication_date) {
      jobOffer.publication_date = updateJobOfferDto.publication_date;
    }

    if (updateJobOfferDto.status) {
      jobOffer.status = updateJobOfferDto.status;
    }
    return this.jobOfferRepository.save(jobOffer);
  }
  remove(id: number) {
    return `This action removes a #${id} jobOffer`;
  }

  async removeOffer(id: number) {
    const jobOffer = await this.findById(id);
    if (!jobOffer) {
      throw new NotFoundException(`L'offre d'emploi avec l'ID ${id} n'a pas été trouvée.`);
    }
    return this.jobOfferRepository.delete(id)
  }
}
