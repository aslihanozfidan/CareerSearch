<template>
    <div class="preview container">
        <ul>
            <li  v-for="job in jobs">
                <router-link :to="'/jobdetails/' + job.jobId">
                    <p>{{job.positionName}}</p> 
                    <p>/</p> 
                    <p>{{job.companyName}}</p>
                    <p>/</p> 
                    <p>{{job.cityName}}</p>  
                </router-link>             
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'jobs' ]
    }
</script>

<style>
    .preview ul{
        list-style: none;
        margin: 0px;   
        padding: 0px;  
    }
        .preview ul li{
            height: 70px;
            border: 1px solid #c9c9c9;
            border-radius: 3px;
            margin-top:5px;   
            padding: 22px;
        }
            .preview ul li a {
                height: 70px;
                width: 100%;
                display: block;
                color: #606060;                
            }
            .preview ul li p {
                float: left;
                padding-left: 20px;
            }
            .preview ul li p:first-child {
                font-weight: bold;
                padding-left: 0px;
            }
            .preview ul li img{
                height: 150px;
                width: auto;
            }
</style>

