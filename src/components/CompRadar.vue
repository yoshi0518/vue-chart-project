<script>
import { Radar } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
  name: 'RadarChart',
  extends: Radar,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
