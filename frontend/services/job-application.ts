import apiClient from "./apiClient";
import { JobApplication } from "../types/application";


export const fetchAllApplications = async (): Promise<JobApplication[]> => {
  const response = await apiClient.get("/applications");
  return response.data;
};


export const fetchApplicationStats = async (): Promise<any> => {
  const response = await apiClient.get("/applications/stats");
  return response.data;
};
