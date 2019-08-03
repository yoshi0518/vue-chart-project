<script>
import { HorizontalBar } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
  name: 'HorizontalBarChart',
  extends: HorizontalBar,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
