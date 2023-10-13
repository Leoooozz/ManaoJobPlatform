import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersService } from './job-offers.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobOffer } from './entities/job-offer.entity';
import { CreateJobOfferDto } from './dto/create-job-offer.dto';

describe('JobOffersService', () => {
  let jobOfferService: JobOffersService;
  let jobOfferRepository: Repository<JobOffer>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobOffersService,
        {
          provide: getRepositoryToken(JobOffer),
          useClass: Repository,
        },
      ],
    }).compile();

    jobOfferService = module.get<JobOffersService>(JobOffersService);
    jobOfferRepository = module.get<Repository<JobOffer>>(getRepositoryToken(JobOffer));
  });

  describe('createJobOffer', () => {
    it('should create a new job offer', async () => {
      // Préparez les données pour le test
      const createJobOfferDto: CreateJobOfferDto = {
        title: 'Software Engineer',
        description: 'Join our team as a software engineer.',
        company: 'Example Company',
        publication_date: new Date(),
        status: 'active',
      };

      // Définissez le comportement attendu de la méthode create du repository
      const saveSpy = jest.spyOn(jobOfferRepository, 'save').mockResolvedValue(createJobOfferDto as JobOffer);

      // Exécutez la méthode du service
      const result = await jobOfferService.createOffer(createJobOfferDto);

      // Vérifiez que la méthode du repository a été appelée avec les bons paramètres
      expect(saveSpy).toHaveBeenCalledWith(createJobOfferDto);

      // Vérifiez que la méthode retourne le résultat attendu
      expect(result).toEqual(createJobOfferDto);
    });
  });

  it('should be defined', () => {
    expect(jobOfferService).toBeDefined();
  });
});
