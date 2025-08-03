import { Employee } from "../types/employee";
import { User } from "lucide-react";

interface EmployeeCardProps {
  employee: Employee;
  level: number;
}

const EmployeeCard = ({ employee, level }: EmployeeCardProps) => {
  const getDepartmentColor = (department?: string) => {
    const colors: Record<string, string> = {
      Executive: "bg-purple-100 border-purple-300 text-purple-800",
      Technology: "bg-blue-100 border-blue-300 text-blue-800",
      Engineering: "bg-green-100 border-green-300 text-green-800",
      Product: "bg-orange-100 border-orange-300 text-orange-800",
      Operations: "bg-red-100 border-red-300 text-red-800",
      restaurang: "bg-pink-100 border-pink-300 text-pink-800",
      Finance: "bg-yellow-100 border-yellow-300 text-yellow-800",
      Marketing: "bg-indigo-100 border-indigo-300 text-indigo-800",
    };
    return (
      colors[department || ""] || "bg-gray-100 border-gray-300 text-gray-800"
    );
  };

  const getCardSize = (level: number) => {
    if (level === 0) return "w-80 h-20"; // CEO
    if (level === 1) return "w-72 h-20"; // C-level
    if (level === 2) return "w-64 h-15"; // Directors/Leads
    return "w-56 h-15"; // Everyone else
  };

  return (
    <div
      className={`
        ${getCardSize(level)}
        ${getDepartmentColor(employee.department)}
        rounded-lg border-2 p-3 shadow-lg hover:shadow-xl transition-all duration-300
        transform hover:-translate-y-1 cursor-pointer
        flex flex-col justify-center overflow-hidden
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2 w-full">
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="font-bold text-sm leading-tight truncate">
              {employee.name}
            </h3>
            <p className="text-xs opacity-80 truncate">{employee.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;