<script>
export default{
    props:{
        buttonNumber:{
            type:Number,
        },
        buttonText:{
            type:String,
        }
    },
    $emit:['submit'],

    data(){
        return{
            count:2,
        }
    },
    methods:{
        sumNumber(){
            this.$emit('submit',this.count*= this.buttonNumber);
        }
    }
}
</script>

<template>
    <button type="button" @click="sumNumber()">按我{{ buttonNumber }}</button>
</template>

<style>
</style>