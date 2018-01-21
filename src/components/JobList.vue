<template>
  <div id="app">
    <search v-on:SearchRequested="handleSearch"></search>    
    <h3 v-if="isLoading" class="container">Yükleniyor</h3>
    <h3 v-if="isFinding" class="container">Sizin için uygun ilanımız yoktur.</h3>
    <h3 v-if="starting" class="container">Sizin için ilanları getirebilmemiz için lütfen arama kriterlerini giriniz.</h3>
    <preview :jobs=jobs></preview>
  </div>
</template>

<script>
import Search from './Search.vue'
import Preview from './Preview.vue'
export default {
  name: 'JobList',
  components: { Search, Preview },
  data() {
    return {
      isLoading: false,
      starting: true,
      isFinding: false,
      jobs: [],
      jobsArray: []
    }  
  },
  methods: {
    handleSearch(query) {
      this.jobs = [];	
	  console.log(this.jobs.length);
      this.isLoading = false; 
      this.starting = false;
      for(var i = 0; i < this.jobsArray.length; i++) {          
        if(((this.jobsArray[i].cityName == query.selectedCity) && (this.jobsArray[i].positionName == query.keyword)) || 
           ((this.jobsArray[i].cityName == query.selectedCity) && (query.keyword == ""))||
           ((query.selectedCity == "") && (query.keyword == this.jobsArray[i].positionName))) {
          this.jobs.push(this.jobsArray[i]);
        }
      } 
	  if(this.jobs.length > 0) {
		this.isFinding = false;
	  } else {
		this.isFinding = true;
	  }
    }
  },
  created() {
    fetch('../src/datas/job_list.json')           
      .then((res) => { return res.json() })       
      .then((res) => {
        this.jobsArray = res.items; 
        console.log(this.jobsArray); 
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 40px;
}

#app h3 {
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
  color: #606060;
}

</style>
