export interface Employee {
  id: string;
  name: string;
  title: string;
  department?: string;
  avatar?: string;
  reports?: Employee[];
}