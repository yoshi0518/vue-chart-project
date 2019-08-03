<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.render()
  },
  methods: {
    render() {
      // mixinsがchartDataプロパティを自動生成する
      this.renderChart(this.chartData, this.options)
    },
  },
}
</script>
