<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["details"],
  watch: {
    details: function () {
      this.renderChart({
      labels: [
        'Present',
        'Absent',
        'Leave'
      ],
      options: {
        legend: {
          display: false // removing these remove the labels too
        }
      },
      datasets: [
        {
          label: "Attendance",
          backgroundColor: ["rgba(0, 255, 0, 0.3)","rgba(255, 0, 0, 0.3)","rgba(248, 193, 70, 0.3)"],
          borderColor: ["rgba(0, 255, 0, 0.35)","rgba(255, 0, 0, 0.35)","rgba(248, 193, 70, 0.35)"],
          borderWidth: 1,
          data: [this.details[0].present, this.details[0].absent, this.details[0].leave]
        }
      ]
    });
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        'Present',
        'Absent',
        'Leave'
      ],
      datasets: [
        {
          label: "Attendance",
          backgroundColor: ["rgba(0, 255, 0, 0.3)","rgba(255, 0, 0, 0.3)","rgba(0, 0, 255, 0.3)"],
          borderColor: ["rgba(0, 255, 0, 0.35)","rgba(255, 0, 0, 0.35)","rgba(0, 0, 255, 0.35)"],
          borderWidth: 1,
          data: [this.details[0].present, this.details[0].absent, this.details[0].leave]
        }
      ]
    });
  }
};
</script>