import React, { useState } from 'react';
import { Select } from 'antd';
import ReactECharts from 'echarts-for-react';
import ChartCard from './ChartCard'; // 导入 ChartCard 组件

const { Option } = Select;

function Dashboard({ createdCharts }) {
  const [chartType, setChartType] = useState('bar');

  console.log(
    '%c [  ]-11',
    'font-size:13px; background:pink; color:#bf2c9f;',
    createdCharts
  );
  return (
    <>
      {/* 根据选择的图表类型渲染图表 */}
      {/* Display all charts together using flex */}
      {!!createdCharts?.length && (
        <div className="flex flex-wrap p-4 mt-4 chart-container">
          {createdCharts?.map((chartConfig, index) => (
            <div key={index} className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ChartCard
                key={index}
                title={chartConfig.title.text} // 您可以设置适当的标题
                chartConfig={chartConfig}
              />
            </div>
          ))}
        </div>
      )}
      {!createdCharts?.length && (
        <div className="flex flex-col items-center h-[calc(100vh-60px)] text-center align-item justify-center">
          <img
            src="/src/assets/empty.png" // 图片路径，请根据您的项目目录结构自行调整
            alt="Empty Chart"
            width="150" // 调整图片的宽度和高度
            height="200"
            className="mb-4 ml-[25px]"
          />
          <p className="text-lg text-gray-500 ">暂无图表内容 !</p>
        </div>
      )}
    </>
  );
}

export default Dashboard;
