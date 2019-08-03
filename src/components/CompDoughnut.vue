<script>
import { Doughnut } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
  name: 'DoughnutChart',
  extends: Doughnut,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
