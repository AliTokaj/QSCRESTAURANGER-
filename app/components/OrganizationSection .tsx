import OrgChart from "../components/OrgChart";
import { organizationData } from "../data/orgData";

const OrganizationSection = () => {
  const countEmployees = (employee: any): number => {
    let count = 1;
    if (employee.reports) {
      employee.reports.forEach((report: any) => {
        count += countEmployees(report);
      });
    }
    return count;
  };

  return (
    <div>
      <div className="text-center mb-16 mt-30">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
                      <span className="bg-[#FFFDD0] "> Organisationsträd</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-lg ">
          
          Vår organisation är uppbyggd för att möta både medarbetarnas och
          gästernas behov tydligt, effektivt och med framtiden i fokus.
        </p>
      </div>

      <div className="w-full">
        <img
          src="/orgtrad-2025-w.png"
          alt="Organisationsträd"
          className="mx-auto"
        />
      </div>
      {/* 
        <div className="bg-white   p-8 overflow-x-auto w-full">
          <div className="w-full">
            <OrgChart employee={organizationData} />
          </div>
        </div>*/}
    </div>
  );
};

export default OrganizationSection;
