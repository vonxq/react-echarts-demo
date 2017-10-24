
import React from 'react'
import ReactEcharts from 'echarts-for-react'
class EchartTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xdata: [1, 2, 3, 4, 5, 6, 7],
      seriesData: [100, 700, 230, 370, 450, 260, 70],
      yRange: [392.96, 442.08],
    }
  }
  render () {
    let colors = ['#5793f3']
    const { seriesData, xdata, yRange } = this.state
    const option = {
      color: colors,
      title: {
        text: '存储状态',
        subtext: '纯属虚构',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56',
          },
        },
      },
      legend: {
        x: '40%',
        top: '0%',
        textStyle: {
          color: '#90979c',
        },
        // 和series中的name一一对应
        data: ['存储空间使用'],
      },
      toolbox: {
        show: true,
        left: 'center',
        feature: {
          magicType: {
            type: ['line', 'bar'],
          },
          restore: {},
          saveAsImage: {},
        },
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xdata,
        },
      ],
      yAxis: [
        {
          type: 'value',
          scale: true,
          name: '存储状态',
          min: 0,
          axisLine: {
            lineStyle: {
              color: colors[0],
            },
          },
          axisLabel: {
            formatter: '{value} G',
          },
        },
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [{
          min: 0,
          max: yRange[0],
          color: '#096',
        }, {
          min: yRange[0],
          max: yRange[1],
          color: '#e9a11b',
        }, {
          min: yRange[1],
          color: '#db5019',
        }],
        outOfRange: {
          color: '#999',
        },
      },
      series: [
        {
          name: '存储空间使用',
          type: 'line',
          xAxisIndex: 0,
          yAxisIndex: 0,
          areaStyle: {
            normal: {},
          },
          data: seriesData,
          markLine: {
            silent: false,
            label: {
              normal: {
                show: true,
                position: 'end',
                formatter: '{b}',
              },
              emphasis: {
                show: true,
                position: 'end',
                formatter: '{b}',
              },
            },
            data: [{
              name: '橙色预警',
              yAxis: yRange[0],
            }, {
              name: '红色预警',
              yAxis: yRange[1],
            }],
          },
        },
      ],
    }
    return (
      <div>
        <ReactEcharts
          option={option}
        />
      </div>
    )
  }
}
export default EchartTest
