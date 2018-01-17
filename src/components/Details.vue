<template>
    <div class="details container">
        <section>
            <p>{{job.positionName}} - <span>{{job.durationDayText}}</span></p>
            <p><i class="fa fa-building" aria-hidden="true"></i> {{job.companyName}}</p>
            <p><i class="fa fa-location-arrow" aria-hidden="true"></i> {{job.distance}}</p>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> {{job.cityName}} - {{job.townName}}</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Details',
        data() {
            return {
                job: ''
            }  
        },
        created() {
           fetch('../src/datas/job_list.json')           
                .then((res) => { return res.json() })       
                .then((res) => {
                    for(var i = 0; i < res.items.length; i++) {
                        if(res.items[i].jobId == this.$route.params.id) {
                            this.job = res.items[i];
                            console.log(this.job); 
                        }
                    }                     
                })          
        },
    }
</script>

<style>
    section {
        height: 180px;
        margin-top: 30px;
        padding: 20px;
        border: 1px solid #c9c9c9;
        border-radius: 3px;
    }
        section p {
            margin: 8px;
            color: #606060;
        }    
            section p span {
                color: #910000;
            }
            section p:first-child {
                font-weight: bold;
                border-bottom: 1px solid #c9c9c9;
            }
</style>

