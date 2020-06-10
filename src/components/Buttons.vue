<template>
    <div class="zy-btns d-flex ai-center flex-wrap">
        <!-- 能源站搜索 -->
        <div class="nyz-search d-flex mb-2 ai-center mr-2" v-if="nyz">
            <slot name="nyz-title"></slot>
            <zy-search-dz></zy-search-dz>
        </div>

        <!-- 执行结果 -->
        <div class="zxjg-select d-flex mb-2 ai-center mr-2" v-if="zxjg">
            <slot name="zxjg-title"></slot>
            <el-select v-model="zxjgModel" :placeholder="zxjgTitle">
                <el-option
                    v-for="item in zxjgOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <!-- 时间 -->
        <div class="send-date-picker d-flex mb-2 ai-center" v-if="send">
            <slot name="send-title"></slot>
            <el-date-picker
                class="mr-2"
                placeholder="选择日期"
                v-model="sendDatePickerModel"
                type="date"
            >
            </el-date-picker>
        </div>
        <slot name="cr"></slot>
        <!-- 负责人 -->
        <div class="fzr-select d-flex mb-2 ai-center mr-2" v-if="fzr">
            <slot name="fzr-title"></slot>
            <el-select
                v-model="fzrModel"
                :placeholder="fzrTitle"
                :style="fzrStyle"
            >
                <el-option
                    v-for="item in fzrOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>

        <!-- 执行人 -->
        <div class="zxr-select d-flex mb-2 ai-center mr-2" v-if="zxr">
            <slot name="zxr-title"></slot>
            <el-select
                v-model="zxrModel"
                :placeholder="zxrTitle"
                :style="zxrStyle"
            >
                <el-option
                    v-for="item in zxrOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <!-- 日报月报 -->
        <el-button type="warning" class="mb-2" v-if="rb">日报</el-button>
        <el-button type="warning" class="mb-2 mr-2" v-if="yb">月报</el-button>
        <!-- 任务状态 -->
        <div class="rwzt-select d-flex mb-2 ai-center mr-2" v-if="rwzt">
            <slot name="rwzt-title"></slot>
            <el-select v-model="rwztModel" :placeholder="rwztTitle" multiple>
                <el-option
                    v-for="item in rwztOption"
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
        <slot name="cr1"></slot>
        <slot name="cr2"></slot>
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
    name: 'zy-func-btn',
    props: {
        name,
        nyz: {
            type: Boolean,
            default: false
        },
        zxjg: {
            type: Boolean,
            default: false
        },
        zxjgTitle: {
            type: String,
            default: '请选择任务类型'
        },
        zxjgOption: {
            type: Array
        },
        fzr: {
            type: Boolean,
            default: false
        },
        fzrTitle: {
            type: String,
            default: '请选择任务类型'
        },
        fzrOption: {
            type: Array
        },
        fzrStyle: {
            type: String
        },
        zxr: {
            type: Boolean,
            default: false
        },
        zxrTitle: {
            type: String,
            default: '请选择任务类型'
        },
        zxrOption: {
            type: Array
        },
        zxrStyle: {
            type: String
        },
        rwzt: {
            type: Boolean,
            default: false
        },
        rwztTitle: {
            type: String,
            default: '请选择任务状态'
        },
        rwztOption: {
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
        },
        rb: {
            type: Boolean,
            default: false
        },
        yb: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            zxjgModel: '',
            fzrModel: '',
            zxrModel: '',
            rwztModel: '',
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
