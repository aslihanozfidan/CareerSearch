<template>
    <div class="container form-inline">
        <input type="text" 
               v-model="keyword"
               class="form-control col-md-4 mr-md-4 col-sm-12 col-12" 
               placeholder="Anahtar Kelime Giriniz"
               @keypress.enter="handleSearch" />
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
                cities: []
            }
        },
        created() {
            fetch('../src/datas/city.json')           
            .then((res) => { return res.json() })       
            .then((res) => { 
                this.cities = res; 
                console.log(this.cities); 
                })
        },
        methods: {
            handleSearch() {     
                var query = {'keyword': this.keyword, 'selectedCity': this.selected};          
                this.$emit('SearchRequested', query);
            }
        }
    }
</script>
