<template>
  <div>
    present: {{present}}
    absent: {{absent}}
    leave: {{leave}}
    date: {{date}}
    course: {{course}}
    <div class="row">
      <div class="col">
        <select class="form-control" v-model="course">
          <!-- genrate all this options according to the courses of the teacher -->
          <option disabled>Select Course</option>
          <option value="CS-601">CS-601 Computer Networks and Security</option>
          <option value="CS-602">CS-602 Linear Algebra and Probability</option>
          <option value="CS-603">CS-603 Modeling and Simulation</option>
          <option value="CS-604">CS-604 Compiler Design</option>
          <option value="CS-605">CS-655C Data Mining and Analysis</option>
        </select>
      </div>
      <div class="col">
        <input type="text" v-model="date" placeholder="Enter date" />
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="markAttendance">Mark Attendance</button>
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
            <tr v-for="{ rollNumber, name } in courseStudents" :key="rollNumber">
              <td>{{rollNumber}}</td>
              <td>{{name}}</td>
              <td>
                <input type="radio" :name="rollNumber" @click="assignPresent(rollNumber)" />
              </td>
              <td>
                <input type="radio" :name="rollNumber" @click="assignAbsent(rollNumber)" />
              </td>
              <td>
                <input type="radio" :name="rollNumber" @click="assignLeave(rollNumber)" />
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
      date: "",
      present: [],
      absent: [],
      leave: []
    };
  },
  watch: {
    course: async function() {
      try {
        const data = await Service.getCourseStudents(this.course);
        console.log(data);
        this.val = {};
        data.forEach(student => {
          this.val[student.rollNumber] = "";
        });
        this.val["rollNumber"] = "";
        this.courseStudents = data;
        this.present = [];
        this.absent = [];
        this.leave = [];
      } catch (err) {
        throw err;
      }
    }
  },
  methods: {
    assignPresent(x) {
      var indexAbsent = this.absent.indexOf(x);
      var indexLeave = this.leave.indexOf(x);
      if (indexAbsent > -1) {
        this.absent.splice(indexAbsent, 1);
      } else if (indexLeave > -1) {
        this.leave.splice(indexLeave, 1);
      }
      this.present.push(x);
    },
    assignAbsent(x) {
      var indexPresent = this.present.indexOf(x);
      var indexLeave = this.leave.indexOf(x);
      if (indexPresent > -1) {
        this.present.splice(indexPresent, 1);
      } else if (indexLeave > -1) {
        this.leave.splice(indexLeave, 1);
      }
      this.absent.push(x);
    },
    assignLeave(x) {
      var indexAbsent = this.absent.indexOf(x);
      var indexPresent = this.present.indexOf(x);
      if (indexAbsent > -1) {
        this.absent.splice(indexAbsent, 1);
      } else if (indexPresent > -1) {
        this.present.splice(indexPresent, 1);
      }
      this.leave.push(x);
    },
    async markAttendance() {
      if (this.present.length + this.absent.length + this.leave.length != this.courseStudents.length) {
        alert("Please mark attendance for all the students!")
      }
      else {
        alert("ok")
        try {
          await Service.markAttendance(this.course, this.date, this.present, this.absent, this.leave);
        } catch (err) {
          throw err;
        }
      }
    }
  }
};
</script>