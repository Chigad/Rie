<template>
    <div class="zy-btns d-flex ai-center flex-wrap">
        <!-- 能源站搜索 -->
        <div class="nyz-search d-flex mb-2 ai-center mr-2" v-if="nyz">
            <slot name="nyz-title"></slot>
            <zy-search-dz></zy-search-dz>
        </div>

        <!-- 任务类型 -->
        <div class="rwlx-select d-flex mb-2 ai-center mr-2" v-if="rwlx">
            <slot name="rwlx-title"></slot>
            <el-select v-model="relxModel" :placeholder="rwlxTitle">
                <el-option
                    v-for="item in rwlxOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <!-- 起止日期 -->
        <div class="zy-date-picker d-flex mb-2 ai-center" v-if="date">
            <div class="font-14">起止日期：</div>
            <el-date-picker
                class="mr-2"
                v-model="datePickerModel"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            >
            </el-date-picker>
        </div>
        <!-- 起止日期+时间 -->
        <div class="zy-datetime-picker d-flex mb-2 ai-center" v-if="datetime">
            <div class="font-14">起止日期：</div>
            <el-date-picker
                class="mr-2"
                v-model="dateTimePickerModel"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            >
            </el-date-picker>
        </div>
        <!-- 发送日期 -->
        <div class="fs-date-picker d-flex mb-2 ai-center" v-if="send">
            <div class="font-14">发送日期：</div>
            <el-date-picker
                class="mr-2"
                placeholder="选择日期"
                v-model="sendDatePickerModel"
                type="date"
            >
            </el-date-picker>
        </div>
        <!-- 排序字段 -->
        <div class="pxzd-select d-flex mb-2 ai-center" v-if="pxzd">
            <div class="font-14">排序字段：</div>
            <el-select v-model="pxzdModel" placeholder="请选择" class="mr-2">
                <el-option
                    v-for="item in pxzdOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>

        <!-- 按钮 -->
        <!-- 预留按钮 -->
        <el-button @click="btnClick" class="mb-2" :type="btnType" v-if="btn">{{
            btnTitle
        }}</el-button>

        <!-- 搜索 -->
        <el-button
            type="warning"
            class="mb-2"
            icon="el-icon-search"
            v-if="sarchbtn"
            >搜索</el-button
        >
        <el-button
            type="warning"
            class="mb-2"
            icon="el-icon-document-copy"
            v-if="excelbtn"
            @click="exportExcel"
            >导出</el-button
        >
    </div>
</template>

<script>
import zySearchDz from '@/components/zy-search-dz'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
    name: 'zy-func-btns',
    props: {
        name,
        nyz: {
            type: Boolean,
            default: false
        },
        rwlx: {
            type: Boolean,
            default: false
        },
        rwlxTitle: {
            type: String,
            default: '请选择任务类型'
        },
        rwlxOption: {
            type: Array
        },
        date: {
            type: Boolean,
            default: false
        },
        datetime: {
            type: Boolean,
            default: false
        },
        pxzd: {
            type: Boolean,
            default: false
        },
        pxzdOption: {
            type: Array
        },
        btn: {
            type: Boolean,
            default: false
        },
        btnClick: {
            type: Function
        },
        btnTitle: {
            type: String,
            default: '预留按钮'
        },
        btnType: {
            type: String,
            default: 'primary'
        },
        sarchbtn: {
            type: Boolean,
            default: false
        },
        excelbtn: {
            type: Boolean,
            default: false
        },
        send: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            relxModel: '',
            datePickerModel: '',
            dateTimePickerModel: '',
            pxzdModel: '',
            sendDatePickerModel: ''
        }
    },
    components: {
        zySearchDz
    },
    methods: {
        //定义导出Excel表格事件
        exportExcel() {
            console.log(this.name)
            /* 从表生成工作簿对象 */
            var table = XLSX.utils.table_to_book(
                document.querySelector('#out-table')
            )
            /* 获取二进制字符串作为输出 */
            var tableout = XLSX.write(table, {
                bookType: 'xlsx',
                bookSST: true,
                type: 'array'
            })
            try {
                FileSaver.saveAs(
                    new Blob([tableout], { type: 'application/octet-stream' }),
                    //设置导出文件名称
                    this.name + '.xlsx'
                )
            } catch (e) {
                if (typeof console !== 'undefined') console.log(e, tableout)
            }
            return tableout
        }
    }
}
</script>
