<template>
    <div class="survey_datav"></div>
</template>

<script>
export default {
    name: 'survey_datav',
    beforeCreate() {
        this.$router.push('/datav/')
        location.reload()
    }
}
</script>
