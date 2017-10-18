<template>
  <div ref="chart" style="width: 300px;height:300px;"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'HelloWorld',
  mounted () {
    var chart = echarts.init(this.$refs.chart)
    this.$nextTick(() => {
      chart.setOption({
        title: {
          text: 'demo01',
          textAlign: 'center',
          left: '50%'
        },
        tooltip: {},
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [{
          name: 'n',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    })
  }
}
</script>
