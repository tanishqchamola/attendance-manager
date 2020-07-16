<template>
  <div>
    <table class="table table-striped table-bordered text-center">
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
        <tr v-for="row in rows" :key="row.courseId">
          <td>{{row.courseId}}</td>
          <td>{{row.title}}</td>
          <td>{{row.lecture}}</td>
          <td>{{row.present}}</td>
          <td>{{row.absent}}</td>
          <td>{{row.leave}}</td>
          <td>{{row.percentage}}</td>
          <td>{{row.required}}</td>
          <td>
            <button class="btn btn-info btn-sm">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Service from "@/service/index";
export default {
  name: "Dashboard",
  data() {
    return {
      name: "",
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
  }
};
</script>
