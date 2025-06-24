import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import content from "@/content/content";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/use-auth";

const Dashboard = () => {
  const { userData } = useAuth();

  const table = useReactTable({
    data: content.dashboardRecentProjects,
    columns: content.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="py-5">
      <div className="w-[92%] sm:w-1/2 mx-auto flex flex-col gap-3">
        <h1 className="font-bold text-2xl sm:text-[32px] leading-10 text-dark-black mb-8">
          Welcome {userData?.FirstName} {userData?.LastName} to Your Dashboard
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.dashboardCards.map((card) => (
            <div
              className="flex flex-col gap-2 rounded-[8px] p-6 bg-dashboard-card text-dark-black"
              key={card.id}
            >
              <p className="font-medium leading-6">{card.title}</p>
              <span className="font-bold text-2xl leading-[30px]">
                {card.number}
              </span>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-[22px] leading-7 text-dark-black mt-9 mb-6">
          Recent Projects
        </h3>

        <div className="rounded-[8px] border border-border-input overflow-hidden">
          <Table>
            <TableHeader className="bg-dark-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="p-4 font-medium text-[14px] leading-[21px] text-dark-black"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const isProjectName = cell.column.id === "projectName";
                    const isDueDate = cell.column.id === "dueDate";
                    const isStatus = cell.column.id === "status";

                    return (
                      <TableCell
                        key={cell.id}
                        className={`p-5 ${
                          isProjectName
                            ? "text-[14px] leading-[21px] text-dark-black"
                            : isDueDate
                            ? "text-[14px] leading-[21px] text-dark-blue"
                            : ""
                        }`}
                      >
                        {isStatus ? (
                          <Button className="px-[16px] rounded-[8px] bg-dashboard-card font-medium text-[14px] leading-[21px] text-dark-black cursor-pointer hover:opacity-90 transition hover:bg-dashboard-card/90">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Button>
                        ) : (
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
