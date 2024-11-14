"use client";

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
