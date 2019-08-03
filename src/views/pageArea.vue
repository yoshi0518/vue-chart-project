<template>
  <div class="line-chart">
    <h1>面グラフ</h1>
    <div class="chart-area">
      <CompLine :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>面グラフはLineを利用</li>
        <li>fillの設定で塗りつぶしをコントロール</li>
      </ul>
    </div>

    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompLine from '@/components/CompLine.vue'
export default {
  name: 'area-chart',
  components: {
    CompLine,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日'],
          datasets: [
            {
              label: 'PC-1',
              data: [4, 6, 8, 7, 5, 2],
              lineTension: 0.3,
              fill: 'origin',
              borderDash: [5, 5],
              pointRadius: 5,
            },
            {
              label: 'PC-2',
              data: [12, 18, 13, 15, 16, 11],
              lineTension: 0,
              fill: 0, // 1つ目のデータセットまで塗りつぶし
              pointRadius: 10,
              pointStyle: 'rectRot',
            },
            {
              label: 'PC-3',
              data: [19, 21, 17, 20, 22, 19],
              lineTension: 0,
              fill: 1, // 2つ目のデータセットまで塗りつぶし
              borderWidth: 5,
              pointRadius: 5,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '製品別売上数',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 25,
                  suggestedMin: 0,
                  stepSize: 5,
                  callback: (value, index, values) => {
                    return value + '台'
                  },
                },
              },
            ],
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
