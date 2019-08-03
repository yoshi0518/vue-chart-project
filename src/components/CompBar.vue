<script>
import { Bar } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
  name: 'BarChart',
  extends: Bar,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
