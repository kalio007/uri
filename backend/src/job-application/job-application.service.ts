import { Injectable } from '@nestjs/common';
import { JobApplication } from './job-application.model';

@Injectable()
export class JobApplicationService {
  private applications: JobApplication[] = [
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
  ];

  getAllApplications(): JobApplication[] {
    return this.applications;
  }

  getStatistics() {
    const total = this.applications.length;
    const countsByStatus = this.applications.reduce(
      (acc, app) => {
        acc[app.status] = (acc[app.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const countsByMonth = this.applications.reduce(
      (acc, app) => {
        const month = app.dateApplied.substring(0, 7); // YYYY-MM format
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return { total, countsByStatus, countsByMonth };
  }
}
