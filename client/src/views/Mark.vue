<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <select class="form-control">
          <option disabled selected>Select Course</option>
          <option value="CS-601">CS-601 Computer Networks and Security</option>
          <option value="CS-602">CS-602 Linear Algebra and Probability</option>
          <option value="CS-603">CS-603 Modeling and Simulation</option>
          <option value="CS-604">CS-604 Compiler Design</option>
          <option value="CS-605">CS-655C Data Mining and Analysis</option>
        </select>
      </div>
      <div class="col">
        <div class="form-group">
          <div class="input-group date" id="datetimepicker1">
            <input type="text" class="form-control" />
            <span class="input-group-addon">
              <span class="glyphicon glyphicon-calendar"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mark",
  created() {
      $("#datetimepicker1").datetimepicker();
  }
};
</script>