<template>
  <div class="polar-area-chart">
    <h1>鶏頭図</h1>
    <div class="chart-area">
      <CompPolarArea :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>ticksで目盛を指定</li>
      </ul>
    </div>

    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompPolarArea from '@/components/CompPolarArea.vue'
export default {
  name: 'polar-area-chart',
  components: {
    CompPolarArea,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          datasets: [
            {
              data: [18, 17, 12, 10, 3, 2, 4, 6, 5, 9, 11, 19],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '月別クラス病欠者数',
          },
          scale: {
            ticks: {
              suggestedMax: 25,
              suggestedMin: 0,
              stepSize: 3,
            },
          },
          plugins: {
            colorschemes: {
              scheme: 'brewer.SetThree12',
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
