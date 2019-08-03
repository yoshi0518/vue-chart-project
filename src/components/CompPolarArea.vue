<script>
import { PolarArea } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
  name: 'PolarAreaChart',
  extends: PolarArea,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
