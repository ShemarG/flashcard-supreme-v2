<template>
  <div class="">
    <title-header></title-header>
    <main-nav :navArray="navItems"></main-nav>
    <div id="subjects-container" class="container-fluid">
      <div class="input-group mt-4 mb-4 justify-content-center">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img id="search-icon" src="../assets/icons/search-icon.svg" alt="">
          </span>
        </div>
        <input id="subject-search" type="text" class="" placeholder="Subject Search" aria-label="Username" aria-describedby="basic-addon1"><br>
      </div>

      <b-modal id="newSubjectModal" title="Create New Subject" class="row" centered @ok="modalSubmit" @hidden="resetModal">
        <div class="mb-3 col">
          <span>Title:</span><br>
          <b-form-input :state="titleState[0]" v-model="modalInput.title" class="mr-3"></b-form-input>
            <b-form-invalid-feedback>
            {{ titleState[1] }}
            </b-form-invalid-feedback>
        </div>
        <div class="mb-3 col">
          <span>Subtitle:</span><br>
          <b-form-input :state="subtitleState[0]" v-model="modalInput.subtitle" placeholder="Defaults to date created if blank" class="mr-3"></b-form-input>
          <b-form-invalid-feedback>
            {{ subtitleState[1] }}
          </b-form-invalid-feedback>
        </div>

        <div class="row">
          <div class="col-6">
            <b-dropdown :text="modalInput.patternName" class="mb-2 col">
              <b-dropdown-item-button
                @click="handleModalInput(pattern.url, 'pattern', name, 'patternName')"
                 class="dropdown-item" v-for="(pattern, name) in patterns"
                 :style="{backgroundImage: `url(${JSON.stringify(pattern.url)})`}"
                 :key="name">
                 {{ name }}
             </b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown :text="modalInput.patternColorName" class="mb-2 col">
              <b-dropdown-item-button
                @click="handleModalInput(color['hex'], 'patternColorHex', name, 'patternColorName')"
                class="dropdown-item" v-for="(color, name) in colors"
                :style="{backgroundColor: color.hex}"
                :key="name">
                {{ name }}
              </b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown :text="modalInput.backgroundColorName" class="mb-2 col">
              <b-dropdown-item-button
                @click="handleModalInput(color['hex'], 'backgroundColorHex', name, 'backgroundColorName')"
                class="dropdown-item" v-for="(color, name) in colors"
                :style="{backgroundColor: color.hex}"
                :key="name">
                {{ name }}
              </b-dropdown-item-button>
            </b-dropdown>
            <span class="col">Opacity: {{ modalInput.opacity + "%" }} </span>
            <b-input-group prepend="0" append="70" class="mt-2">

              <b-form-input type="range" max="70" class="col" v-model="modalInput.opacity" value="40"></b-form-input>
            </b-input-group>
          </div>

          <div class="col-6">
            <div :style="{backgroundImage: `url(${patternFunction})`, backgroundColor: modalInput.backgroundColorHex}" id="style-preview">
            </div>
          </div>
        </div>
      </b-modal>

      <div class="button-wrapper row justify-content-center">
        <div :style="{backgroundImage: `url(${JSON.stringify(subject.pattern)})`, backgroundColor: subject.backgroundColorHex}" v-for="(subject, name) in subjects" class="d-flex justify-content-center col-3 card">
          <div class="row card-content align-items-center">
            <span class="col-12 subject-title">{{subject.title}}</span>
            <span class="col subject-subtitle">{{subject.subtitle == '' ? `Created on ${subject.dateCreated.toLocaleDateString()} at ${subject.dateCreated.toLocaleTimeString()}` : subject.subtitle}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

import titleHeader from "../components/title-header"
import mainNav from "../components/main-nav"
import svgs from "../assets/svg-urls.json"
import colorObject from "../assets/colors.json"

export default {
  name: 'subjects',
  data () {
    return {
      modalInput: {
          'title': "",
          'subtitle': "",
          'date_created': "",
          'patternName': "Texture",
          'pattern': svgs["Texture"].url,
          'backgroundColorName': "White",
          'backgroundColorHex': "#ffffff",
          'patternColorName': "Black",
          'patternColorHex': "#000000",
          'opacity':"35"
      },
      patterns: svgs,
      colors: colorObject,
      subjects: '' ,
      uniqueNames: '',
      navItems: [
        {
          route:'/',
          title:'Home',
          imagePath:'../src/assets/icons/home.svg',
          action: () => {return}
        },
        {
          route:'',
          title:'New Subject',
          imagePath:'../src/assets/icons/plus.svg',
          action: () => {this.$bvModal.show('newSubjectModal')}
        }
      ]
    }
  },
  computed: {
    patternFunction () {
      var pattern = this.modalInput.pattern;
      var colorPos = (pattern).search("fill='%23")
      pattern = pattern.substr(0, colorPos+9) + this.modalInput.patternColorHex.substr(1) + pattern.substr(colorPos+15)
      var opacityPos = (pattern).search("fill-opacity")
      pattern = pattern.substr(0, opacityPos+14) + this.modalInput.opacity/100 + pattern.substr(opacityPos+17)
      this.modalInput.pattern = pattern
      return JSON.stringify(pattern)
    },
    titleState (){
      var state;
      if (this.modalInput.title.length != 0){
        if (this.modalInput.title.replace(/^\s+|\s+$/g, '').length == 0){
          state = [false, "Title is made up of only spaces!"]
        } else if (this.uniqueNames.indexOf(this.modalInput.title) != -1) {
          state = [false, "A subject with that name already exists!"]
        } else {
          state = [this.modalInput.title.length < 20 ? true : false, "Title must be less than 20 characters!"]
        }
      } else {
        state = [false, "Please enter a title"]
      }
      return state
    },
    subtitleState (){
      var state = [this.modalInput.subtitle.length < 30 ? true : false, "Subtitle must be less than 30 characters!"]
      return state
    }
  },
  components: {
    titleHeader,
    mainNav,
  },
  mounted () {

    this.$http.get("http://localhost:3000/subjectData/0")
    .then(resp => {
      console.log(resp.data)
      this.subjects = resp.data
      this.uniqueNames = resp.data.map((a) => {return a.title})
      this.uniqueCount = resp.data.subjectUniqueCount
    }).catch(error => {
      this.errored = true
    })
  },
  methods: {
    handleModalInput (val, target, ...pairs) {
    // console.log(val)
    this.modalInput[`${target}`] = val
      if(pairs.length != 0){
        for (var i = 0; i<pairs.length; i++){
          if ((i+1) % 2 == 0) {
            // console.log(this.modalInput)
            this.modalInput[`${pairs[i]}`] = pairs[i-1];
          }
        }
      }
    },
    resetModal () {
      this.modalInput = {
          'title': "",
          'subtitle': "",
          'dateCreated': "",
          'patternName': "Texture",
          'pattern': svgs["Texture"].url,
          'backgroundColorName': "White",
          'backgroundColorHex': "#ffffff",
          'patternColorName': "Black",
          'patternColorHex': "#000000",
          'opacity':"35"
      }
    },
    modalSubmit (bvModalEvt){
      if (this.titleState[0] && this.subtitleState[0] == true){
        this.modalInput.dateCreated = new Date()
        var url = `http://localhost:3000/subjectData`

        this.$http.post(url, this.modalInput)
        .then(resp => {
        console.log(resp)
        }).catch(error => {
          this.errored = true
        })

      } else {
        bvModalEvt.preventDefault()
        console.log("yo shit not valid")
      }
    }
  }
}
</script>
<style>

body {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233399ff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@font-face{
  font-family:"Pangolin";
  src: url("../assets/fonts/Pangolin-Regular.ttf") format("truetype");
}

.card {
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: 2%;
  padding: 0.5%;
  border-radius: 1.5rem;
  border: 1px solid black;
  height: 6vw;
}

#style-preview {
  height: 8rem;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid grey;
  border-radius: 0.5rem;
}

.card-content{
  line-height: 1.5;
   text-shadow: -0.5px -0.5px 0 #ffffff, 0.5px -0.5px 0 #ffffff, -0.5px 0.5px 0 #ffffff, 0.5px 0.5px 0 #ffffff;
}

.button-wrapper {
  width: 100%;
}

.subject-title {
  font-family: Pangolin;
  font-size: 1.30vw;
}

.dropdown-menu {
  height: 50vh;
  overflow-y: scroll;
}

.subject-subtitle {
  font-size: 0.80vw;
}

#subjects-container {
  padding: 0;
  width: inherit;
  height: 76.5vh;
  /* padding: 1%; */
}

#subject-search {
  width: 25vw;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  padding-left: 0.5rem;
  border-left:1px solid grey;
}

.input-group-text {
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
}

#search-icon {
  width: 1.5vw;
}

</style>
