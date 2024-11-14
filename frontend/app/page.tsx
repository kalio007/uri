import ApplicationTable from "@/components/application-table";
import ApplicationStatistics from "@/components/ApplicationStatistics";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 pb-20 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <ApplicationStatistics />
      <ApplicationTable />
    </div>
  );
}
