"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import chartData from "@/data/citizens-united.json";

type TabId = "outside" | "superpac" | "dark";

const tabs: { id: TabId; label: string }[] = [
  { id: "outside", label: "Total Outside Spending" },
  { id: "superpac", label: "Super PAC Spending" },
  { id: "dark", label: "Dark Money" },
];

const colors = chartData.chartConfig.colors;

function getBarColor(era: string) {
  switch (era) {
    case "pre": return colors.pre;
    case "post": return colors.post;
    case "projected": return colors.projected;
    default: return colors.post;
  }
}

function formatValue(val: number) {
  if (val >= 1000) return `$${(val / 1000).toFixed(1)}B`;
  return `$${val}M`;
}

export default function CitizensUnitedChart() {
  const [activeTab, setActiveTab] = useState<TabId>("outside");

  const dataMap: Record<TabId, typeof chartData.outsideSpending> = {
    outside: chartData.outsideSpending,
    superpac: chartData.superPacSpending,
    dark: chartData.darkMoney,
  };

  const data = dataMap[activeTab];

  return (
    <div>
      <div className="flex gap-0 border-b border-border mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-heading text-[12px] tracking-[2px] uppercase py-3.5 px-7 bg-transparent border-none cursor-pointer border-b-2 transition-all ${
              activeTab === tab.id
                ? "text-white border-b-red"
                : "text-muted border-b-transparent hover:text-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-[#161b22] border border-border p-6 rounded">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#21262d" />
            <XAxis
              dataKey="year"
              stroke="#e0e0e0"
              tick={{ fill: "#e0e0e0", fontSize: 12, fontFamily: "Arial" }}
            />
            <YAxis
              stroke="#e0e0e0"
              tick={{ fill: "#e0e0e0", fontSize: 12, fontFamily: "Arial" }}
              tickFormatter={(val) => formatValue(val)}
            />
            <Tooltip
              contentStyle={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "#e0e0e0",
                fontFamily: "Arial",
                fontSize: 13,
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [formatValue(value as number), "Spending"]}
              labelFormatter={(label) => `Year: ${label}`}
            />
            <ReferenceLine
              x="2010"
              stroke={colors.referenceLineCU}
              strokeDasharray="5 5"
              label={{
                value: "Citizens United (2010)",
                position: "top",
                fill: colors.referenceLineCU,
                fontSize: 11,
                fontFamily: "Arial",
              }}
            />
            <Bar dataKey="spending" radius={[2, 2, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.era)}
                  fillOpacity={entry.era === "projected" ? 0.7 : 1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="flex gap-6 justify-center mt-4 font-heading text-[11px]">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 inline-block" style={{ background: colors.pre }} />
            <span className="text-muted">Pre-CU</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 inline-block" style={{ background: colors.post }} />
            <span className="text-muted">Post-CU</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 inline-block" style={{ background: colors.projected }} />
            <span className="text-muted">Projected</span>
          </span>
        </div>
      </div>
    </div>
  );
}
