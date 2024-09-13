import React, { FC } from "react";
import TableHead from "./TableHead";

interface HistoryTableProps {
  columns: string[];
  title: string;
  description: string;
  rows: string[][];
}

const HistoryTable: FC<HistoryTableProps> = ({
  columns,
  title,
  description,
  rows,
}) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 mt-12 border-t border-gray-300 text-black">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-gray-700">{description}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((item,index) => (
                      <TableHead key={`${item}_${index}`} heading={item} />
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rows.map((row,index) => (
                    <tr key={`row_${index}`}>
                      {row.map((item,index) => (
                        <td key={`${item}_${index}`} className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{item}</div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTable;
