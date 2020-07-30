<template>
  <div>
    <div class="row">
      <div class="col-6">
        <div class="my-card">
          <h2>Name: Tanishq Chamola</h2>
          <h2>Roll Number: CO17359</h2>
          <Modal />
        </div>
      </div>
      <div class="col-6">
        <div class="my-card2">
          <div class="row">
            <div class="col-6 m-auto">
              <Chart v-bind:details="details" />
            </div>
            <div class="col-6">
              <ul class="list-group">
                <li
                  v-for="{ courseId, title } in rows"
                  @click="selectedChart = courseId"
                  :key="courseId"
                  :class="{active: selectedChart === courseId}"
                  class="list-group-item"
                >{{title}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/index";
import Chart from "@/components/Chart";
import Modal from "@/components/Modal";
export default {
  name: "Dashboard",
  components: {
    Chart,
    Modal
  },
  data() {
    return {
      name: "",
      selectedChart: "",
      details: [],
      rollNumber: "",
      percentage: 0,
      required: 0,
      rows: [],
    };
  },
  async created() {
    try {
      const data = await Service.getStudentProcessed("CO17359");
      this.rows = data;
    } catch (err) {
      throw err;
    }
  },
  watch: {
    rows: function () {
      this.selectedChart = this.rows[0].courseId;
    },
    selectedChart: function () {
      this.details = this.rows.filter(
        (row) => row.courseId == this.selectedChart
      );
    },
  },
};
</script>

<style scoped>
.list-group {
  max-height: 275px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.list-group-item {
  font-size: 14px;
  padding: 0.6rem 1rem;
}
.my-card2 {
  padding: 0px 0px 0px 32px;
  border-radius: 0.75rem;
  box-shadow: 0 9px 37px rgba(13, 38, 76, 0.07);
}
</style>