<template>
  <title-header>
    <div class="btn-list">
      <router-link class="d-inline-flex row justify-content-center w-100 align-items-center" to="/subjects">
        <button type="button" class="menu btn btn-primary btn-lg justify-content-center align-items-center">
          <img class="col-auto btn-icon" src="../assets/icons/notepad.svg" alt=""/>
          <span class="col-auto btn-label">Subjects</span>
        </button>
      </router-link><br>
      <button type="button" class="row menu btn btn-primary btn-lg justify-content-center align-items-center">
          <img class="col-auto btn-icon" src="../assets/icons/stopwatch.svg" alt=""/>
          <span class="col-auto btn-label">Marathon</span>
      </button><br>
      <button type="button" class="row menu btn btn-primary btn-lg justify-content-center align-items-center">
          <img class="col-auto btn-icon" src="../assets/icons/save.svg" alt=""/>
          <span class="col-auto btn-label">Backup & Restore</span>
      </button><br>
      <button type="button" class="row menu btn btn-primary btn-lg justify-content-center align-items-center">
          <img class="col-auto btn-icon" src="../assets/icons/stats.svg" alt=""/>
          <span class="col-auto btn-label">Data & Statistics</span>
      </button><br>
  </div>
  </title-header>
</template>
<script>

import titleHeader from "../components/title-header"

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    titleHeader
  },
  methods: {
  }
}
</script>
<style>

  .menu {
    /* display: inline-flex; */
    margin: 1%;
    width: 48vw;
    height: 7vw;
    border-radius: 2.5rem;
    border: 0.20rem solid black;
    background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,0,0,0));
  }

  .btn-list {
    background-color: #ffffff;
    height: 81vh;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233399ff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .btn-label {
    font-variant: small-caps;
    font-size: 2vw;
    width: 48%;
    margin: 0;
  }

  .btn-icon {
    line-height: 0;
    height: 50px;
    width: 7vw;
  }

</style>
