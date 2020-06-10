<template>
    <div class="skip-content">
        <zy-func-btns
            rwlx
            :rwlxTitle="rwlxTitle"
            :rwlxOption="rwlxOption"
            nyz
            date
            :btnClick="btnClick"
            sarchbtn
            excelbtn
        >
            <div class="font-14" slot="nyz-title">能源站名称：</div>
            <div class="font-14" slot="rwlx-title">任务类型：</div>
        </zy-func-btns>
    </div>
</template>

<script>
import funcBtns from '@/mixins/func-btns'
export default {
    mixins: [funcBtns],
    name: 'func_log_skip'
}
</script>
