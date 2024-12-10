import React, { useState } from 'react';

export function BarChart() {
  const data = [
    { day: 'S', positive: 180, negative: -120 },
    { day: 'M', positive: 220, negative: -80 },
    { day: 'T', positive: 180, negative: -100 },
    { day: 'W', positive: 250, negative: -180 },
    { day: 'T', positive: 200, negative: -120 },
    { day: 'F', positive: 280, negative: -100 },
    { day: 'S', positive: 220, negative: -150 },
  ];

  const maxValue = Math.max(...data.map(d => Math.max(Math.abs(d.positive), Math.abs(d.negative))));
  const scale = 200 / maxValue;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Generate y-axis values
  const yAxisValues = Array.from({ length: 7 }, (_, i) => {
    const value = maxValue - (maxValue / 6) * i;
    return Math.round(value);
  });

  return (
    <div className="relative h-[350px] w-full pl-12 pr-4 pt-4 pb-8">
      {/* Background Grid */}
      <div className="absolute left-12 right-4 top-4 bottom-8 grid grid-rows-6">
        {yAxisValues.map((_, index) => (
          <div
            key={index}
            className="border-t border-gray-200 w-full"
          />
        ))}
      </div>

      {/* Y Axis */}
      <div className="absolute left-0 top-4 bottom-8 w-12 flex flex-col justify-between">
        {yAxisValues.map((value, index) => (
          <div key={index} className="flex items-center justify-end pr-2 h-6 -mt-3">
            <span className="text-xs text-gray-600">{value}</span>
          </div>
        ))}
      </div>

      {/* Y Axis Line */}
      <div className="absolute left-12 top-4 bottom-8 w-[1px] bg-gray-400" />

      {/* X Axis Line */}
      <div className="absolute left-12 right-4 bottom-8 h-[1px] bg-gray-400" />

      {/* Bars Container */}
      <div className="absolute left-12 right-4 top-4 bottom-8 flex items-center justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Bar */}
            <div className="h-[200px] w-8 flex flex-col justify-center relative">
              {/* Positive Bar */}
              <div
                className="w-full bg-green-400 rounded-t-sm transition-all duration-300"
                style={{
                  height: `${item.positive * scale}px`,
                }}
              />
              {/* Negative Bar */}
              <div
                className="w-full bg-red-400 rounded-b-sm transition-all duration-300"
                style={{
                  height: `${Math.abs(item.negative * scale)}px`,
                }}
              />
            </div>

            {/* X Axis Label */}
            <span className="absolute bottom-[-2rem] text-xs text-gray-600">{item.day}</span>

            {/* Hover Tooltip */}
            {hoveredIndex === index && (
              <div className="absolute bottom-full mb-2 bg-white p-2 rounded-lg shadow-lg text-xs border z-10">
                <div className="text-green-600">Positive: {item.positive}</div>
                <div className="text-red-600">Negative: {item.negative}</div>
                <div className="pt-1 border-t mt-1">
                  Total: {item.positive + item.negative}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
