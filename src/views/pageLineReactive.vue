<template>
  <div class="line-reactive-chart">
    <h1>折れ線グラフ(リアクティブ)</h1>
    <div class="chart-area">
      <CompLineReactive ref="chart" :chart-data="chart_data" :options="options" />
    </div>
    <h2>データ操作</h2>
    <div class="button-area">
      <button @click="showChartData()">確認</button>
      <button @click="setInit()">初期化</button>
      <button @click="addLabel()">Label追加</button>
      <button @click="delLabel()">Label削除</button>
      <button @click="addDataset()">Dataset追加</button>
      <button @click="delDataset()">Dataset削除</button>
    </div>
    <h2>オプション操作</h2>
    <div class="button-area">
      <button @click="renderChart()">再描画</button>
    </div>
    <div class="option-area">
      <h3>Legend</h3>
      <div>
        <label><input type="radio" v-model="options.legend.position" value="top" /> top</label>
        <label><input type="radio" v-model="options.legend.position" value="left" /> left</label>
        <label><input type="radio" v-model="options.legend.position" value="right" /> right</label>
        <label><input type="radio" v-model="options.legend.position" value="bottom" /> bottom</label>
      </div>
      <h3>PointStyle</h3>
      <div>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="circle" /> circle</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="triangle" /> triangle</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="rect" /> rect</label>
        <label
          ><input type="radio" v-model="options.elements.point.pointStyle" value="rectRounded" /> rectRounded</label
        >
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="rectRot" /> rectRot</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="cross" /> cross</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="crossRot" /> crossRot</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="star" /> star</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="line" /> line</label>
        <label><input type="radio" v-model="options.elements.point.pointStyle" value="dash" /> dash</label>
      </div>
    </div>
    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompLineReactive from '@/components/CompLineReactive.vue'
export default {
  name: 'line-reactive',
  components: {
    CompLineReactive,
  },
  data() {
    return {
      chart_data: {},
      options: {
        title: {
          display: true,
          text: '乱数',
        },
        elements: {
          point: {
            pointStyle: 'rectRounded',
            radius: 6,
            hoverRadius: 10,
          },
        },
        legend: {
          display: true,
          position: 'top',
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '数値',
              },
              ticks: {
                suggestedMax: 50,
                suggestedMin: 0,
                stepSize: 5,
              },
            },
          ],
        },
        plugins: {
          colorschemes: {
            scheme: 'brewer.SetTwo8',
          },
        },
      },
      cnt_dataset: null,
      max_dataset: 5,
      cnt_label: null,
      max_label: 10,
      max_num: 50,
    }
  },
  mounted() {
    this.setInit()
  },
  methods: {
    // ChartDataをコンソール出力
    showChartData() {
      console.log(this.chart_data)
    },

    // Chart再描画
    renderChart() {
      this.$refs.chart.render()
    },

    // ChartDataを初期化
    setInit() {
      // 要素数を初期化
      this.cnt_dataset = 2
      this.cnt_label = 3

      // labels配列を準備
      const labels = []
      for (let i = 1; i <= this.cnt_label; i++) {
        labels.push(`Label${i}`)
      }

      // dataset配列を準備
      const datasets = []
      for (let i = 1; i <= this.cnt_dataset; i++) {
        const data = []
        for (let j = 1; j <= this.cnt_label; j++) {
          data.push(this.getRandom())
        }
        datasets.push({
          label: `Dataset${i}`,
          data: data,
          fill: false,
        })
      }

      // chart_dataを準備
      this.chart_data = {
        labels: labels,
        datasets: datasets,
      }
    },

    // Label追加
    addLabel() {
      if (!this.cnt_dataset) {
        alert('Datasetがありません')
        return
      }
      if (this.cnt_label === this.max_label) {
        alert(`Labelを${this.max_label + 1}個以上は追加できません`)
        return
      }

      // 要素数をインクリメント
      this.cnt_label += 1

      // labels追加
      this.chart_data.labels.push(`Label${this.cnt_label}`)

      // dataset追加
      for (let i = 0; i < this.cnt_dataset; i++) {
        this.chart_data.datasets[i].data.push(this.getRandom())
      }

      // 再描画
      this.renderChart()
    },

    // Label削除
    delLabel() {
      if (!this.cnt_dataset) {
        alert('Datasetがありません')
        return
      }
      if (!this.cnt_label) {
        alert('Labelがありません')
        return
      }

      // 要素数をデクリメント
      this.cnt_label -= 1

      // labels削除
      this.chart_data.labels.pop()

      // dataset削除
      for (let i = 0; i < this.cnt_dataset; i++) {
        this.chart_data.datasets[i].data.pop()
      }

      // 再描画
      this.renderChart()
    },

    // Dataset追加
    addDataset() {
      if (this.cnt_dataset === this.max_dataset) {
        alert(`Datasetを${this.max_dataset + 1}個以上は追加できません`)
        return
      }

      // 要素数をインクリメント
      this.cnt_dataset += 1

      // datasets追加
      const data = []
      for (let i = 0; i < this.cnt_label; i++) {
        data.push(this.getRandom())
      }

      this.chart_data.datasets.push({
        label: `Dataset${this.cnt_dataset}`,
        data: data,
        fill: false,
      })

      // 再描画
      this.renderChart()
    },

    // Dataset削除
    delDataset() {
      if (!this.cnt_dataset) {
        alert('Datasetがありません')
        return
      }

      // 要素数をデクリメント
      this.cnt_dataset -= 1

      // labels削除
      this.chart_data.datasets.pop()

      // 再描画
      this.renderChart()
    },

    // 乱数取得
    getRandom() {
      return Math.floor(Math.random() * (this.max_num + 1))
    },
  },
}
</script>

<style>
h2 {
  font-size: 18px;
}

.chart-area {
  margin: 0 auto;
  padding: 10px;
  width: 500px;
  height: auto;
}

button {
  padding: 5px 10px;
}

button + button {
  margin-left: 5px;
}
</style>
