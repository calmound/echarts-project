import React, { useState, useRef, useEffect } from 'react';
import {
  getBarChartOption,
  getPieChartOption,
  getScatterChartOption,
  getLineChartOption,
  getCandlestickChartOption,
  getRadarChartOption,
  getFunnelChartOption,
  getGaugeChartOption,
  getSunburstChartOption,
} from '../utils';

const chartConfigFunctions = {
  bar: getBarChartOption,
  pie: getPieChartOption,
  line: getLineChartOption,
  scatter: getScatterChartOption,
  radar: getRadarChartOption,
  funnel: getFunnelChartOption,
  candlestick: getCandlestickChartOption,
  gauge: getGaugeChartOption,
  sunburst: getSunburstChartOption,
};

function createChartConfig(chartType) {
  // 根据图表类型查找相应的配置函数
  const chartConfigFunction = chartConfigFunctions[chartType];

  if (chartConfigFunction) {
    // 调用配置函数并返回配置对象
    return chartConfigFunction();
  } else {
    console.error(`未知的图表类型: ${chartType}`);
    // return getDefaultChartOption(); // 提供默认的配置选项或返回一个空配置
  }
}

function ChartConfigurator({
  setCreatedCharts,
  createdCharts,
  onChartCreation,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // 使用 ref 跟踪下拉菜单的 DOM 节点

  const chartTypes = [
    { type: 'bar', label: '柱状图' },
    { type: 'pie', label: '饼图' },
    { type: 'line', label: '折线图' },
    { type: 'scatter', label: '散点图' },
    { type: 'radar', label: '雷达图' },
    { type: 'funnel', label: '漏斗图' },
    { type: 'candlestick', label: '烛台图' },
    { type: 'gauge', label: '仪表盘' },
    { type: 'sunburst', label: '旭日图' },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // 添加事件监听器
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // 清除事件监听器
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className=" bg-[#b0c4de] text-gray-800 rounded px-4 py-2 hover:bg-[#708ab0] focus:outline-none hover:outline-none hover:border-none"
      >
        新建图表
      </button>
      {showDropdown && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gray-200 border border-gray-300 rounded">
          {chartTypes.map((chartType) => (
            <div
              key={chartType.type}
              onClick={() => {
                const englishType = chartType.type; // 获取英文类型
                const chartConfig = createChartConfig(englishType); // 创建图表配置

                setCreatedCharts([...createdCharts, chartConfig]); // 将新图表配置添加到已创建的图表数组中
                setShowDropdown(false); // 关闭下拉菜单
              }}
              className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-300"
            >
              {chartType.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChartConfigurator;
