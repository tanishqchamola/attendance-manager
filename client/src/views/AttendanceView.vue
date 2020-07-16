<template>
  <div>
    <div class="row">
      <div class="col-6">
        <div class="my-card">
          <h6>Name: Tanishq Chamola</h6>
          <h6>Roll Number: CO17359</h6>
        </div>
      </div>
      <div class="col-6">
        <div class="row my-card">
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
    <div class="row">
      <div class="col-12">
        <div class="my-card">
          <h6>Lecture-wise Attendance</h6>
          <table class="table table-hover table-bordered text-center">
            <thead>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Total Lectures</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Leave</th>
                <th>Percentage</th>
                <th>Required</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="{courseId, title, lecture, present, absent, leave, percentage, required} in rows"
                :key="courseId"
              >
                <td>{{courseId}}</td>
                <td>{{title}}</td>
                <td>{{lecture}}</td>
                <td>{{present}}</td>
                <td>{{absent}}</td>
                <td>{{leave}}</td>
                <td>{{percentage}}%</td>
                <td>{{required}}</td>
                <td>
                  <button class="btn btn-info btn-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/index";
import Chart from "@/components/Chart";
export default {
  name: "AttendanceView",
  components: {
    Chart
  },
  data() {
    return {
      name: "",
      selectedChart: "",
      details: [],
      rollNumber: "",
      percentage: 0,
      required: 0,
      rows: []
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
    rows: function() {
      this.selectedChart = this.rows[0].courseId;
    },
    selectedChart: function() {
      this.details = this.rows.filter(
        row => row.courseId == this.selectedChart
      );
    }
  }
};
</script>

<style scoped>
.list-group {
  max-height: 250px;
  margin-top: 15px;
  margin-bottom: 15px;
  overflow: scroll;

  -webkit-overflow-scrolling: touch;
}
.list-group-item {
  font-size: 14px;
  padding: 0.6rem 1rem;
}
</style>