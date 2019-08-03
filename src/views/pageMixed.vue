<template>
  <div class="mixed-chart">
    <h1>混合グラフ</h1>
    <div class="chart-area">
      <CompBar :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>棒グラフコンポーネントをベースとし、2つ目のデータセットで折れ線グラフを指定</li>
        <li>yAxisIDで表示するY軸を複数指定</li>
        <li>borderWidthで罫線の太さを指定</li>
        <li>fillで塗りつぶしを指定</li>
        <li>lineTensionで折れ線グラフを直線に指定</li>
        <li>pointRadius、pointHoverRadiusで通常・ホバー時のポイントの大きさを指定</li>
        <li>pointStyleでポイントのスタイルを指定</li>
      </ul>
    </div>

    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompBar from '@/components/CompBar.vue'
export default {
  name: 'mixed-chart',
  components: {
    CompBar,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: '売上高',
              data: [30, 40, 50, 20, 45, 35, 30],
              yAxisID: 'left-y-axis',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 3,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
            },
            {
              label: '来店客数',
              type: 'line',
              data: [900, 1200, 1500, 600, 1350, 1050, 900],
              yAxisID: 'right-y-axis',
              fill: false,
              lineTension: 0,
              borderWidth: 3,
              pointRadius: 8,
              pointHoverRadius: 10,
              pointStyle: 'rectRounded',
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '売上高−来店客数',
          },
          scales: {
            yAxes: [
              {
                id: 'left-y-axis',
                position: 'left',
                ticks: {
                  suggestedMax: 65,
                  suggestedMin: 0,
                  stemSize: 10,
                  callback: (value, index, values) => {
                    return value + '万円'
                  },
                },
              },
              {
                id: 'right-y-axis',
                position: 'right',
                ticks: {
                  suggestedMax: 1600,
                  suggestedMin: 0,
                  stemSize: 200,
                  callback: (value, index, values) => {
                    return value + '人'
                  },
                },
              },
            ],
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
