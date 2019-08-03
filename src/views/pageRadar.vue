<template>
  <div class="radar-chart">
    <h1>レーダーチャート</h1>
    <div class="chart-area">
      <CompRadar :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>fillで塗りつぶしを指定</li>
        <li>lineTensionで線の曲線を指定</li>
        <li>borderDashで線の種類を指定</li>
        <li>borderWidthで線の太さを指定</li>
        <li>pointStyleでポイントの種類を指定</li>
        <li>pointRadiusでポイントの大きさを指定</li>
        <li>ticksで目盛を指定</li>
      </ul>
    </div>

    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompRadar from '@/components/CompRadar.vue'
export default {
  name: 'radar-chart',
  components: {
    CompRadar,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['英語', '数学', '国語', '理科', '社会'],
          datasets: [
            {
              label: 'Aさん',
              data: [80, 60, 50, 70, 30],
              fill: false,
              lineTension: 0.3,
            },
            {
              label: 'Bさん',
              data: [50, 30, 90, 80, 70],
              borderDash: [5, 5],
              borderWidth: 5,
            },
            {
              label: 'Cさん',
              data: [30, 20, 10, 50, 30],
              pointStyle: 'rect',
              pointRadius: 10,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '試験結果',
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scale: {
            ticks: {
              suggestedMax: 100,
              suggestedMin: 0,
              stepSize: 20,
              callback: (value, index, values) => {
                return value + '点'
              },
            },
          },
          plugins: {
            colorschemes: {
              scheme: 'tableau.Tableau20',
            },
          },
        },
      },
      // chart1 end
    }
  },
}
</script>

<style>
.chart-area {
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  height: auto;
}

.description {
  margin: 10px auto;
  padding: 10px;
  width: 800px;
  border-radius: 20px;
  background-color: #cfedb7;
  text-align: left;
}

.dexcription > ul {
  list-style-type: square;
}
</style>
