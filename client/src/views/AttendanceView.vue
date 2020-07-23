<template>
  <div class="row">
    <div class="col-12">
      <h2>Lecture-wise Attendance</h2>
      <table class="table table-hover text-center">
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
              <button
                class="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                @click="getSubjectAttendance(courseId)"
              >View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Detailed Attendance</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="row sticky-top">
              <div class="col font-weight-bold">DATE</div>
              <div class="col font-weight-bold">STATUS</div>
            </div>
            <div class="row" v-for="{date, status} in details" :key="date">
              <div class="col">{{date}}</div>
              <div class="col">{{status}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/index";
export default {
  name: "AttendanceView",
  data() {
    return {
      name: "",
      selectedChart: "",
      rollNumber: "",
      percentage: 0,
      required: 0,
      rows: [],
      details: [],
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
  methods: {
    async getSubjectAttendance(courseId) {
      try {
        const data = await Service.getSubjectAttendance("CO17359", courseId);
        this.details = data;
      } catch (err) {
        throw err;
      }
    },
  },
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
.modal-body {
  max-height: 300px;
  overflow: scroll;
  padding-top: 0px;
}
.modal-body .row {
  margin: auto;
  background-color: #ffffff;
}
.modal-body .row:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>