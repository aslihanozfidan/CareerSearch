<template>
    <div class="container form-inline">
        <input type="text" 
               v-model="keyword"
               class="form-control col-md-4 mr-md-4 col-sm-12 col-12" 
               placeholder="Anahtar Kelime Giriniz"
               @keypress.enter="handleSearch" />
        <ul class="auto-complete-area form-control col-md-4 mr-md-4 col-sm-12 col-12" v-if="autoComplete == true">
            <li v-for="finding in findingJobs">
                {{finding}}
            </li>
        </ul>    
        <select v-model="selected"
                class="form-control col-md-4 mr-md-5 col-sm-12 col-12" 
                @keypress.enter="handleSearch">
            <option value="" disabled selected>Lokasyon Seçiniz</option>
            <option v-for="city in cities">{{city.name}}</option>
        </select>
        <button class="btn btn-primary col-md-3 col-sm-12" 
                @click="handleSearch">
            İlan Ara
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                keyword: '',                
                selected: '',
                cities: [],
                jobs: [],                
                findingJobs: [],
                autoComplete: false
            }
        },
        created() {
            fetch('../src/datas/city.json')           
            .then((res) => { return res.json() })       
            .then((res) => { 
                this.cities = res; 
                //console.log(this.cities); 
                }),
            fetch('../src/datas/job_list.json')           
                .then((res) => { return res.json() })       
                .then((res) => {
                    this.jobs = res.items; 
                })
        },
        methods: {
            handleSearch() {     
                var query = {'keyword': this.keyword, 'selectedCity': this.selected};          
                this.$emit('SearchRequested', query);
            }
        },
        watch: {
            keyword: function(val) {
                var searching = val;               
                console.log(searching + " ARANAN");  
                for(var i = 0; i < this.jobs.length; i++) {
                    var tempPositionName = this.jobs[i].positionName;
                    if(this.findingJobs.length > 0) {
                        this.autoComplete = true;
                    }   
                    console.log(tempPositionName + " TEMP");
                    for(var s = 0; s < searching.length; s++) {
                        if(this.findingJobs.includes(tempPositionName) == false) {
                            for(var j = 0; j < tempPositionName.length; j++) {
                                if(tempPositionName[j] == searching[s]) {
                                    this.findingJobs.push(tempPositionName);
                                }
                            }      
                        }                            
                    }                              
                } 
                
                console.log(this.findingJobs);
            }
        }
    }
</script>

<style>
    template {
        position: relative;
    }
    .auto-complete-area {
        position: absolute;        
        top: 79px;
        padding: 0px;
        list-style: none;
        z-index: 999;

    }
    .auto-complete-area li {
        width: 100%;
    }
</style>

