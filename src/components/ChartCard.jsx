import React, { useState } from 'react';
import ChartConfigDrawer from './ChartConfigDrawer'; // 引入 ChartConfigDrawer 组件
import ReactECharts from 'echarts-for-react';
import CustomDrawer from './Drawer';
function ChartCard({ title, chartConfig }) {
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  const toggleConfigDrawer = () => {
    setIsConfigDrawerOpen(!isConfigDrawerOpen);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    console.log('关闭 Drawer');

    setIsDrawerOpen(false);
  };
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        {/* <button
          onClick={openDrawer}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          配置
        </button> */}
      </div>
      <CustomDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        width={500}
      ></CustomDrawer>
      <div className="mt-4">
        {/* 在这里渲染图表 */}
        <ReactECharts
          option={{ ...chartConfig, title: { text: '' } }}
          className="w-full h-[400px]"
        />
      </div>
    </div>
  );
}

export default ChartCard;
