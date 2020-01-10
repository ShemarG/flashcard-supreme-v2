<template>
  <nav class="navbar align-items-center">
    <li v-for="item in navArray" @click="item.action" class="col row justify-content-center align-items-center m-0">
      <router-link class="row d-inline-flex align-items-center justify-content-center nav-link" :to="item.route">
        <img class="col-auto nav-icon" :src="item.imagePath" alt=""/>
        <span class="nav-item col-auto"> {{ item.title }}</span>
      </router-link>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'main-nav',
  data () {
    return {}
  },
  props: ['navArray']
}
</script>

<style>

.navbar {
  background-color: #007bff;
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,0,0,0));
  padding: 0;
  border-bottom: 0.15rem solid #000000;
}

.nav-icon {
  width: 1vw;
  padding: 0;
}

.nav-item {
  font-variant: small-caps;
  font-size: 0.9vw;
  color: white;
}

</style>
