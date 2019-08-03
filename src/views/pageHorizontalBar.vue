<template>
  <div class="horizontal-bar-chart">
    <h1>横棒グラフ</h1>
    <div class="chart-area">
      <CompHorizontalBar :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>オプションはタイトル、カラー指定のみ</li>
      </ul>
    </div>

    <div class="chart-area">
      <CompHorizontalBar :data="chart2.data" :options="chart2.options" />
    </div>
    <div class="description">
      <ul>
        <li>ticksでY軸の目盛を指定</li>
      </ul>
    </div>

    <div class="chart-area">
      <CompHorizontalBar :data="chart3.data" :options="chart3.options" />
    </div>
    <div class="description">
      <ul>
        <li>stackedで積み上げを指定</li>
      </ul>
    </div>

    <div class="chart-area">
      <CompHorizontalBar :data="chart4.data" :options="chart4.options" />
    </div>
    <div class="description">
      <ul>
        <li>stackにより積み上げグループを指定</li>
      </ul>
    </div>
    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompHorizontalBar from '@/components/CompHorizontalBar.vue'
export default {
  name: 'horizontal-bar-chart',
  components: {
    CompHorizontalBar,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: 'A店 来客数',
              data: [62, -24, 93, 85, -34, 66, 47],
            },
            {
              label: 'B店 来客数',
              data: [55, 45, -15, 75, 41, 45, 58],
            },

            {
              label: 'C店 来客数',
              data: [33, 45, 62, -22, 31, 45, -5],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '支店別 来客数',
          },
          plugins: {
            colorschemes: {
              scheme: 'brewer.Accent8',
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
              label: 'A店 来客数',
              data: [62, 65, 93, 85, 51, 66, 47],
            },
            {
              label: 'B店 来客数',
              data: [55, 45, 73, 75, 41, 45, 58],
            },

            {
              label: 'C店 来客数',
              data: [33, 45, 62, 55, 31, 45, 38],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '支店別 来客数',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 100,
                  suggestedMin: 0,
                  stepSize: 10,
                  callback: (value, index, values) => {
                    return value + '人'
                  },
                },
              },
            ],
          },
          plugins: {
            colorschemes: {
              scheme: 'brewer.Paired12',
            },
          },
        },
      },
      // chart2 end
      // chart3 start
      chart3: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              label: 'A店 来客数',
              data: [62, -24, 93, 85, -34, 66, 47],
            },
            {
              label: 'B店 来客数',
              data: [55, 45, -15, 75, 41, 45, 58],
            },

            {
              label: 'C店 来客数',
              data: [33, 45, 62, -22, 31, 45, -5],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '支店別 来客数',
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  suggestedMax: 180,
                  suggestedMin: 0,
                  stepSize: 20,
                  callback: (value, index, values) => {
                    return value + '人'
                  },
                },
              },
            ],
          },
          plugins: {
            colorschemes: {
              scheme: 'brewer.SetThree12',
            },
          },
        },
      },
      // chart3 end
      // chart3 start
      chart4: {
        data: {
          labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
          datasets: [
            {
              stack: 'stack_0',
              label: 'A店 来客数',
              data: [62, -24, 93, 85, -34, 66, 47],
            },
            {
              stack: 'stack_1',
              label: 'B店 来客数',
              data: [55, 45, -15, 75, 41, 45, 58],
            },

            {
              stack: 'stack_0',
              label: 'C店 来客数',
              data: [33, 45, 62, -22, 31, 45, -5],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: '支店別 来客数',
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  suggestedMax: 180,
                  suggestedMin: 0,
                  stepSize: 20,
                  callback: (value, index, values) => {
                    return value + '人'
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
      // chart4 end
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
