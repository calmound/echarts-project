// 获取柱状图的配置
export function getBarChartOption() {
  return {
    title: {
      text: '柱状图示例',
    },
    tooltip: {},
    legend: {
      data: ['销售量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销售量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
}

// 假设有一个饼图的配置
export function getPieChartOption() {
  return {
    title: {
      text: '饼图示例',
    },
    tooltip: {},
    legend: {
      data: ['衬衫', '羊毛衫', '雪纺衫'],
    },
    series: [
      {
        name: '销售量',
        type: 'pie',
        data: [
          { value: 335, name: '衬衫' },
          { value: 310, name: '羊毛衫' },
          { value: 234, name: '雪纺衫' },
        ],
      },
    ],
  };
}

// 3. 折线图
export function getLineChartOption() {
  return {
    title: {
      text: '折线图示例',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['一', '二', '三', '四', '五', '六', '日'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
}

// 4. 散点图
export function getScatterChartOption() {
  return {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10, 10],
          [15, 20],
          [20, 25],
          [25, 30],
          [30, 35],
        ],
        type: 'scatter',
      },
    ],
  };
} // 5. 雷达图
export function getRadarChartOption() {
  return {
    radar: {
      indicator: [
        { name: '品质', max: 6500 },
        { name: '环境', max: 16000 },
        { name: '服务', max: 30000 },
        { name: '价格', max: 38000 },
        { name: '口感', max: 52000 },
      ],
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000],
            name: '某产品',
          },
        ],
      },
    ],
  };
}

// 6. 漏斗图
export function getFunnelChartOption() {
  return {
    series: [
      {
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 60, name: '访问' },
          { value: 40, name: '咨询' },
          { value: 20, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' },
        ],
      },
    ],
  };
}

// 8. 烛台图（K线图）
export function getCandlestickChartOption() {
  return {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
    },
    yAxis: {},
    series: {
      type: 'candlestick',
      data: [
        [20, 30, 10, 18],
        [10, 20, 5, 15],
        [15, 24, 13, 20],
        [18, 28, 10, 20],
      ],
    },
  };
}

// 9. 仪表盘
export function getGaugeChartOption() {
  return {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            color: [
              [0.2, '#91c7ae'],
              [0.8, '#63869e'],
              [1, '#c23531'],
            ],
            width: 8,
          },
        },
        pointer: {
          itemStyle: {
            color: 'auto',
          },
        },
        data: [{ value: 50 }],
      },
    ],
  };
}

// 10. 旭日图
export function getSunburstChartOption() {
  return {
    series: {
      type: 'sunburst',
      data: [
        {
          name: '父节点1',
          value: 10,
          children: [
            {
              name: '子节点1',
              value: 4,
            },
            {
              name: '子节点2',
              value: 6,
            },
          ],
        },
        {
          name: '父节点2',
          value: 20,
        },
      ],
    },
  };
}