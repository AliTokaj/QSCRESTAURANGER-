"use client";
import { Employee } from "../types/employee";
import EmployeeCard from "./EmployeeCard";

interface OrgChartProps {
  employee: Employee;
  level?: number;
}

const OrgChart = ({ employee, level = 0 }: OrgChartProps) => {
  const hasReports = employee.reports && employee.reports.length > 0;
  const isSupervisorLevel =
    level === 1 &&
    employee.reports?.some((report) => report.title === "Supervisor");
  const isDriftchef = employee.title === "Driftchef";
  const connectingLineHeight = isDriftchef ? "h-0 md:h-0" : "h-0"; // Responsive height for Driftchef

  return (
    <div className="flex flex-col-reverse items-center min-w-fit">
      {/* Employee Card */}
      <div className="relative">
        <EmployeeCard employee={employee} level={level} />
        {hasReports && (
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${connectingLineHeight} bg-gray-400 top-full`}
          ></div>
        )}
      </div>

      {/* Reports Section */}
      {hasReports && (
        <div className="relative mb-4 md:mb-8">
          {employee.reports!.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-400 transform translate-y-4 hidden md:block"></div>
          )}

          {/* Reports Container */}
          <div
            className={`flex flex-col-reverse md:flex-row justify-center gap-2 md:gap-10 relative ${
              isSupervisorLevel ? "md:flex-nowrap" : "flex-wrap-reverse"
            }`}
          >
            {employee.reports!.map((report, index) => (
              <div key={report.id} className="relative mb-4 md:mb-0">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-0 bg-gray-400 bottom-0 translate-y-4"></div>
                <OrgChart employee={report} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgChart;
