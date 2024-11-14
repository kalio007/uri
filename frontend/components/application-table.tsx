import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllApplications } from "@/services/job-application";
import { JobApplication } from "@/types/application";

// Sample job application data
const jobApplications = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    companyName: "TechCorp",
    status: "Accepted",
    dateApplied: "2024-10-12",
  },
  {
    id: "2",
    jobTitle: "Backend Engineer",
    companyName: "Innovatech",
    status: "Pending",
    dateApplied: "2024-11-01",
  },
  {
    id: "3",
    jobTitle: "Full Stack Developer",
    companyName: "Soft Solutions",
    status: "Rejected",
    dateApplied: "2024-09-18",
  },
  {
    id: "4",
    jobTitle: "DevOps Engineer",
    companyName: "Cloudify",
    status: "Accepted",
    dateApplied: "2024-10-20",
  },
  {
    id: "5",
    jobTitle: "Data Scientist",
    companyName: "DataHub",
    status: "Pending",
    dateApplied: "2024-11-10",
  },
];

export default function ApplicationTable() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const data = await fetchAllApplications();
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Table>
      <TableCaption>A list of your recent job applications.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Job Title</TableHead>
          <TableHead>Company Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Date Applied</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application.id}>
            <TableCell className="font-medium">
              {application.jobTitle}
            </TableCell>
            <TableCell>{application.companyName}</TableCell>
            <TableCell>{application.status}</TableCell>
            <TableCell className="text-right">
              {application.dateApplied}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>
            Showing {applications.length} job applications
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
