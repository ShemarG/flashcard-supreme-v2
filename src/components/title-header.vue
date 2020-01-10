<template>
  <div id="topLevel" class="container-fluid" @click="toggleSearchState">
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div id="search" class="row justify-content-start align-items-center col menu-icons">
            <img id="searchImg" class="col-auto side-icon" src="../assets/icons/search-icon.svg" alt=""/>
            <transition name="fade-in">
              <search-bar class="col" v-if="searchHidden"></search-bar>
            </transition>
          </div>
          <div class="col-10">
            <h1 id="title">Flashcard Supreme</h1>
          </div>
          <div id="settings" class="row justify-content-end col menu-icons">
            <img id="settings-icon" class="side-icon" src="../assets/icons/gear-icon.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>

import searchBar from "../components/search-bar"

export default {
name: 'title-header',
data () {
  return {
    searchHidden: false,
    settingsHidden: true
  }
},
components: {
  searchBar
},
methods: {
  toggleSearchState (e){
    console.log(e.target)
    if(e.target.id == "searchImg"){
      this.searchHidden = this.searchHidden ? false : true
    }else if(e.target.id == "field" || e.target.id == "search"){}
    else{
      this.searchHidden = false
    }
  },
}
}
</script>
<style>

@font-face{
  font-family:"Cinzel";
  src: url("../assets/fonts/Cinzel-Regular.ttf") format("truetype");
}

#topLevel {
  padding: 0;
}

#title {
  font-family: Cinzel;
  font-size: 4vw;
  line-height: 1.5;
  color: black;
}

#search {
  height: 25%;
}

.jumbotron {
  height: 9vw;
  background-image: url("https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  padding: 0;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  border-bottom: 0.15rem solid #000000;
  margin-bottom: 0;
}

.menu {
  display: inline-flex;
  margin: 1%;
  width: 48vw;
  height: 7vw;
  border-radius: 2.5rem;
  border: 0.20rem solid black;
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,0,0,0));
}

.btn-list {
  background-color: #ffffff;
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

.side-icon {
  height: inherit;
  width: 30%;
  padding: 5%;
  background-color: #007bff;
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,0,0,0));
  border-radius: 10rem;
  border: 0.5px solid black;
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: all 0.25s ease;
}

.fade-in-enter, .fade-in-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}


</style>
