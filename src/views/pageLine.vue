<template>
  <div class="line-chart">
    <h1>折れ線グラフ</h1>
    <div class="chart-area">
      <CompLine :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>オプションはタイトル、カラー指定のみ</li>
      </ul>
    </div>

    <div class="chart-area">
      <CompLine :data="chart2.data" :options="chart2.options" />
    </div>
    <div class="description">
      <ul>
        <li>最低気温は背景を塗りつぶし</li>
        <li>borderDashで最高気温の線の種類を指定</li>
        <li>lineTensionで線を直線に指定</li>
        <li>pointRadiusでポイントの大きさを指定</li>
        <li>pointStyleでポイントの種類を指定</li>
        <li>scaleLabelでY軸のタイトルを指定</li>
        <li>tooltipで値を１つのツールチップで表示</li>
        <li>ticksでY軸の目盛を指定</li>
      </ul>
    </div>

    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompLine from '@/components/CompLine.vue'
export default {
  name: 'line-chart',
  components: {
    CompLine,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: '最高気温(度)',
              data: [35, 34, 37, 35, 34, 35, 34],
              fill: false,
            },
            {
              label: '最低気温(度)',
              data: [25, 27, 27, 25, 26, 27, 25],
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '気温(8月1日～8月7日)',
          },
          plugins: {
            colorschemes: {
              scheme: 'tableau.Tableau20',
            },
          },
        },
      },
      // chart1 end
      // chart2 start
      chart2: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: '最高気温(度)',
              data: [35, 34, 37, 35, 34, 35, 34],
              borderDash: [5, 5],
              fill: false,
              pointRadius: 10,
              lineTension: 0,
            },
            {
              label: '最低気温(度)',
              data: [25, 27, 27, 25, 26, 27, 25],
              pointRadius: 10,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '気温(8月1日～8月7日)',
          },
          elements: {
            point: {
              pointStyle: 'triangle',
            },
          },
          tooltips: {
            mode: 'index',
            intersect: true,
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: '温度',
                },
                ticks: {
                  suggestedMax: 40,
                  suggestedMin: 20,
                  stepSize: 2,
                  callback: (value, index, values) => {
                    return value + '度'
                  },
                },
              },
            ],
          },
          plugins: {
            colorschemes: {
              scheme: 'tableau.NurielStone9',
            },
          },
        },
      },
      // chart2 end
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
