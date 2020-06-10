<template>
    <div class="zy-page">
        <!-- 分页 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageModel.pagenum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="pageModel.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    name: 'zy-page',
    props: {
        // 分页查询数据
        pageModel: Object,
        // 总数
        total: Number
    },
    data() {
        return {}
    },
    methods: {
        handleSizeChange(ns) {
            this.$emit('size-change', ns)
        },
        handleCurrentChange(np) {
            this.$emit('current-change', np)
        }
    }
}
</script>
