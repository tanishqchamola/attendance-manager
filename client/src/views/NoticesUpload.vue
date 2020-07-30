<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h3>All Notices</h3>
        <div class="row">
          <div class="col-12">
            Notice title number one
            <span class="float-right">View</span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h3 class="ml-5">Add New Notice</h3>
        <div class="row">
          <div class="offset-1 col-10">
            <form role="form" @click.prevent>
              <div class="form-group">
                <input type="date" class="form-control" placeholder="Title" />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Description"
                  name
                  id
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="form-group">
                <button class="btn btn-primary float-right">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/service/index";
export default {
  name: "NoticesUpload",
};
</script>