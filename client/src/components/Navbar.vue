<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/AttendanceView">Attendance</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ContentView">Content</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/SyllabusView">Syllabus</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/NotificationView">Notifications</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/TimetableView">Time Table</router-link>
          </li>
          <!--
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
          -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>