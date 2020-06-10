<template>
    <div>{{ info }}</div>
</template>
<script>
export default {
    data() {
        return {
            info: ''
        }
    },
    mounted() {
        // axios({
        //     methods: 'post',
        //     url:
        //         'https://www.tianqiapi.com/free/week?appid=47415487&appsecret=1sqyPZKS'
        // }).then(
        //     res => {
        //         console.log(res)
        //         this.info = res
        //     },
        //     function(response) {
        //         console.log(response)
        //     }
        // )
    }
}
</script>
