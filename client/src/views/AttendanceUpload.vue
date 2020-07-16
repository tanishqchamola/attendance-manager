<template>
  <div class="container">
    {{val}}
    <div class="row">
      <div class="col">
        <select class="form-control" v-model="course">
          <!-- genrate all this options according to the courses of the teacher -->
          <option disabled>Select Course</option>
          <option value="CS-601">CS-601 Computer Networks and Security</option>
          <option value="CS-602">CS-602 Linear Algebra and Probability</option>
          <option selected value="CS-603">CS-603 Modeling and Simulation</option>
          <option value="CS-604">CS-604 Compiler Design</option>
          <option value="CS-605">CS-655C Data Mining and Analysis</option>
        </select>
      </div>
      <div class="col">
        <input type="date" name placeholder="Enter date" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Present</th>
              <th>Absent</th>
              <th>Leave</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ rollNumber, name  } in courseStudents" :key="rollNumber">
              <td>{{rollNumber}}</td>
              <td>{{name}}</td>
              <td>
                <input type="radio" v-model="val[rollNumber]" :name="rollNumber" value="P" />
              </td>
              <td>
                <input type="radio" v-model="val[rollNumber]" :name="rollNumber" value="A" />
              </td>
              <td>
                <input type="radio" v-model="val[rollNumber]" :name="rollNumber" value="L" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/index";
export default {
  name: "AttendanceUpload",
  data() {
    return {
      course: "",
      courseStudents: [],
      val: {
        sample: "hihi"
      }
    };
  },
  watch: {
    course: async function() {
      try {
        const data = await Service.getCourseStudents(this.course);
        console.log(data);
        // this.val = {};
        data.forEach(student => {
          this.val[student.rollNumber] = "";
        });
        this.courseStudents = data;
      } catch (err) {
        throw err;
      }
    }
  }
};
</script>