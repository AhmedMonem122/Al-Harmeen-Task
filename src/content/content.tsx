import * as ProgressPrimitive from "@radix-ui/react-progress";

const content = {
  dashboardCards: [
    {
      id: 1,
      title: "Project Status",
      number: "75%",
    },
    {
      id: 2,
      title: "Pending Tasks",
      number: "12",
    },
    {
      id: 3,
      title: "Notifications",
      number: "3",
    },
  ],
  dashboardRecentProjects: [
    {
      id: 1,
      projectName: "Grandview Estates",
      status: "In Progress",
      dueDate: "2024-08-15",
      progress: 75,
    },
    {
      id: 2,
      projectName: "Riverbend Residences",
      status: "Completed",
      dueDate: "2024-06-20",
      progress: 100,
    },
    {
      id: 3,
      projectName: "Oakwood Commercial",
      status: "Planning",
      dueDate: "2024-12-01",
      progress: 20,
    },
  ],
  columns: [
    {
      accessorKey: "projectName",
      header: "Project Name",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "dueDate",
      header: "Due Date",
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: ({ row }: { row: { getValue: (key: string) => number } }) => {
        const progress = row.getValue("progress");
        return (
          <div className="flex items-center gap-2">
            <span className="w-10 text-right font-medium text-[14px] leading-[21px] text-dark-black">
              {progress}%
            </span>
            <ProgressPrimitive.Root
              className="h-2 w-[100px] border bg-border-input rounded-[8px]"
              value={progress}
            >
              <ProgressPrimitive.Indicator
                className="h-full flex-1 transition-all bg-primary-blue duration-500 rounded-[8px]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </ProgressPrimitive.Root>
          </div>
        );
      },
    },
  ],
};

export default content;
