import { Controller, Get } from '@nestjs/common';
import { JobApplicationService } from './job-application.service';

@Controller('applications')
export class JobApplicationController {
  constructor(private readonly jobService: JobApplicationService) {}

  @Get()
  getAll() {
    return this.jobService.getAllApplications();
  }

  @Get('stats')
  getStats() {
    return this.jobService.getStatistics();
  }
}
