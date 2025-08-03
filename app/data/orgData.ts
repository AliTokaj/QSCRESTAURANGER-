import { Employee } from "../types/employee";

export const organizationData: Employee = {
  id: "franchisetagare",
  name: "Claes-Göran Jönsson",
  title: "Franchisetagare",
  department: "Executive",
  reports: [
    {
      id: "marknad",
      name: "Annika Östlund",
      title: "Marknad",
      department: "Marketing",
    },
    {
      id: "hr-chef",
      name: "Helene Sköld",
      title: "HR-chef/koordinator",
      department: "Human restaurangources",
      reports: [
        {
          id: "hr-assistant-1",
          name: "Ida Jönsson",
          title: "HR-assistent",
          department: "Human restaurangources",
        },
        {
          id: "hr-assistant-2",
          name: "Felicia Ekeljung",
          title: "HR-assistent",
          department: "Human restaurangources",
        },
      ],
    },
    {
      id: "ekonomichef",
      name: "Anna-Carin Bladin",
      title: "Ekonomichef",
      department: "Finance",
      reports: [
        {
          id: "loner",
          name: "Ulrika Jacobson",
          title: "Löner",
          department: "Finance",
        },
        {
          id: "ekonomi",
          name: "Charlotte Odselius",
          title: "Ekonomi",
          department: "Finance",
        },
        {
          id: "administration",
          name: "Jenny Wikström",
          title: "Administration",
          department: "Finance",
        },
      ],
    },
    {
      id: "driftchef",
      name: "Omar Dabous",
      title: "Driftchef",
      department: "Operations",
      reports: [
        {
          id: "supervisor-1",
          name: "Amjad Kryem",
          title: "Supervisor",
          department: "Operations",
          reports: [
            {
              id: "marsta",
              name: "Märsta",
              title: "restaurang",
              department: "restaurang",
            },
          ],
        },
        {
          id: "supervisor-2",
          name: "Tamara Prokic",
          title: "Supervisor",
          department: "Operations",
          reports: [
            {
              id: "skrapan",
              name: "Skrapan, Västerås",
              title: "restaurang",
              department: "restaurang",
            },
            {
              id: "halla",
              name: "Hälla, Västerås",
              title: "restaurang",
              department: "restaurang",
            },
            {
              id: "stenby",
              name: "Stenby, Västerås",
              title: "restaurang",
              department: "restaurang",
            },
            {
              id: "erikslund",
              name: "Erikslund, Västerås",
              title: "restaurang",
              department: "restaurang",
            },
          ],
        },
        {
          id: "supervisor-3",
          name: "Max Lindberg",
          title: "Supervisor",
          department: "Operations",
        
          reports: [
            {
              id: "vasthaga",
              name: "Västhaga, Örebro",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "sodermalmsplan",
              name: "Södermalmsplan, Örebro",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "marieberg",
              name: "Marieberg, Örebro",
              title: "restaurang",
              department: "restaurang",
           
            },
          ],
        },
        {
          id: "supervisor-4",
          name: "Aron Yohannes",
          title: "Supervisor",
          department: "Operations",
        
          reports: [
            {
              id: "granby",
              name: "Gränby, Uppsala",
              title: "restaurang",
              department: "restaurang",
            
            },
            {
              id: "vaksala",
              name: "Vaksala, Uppsala",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "fyrislund",
              name: "Fyrislund, Uppsala",
              title: "restaurang",
              department: "restaurang",
            
            },
            {
              id: "bolandern",
              name: "Boländerna, Uppsala",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "bollnas",
              name: "Bollnäs",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "harnosand",
              name: "Härnösand",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "sj-sundsvall",
              name: "SJ, Sundsvall",
              title: "restaurang",
              department: "restaurang",
             
            },
            {
              id: "birsta",
              name: "Birsta, Sundsvall",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "bydalen",
              name: "Bydalen, Sundsvall",
              title: "restaurang",
              department: "restaurang",
              
            },
            {
              id: "lillange",
              name: "Lillänge, Östersund",
              title: "restaurang",
              department: "restaurang",
             
            },
            {
              id: "norr",
              name: "Norr, Östersund",
              title: "restaurang",
              department: "restaurang",
             
            },
            {
              id: "lindvallen",
              name: "Lindvallen, Sälen",
              title: "restaurang",
              department: "restaurang",
              
            },
          ],
        },
        {
          id: "tekniker",
          name: "Yousef Faraj",
          title: "Tekniker",
          department: "Technology",
        
        },
      ],
    },
  ],
};
