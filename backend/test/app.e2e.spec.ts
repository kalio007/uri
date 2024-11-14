import { Test, TestingModule } from '@nestjs/testing';
import { JobApplicationService } from '../src/job-application/job-application.service';
import { JobApplication } from '../src/job-application/job-application.model';

describe('JobApplicationService', () => {
  let service: JobApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobApplicationService],
    }).compile();

    service = module.get<JobApplicationService>(JobApplicationService);
  });

  describe('getAllApplications', () => {
    it('should return all job applications', () => {
      const result: JobApplication[] = service.getAllApplications();

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
      expect(result).toEqual([
        {
          id: '1',
          jobTitle: 'Frontend Developer',
          companyName: 'TechCorp',
          status: 'accepted',
          dateApplied: '2024-10-12',
        },
        {
          id: '2',
          jobTitle: 'Backend Developer',
          companyName: 'Innovatech',
          status: 'pending',
          dateApplied: '2024-09-20',
        },
      ]);
    });
  });

  describe('getStatistics', () => {
    it('should return correct statistics for the job applications', () => {
      const stats = service.getStatistics();

      expect(stats).toBeDefined();
      expect(stats.total).toBe(2);
      expect(stats.countsByStatus).toEqual({
        accepted: 1,
        pending: 1,
      });
      expect(stats.countsByMonth).toEqual({
        '2024-10': 1,
        '2024-09': 1,
      });
    });
  });
});
