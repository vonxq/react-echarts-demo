# 在React中使用Echarts  
echarts的使用主要是其option的配置
添加的package包为echarts-for-react, echarts（供echarts-for-react调用）
## 使用  
克隆程序，然后执行:  
```  
cd ./basic  
yarn  
npm run dev  
打开http://localhost:8080/即可查看  
# 项目打包  
npm run build  
```  
  
## 常用配置属性  
color: 配色方案，array  
title: object  
toolbox: 工具组件，可配置些工具  
legend: 图例组件,展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。  
xAxis: 直角坐标系 grid 中的 x 轴array，一般只配置一个，由data指定坐标轴内容  
      > 其元素属性:  
            type   
            data: array,可定义其textStyle  
  
yAxis: 定义y轴格式  
series: array，定义数据源，每个数组元素的name属性和legend需一一对应才能有legend控制隐藏显示  
      > 数组元素属性:   
          1. name  
          2. type  
          3. data数据源的y轴坐标信息，按x轴坐标排列  
          4. markLine: 标线，object,常用属性如下   
                1. label(object,定义显示文本信息，分normal和emphasis)  
                      子项（normal和emphasis）属性:  
                          1. show: bool，是否显示  
                          2. position： string 定义在何处显示，start，middle，end  
                          3. formatter: '{a}{b}{c}{d}'，其中b为data中的name字段  
                2. data: 标线的name和线条信息(可只定义xAxis or yAxis，默认贯穿坐标轴)  
visualMap: 可配置按y值分区域显示不同颜色区块  
  
## 动态加载数据  
只需动态替换xAxis和series的data即可  
## 更新日志