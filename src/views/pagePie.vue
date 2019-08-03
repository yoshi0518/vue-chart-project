<template>
  <div class="line-chart">
    <h1>円グラフ</h1>
    <div class="chart-area">
      <CompPie :data="chart1.data" :options="chart1.options" />
    </div>
    <div class="description">
      <ul>
        <li>データセット１つ</li>
      </ul>
    </div>

    <div class="chart-area">
      <CompPie :data="chart2.data" :options="chart2.options" />
    </div>
    <div class="description">
      <ul>
        <li>データセット２つ</li>
      </ul>
    </div>
    <router-link to="/">Homeへ戻る</router-link>
  </div>
</template>

<script>
import CompPie from '@/components/CompPie.vue'
export default {
  name: 'pie-chart',
  components: {
    CompPie,
  },
  data() {
    return {
      // chart1 start
      chart1: {
        data: {
          labels: ['Data1', 'Data2', 'Data3', 'Data4', 'Data1'],
          datasets: [
            {
              label: 'Pattern1',
              data: [10, 30, 50, 20, 40],
            },
          ],
        },
        options: {
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
          labels: ['Data1', 'Data2', 'Data3', 'Data4', 'Data1'],
          datasets: [
            {
              label: 'Pattern1',
              data: [10, 30, 50, 20, 40],
            },
            {
              label: 'Pattern2',
              data: [50, 20, 40, 10, 30],
            },
          ],
        },
        options: {
          plugins: {
            colorschemes: {
              scheme: 'tableau.Tableau20',
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
