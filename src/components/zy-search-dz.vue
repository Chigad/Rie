<template>
    <div class="zy-search-dz">
        <div class="door-content d-flex ai-center">
            <el-input
                class="search-ipt"
                v-model="doorDzName"
                placeholder="请输入能源站名称"
                :disabled="true"
            ></el-input>
            <el-button
                type="warning"
                class="search-btn"
                icon="el-icon-search"
                @click="search"
            ></el-button>
        </div>
        <!-- 单选 -->
        <el-dialog
            title="电站概况查询"
            :visible.sync="dialogVisible"
            v-if="dx == '1'"
            width="50%"
        >
            <div class="dialog-title mb-2 d-flex ai-center">
                <el-input
                    class="search-ipt"
                    v-model="dzName"
                    placeholder="请输入内容"
                ></el-input>
                <el-button
                    type="warning"
                    class="search-btn"
                    icon="el-icon-search"
                    @click="dialogVisible = true"
                ></el-button>
            </div>

            <el-table
                class="dialog-table mb-2"
                :data="tableData"
                height="250"
                border
                style="width: 100%"
                @cell-click="cs"
            >
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                ></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>

            <zy-page
                class="dialog-page mb-2"
                :pageModel="pageModel"
                :total="total"
            ></zy-page>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="warning" @click="cs_click">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 多选 -->
        <el-dialog
            title="电站概况查询"
            :visible.sync="dialogVisible"
            v-if="dx == '2'"
            width="50%"
        >
            <div class="dialog-title mb-2 d-flex ai-center">
                <el-input
                    class="search-ipt"
                    v-model="dzName"
                    placeholder="请输入内容"
                ></el-input>
                <el-button
                    type="warning"
                    class="search-btn"
                    icon="el-icon-search"
                    @click="dialogVisible = true"
                ></el-button>
            </div>

            <el-table
                class="dialog-table mb-2"
                :data="tableData"
                height="250"
                border
                style="width: 100%"
                @cell-click="cs_"
            >
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                ></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>

            <zy-page
                class="dialog-page mb-2"
                :pageModel="pageModel"
                :total="total"
            ></zy-page>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="warning" @click="cs_click_">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import page from '@/mixins/page'

export default {
    name: 'zy-search-dz',
    mixins: [page],
    props: ['dx'],
    data() {
        return {
            dialogVisible: false,
            doorDzName: '',
            dzName: '',
            tableData: [
                {
                    date: '安科瑞电气股份有限公司E楼变电所',
                    address: '	江苏省江阴市南闸镇东盟工业园东盟路5号'
                },
                {
                    date: '安科瑞电气股份有限公司E楼变电所',
                    address: '	江苏省江阴市南闸镇东盟工业园东盟路5号'
                },
                {
                    date: '安科瑞电气股份有限公司E楼变电所',
                    address: '	江苏省江阴市南闸镇东盟工业园东盟路5号'
                },
                {
                    date: '安科瑞电气股份有限公司E楼变电所',
                    address: '	江苏省江阴市南闸镇东盟工业园东盟路5号'
                },
                {
                    date: '安科瑞电气股份有限公司E楼变电所',
                    address: '	江苏省江阴市南闸镇东盟工业园东盟路5号'
                }
            ],
            dzDzName: []
        }
    },
    methods: {
        getPageList() {
            console.log('1212')
        },
        cs(e) {
            this.dzDzName = e.date
        },
        cs_click() {
            this.dialogVisible = false
            this.doorDzName = this.dzDzName
            console.log(this.doorDzName)
        },
        search() {
            this.dialogVisible = true
            this.dzDzName = []
            this.doorDzName = ''
        },
        cs_(e) {
            this.dzDzName.push(e.date)
        },
        cs_click_() {
            this.dialogVisible = false
            this.doorDzName = this.dzDzName.join('；')
            console.log(this.doorDzName)
        }
    }
}
</script>

<style lang="scss">
.door-content,
.dialog-title {
    .search-ipt {
        max-width: 200px;
        margin-right: 14px;
    }
}
</style>
