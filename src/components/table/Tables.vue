<template>
    <div>
        <el-table
            :data="rightsDate"
            border
            stripe
            id="out-table"
            height="700"
            :default-sort="{ prop: 'date', order: 'descending' }"
            :header-cell-style="{ background: 'rgb(1,173,168)', color: '#fff' }"
        >
        <slot name="cz1"></slot>
            <af-table-column
                v-for="info in rightHeader"
                :key="info.key"
                :property="info.key"
                :label="info.label"
            >
                <template slot-scope="scope">
                    {{ scope.row[scope.column.property] }}
                    <!-- 渲染对应表格里面的内容 -->
                </template>
            </af-table-column>
            <slot name="cz"></slot>
        </el-table>
    </div>
</template>
<script>
export default {
    props: ['rightHeader', 'rightsDate']
}
</script>
