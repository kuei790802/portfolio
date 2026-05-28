import { cn } from "@/lib/utils";

interface InfoTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export function InfoTable({ headers, rows }: InfoTableProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-900 text-white text-[11px] uppercase tracking-wider font-bold">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 border-r border-white/10 last:border-0">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, ri) => (
            <tr key={ri} className="bg-white hover:bg-slate-50 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-6 py-4 text-slate-600 border-r border-slate-100 last:border-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
