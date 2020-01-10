<template>
  <div id="searchInput" class="input-group mb-3">
    <input id="field" class="col-auto" type="text" placeholder="Quick Search" aria-label="Username" aria-describedby="basic-addon1"></input>
  </div>

</template>

<script>
  export default {
    name: "search-bar",
    data () {
      return {

      }
    }
  }
</script>

<style>
  #searchInput {
    position: absolute;
    left: 35%;
    z-index: 1;
  }

  #field {
    height: 2vw;
    width: 9vw;
    border-radius: 3rem;
    border: 1px solid #ced4da;
    padding-left: 5%;
  }


</style>
