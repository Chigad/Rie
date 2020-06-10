<template>
    <div class="form">
        <el-form
            :size="size"
            :model="searchData"
            :rules="rules"
            ref="searchForm"
            :label-width="labelWidth"
            label-position="left"
            style="padding-left:20px"
        >
            <el-form-item
                v-for="item in searchForm"
                :label="item.label"
                :key="item.prop"
                :prop="item.prop"
            >
                <!-- 下拉框 -->
                <el-select
                    v-if="item.type == 'Select'"
                    v-model="searchData[item.prop]"
                    @visible-change="$forceUpdate()"
                >
                    <el-option
                        v-for="op in item.option"
                        :label="op.label"
                        :value="op.value"
                        :key="op.value"
                    >
                        {{ op.label }}
                    </el-option>
                </el-select>
                <!-- 输入框 -->
                <el-input
                    v-if="item.type === 'Input'"
                    v-model="searchData[item.prop]"
                    :placeholder="item.placeholder"
                    style="width:200px"
                ></el-input>
                <!-- 密码框 -->
                <el-input
                    v-if="item.type === 'password'"
                    disabled
                    v-model="searchData[item.prop]"
                    :placeholder="item.placeholder"
                    auto-complete="off"
                >
                    <template slot="append">
                        <span @click="item.onClick">{{ item.name }}</span>
                    </template>
                </el-input>
                <!-- 单选 -->
                <el-radio-group
                    v-if="item.type === 'Radio'"
                    v-model="searchData[item.prop]"
                >
                    <el-radio
                        v-for="ra in item.radios"
                        :label="ra.value"
                        :key="ra.value"
                        >{{ ra.label }}</el-radio
                    >
                </el-radio-group>
                <!-- 复选框 -->
                <el-checkbox-group
                    v-if="item.type === 'Checkbox'"
                    v-model="searchData[item.prop]"
                >
                    <el-checkbox
                        v-for="ch in item.checkboxs"
                        :label="ch.value"
                        :key="ch.value"
                        >{{ ch.label }}</el-checkbox
                    >
                </el-checkbox-group>
                <!-- 日期 -->
                <el-date-picker
                    v-if="item.type === 'Date'"
                    v-model="searchData[item.prop]"
                    value-format="yyyy-MM-dd"
                    @change="item.change(searchData[item.prop])"
                    :placeholder="item.placeholder"
                >
                </el-date-picker>

                <!-- 时间 -->
                <el-time-select
                    v-if="item.type === 'Time'"
                    v-model="searchData[item.prop]"
                >
                </el-time-select>

                <!-- 日期时间 -->
                <el-date-picker
                    v-if="item.type === 'DateTime'"
                    type="datetime"
                    v-model="searchData[item.prop]"
                    :placeholder="item.placeholder"
                    value-format="yyyy-MM-dd hh:mm:ss"
                    :disabled="
                        item.disable && item.disable(searchData[item.prop])
                    "
                    @change="item.change(searchData[item.prop])"
                >
                </el-date-picker>

                <!-- 起止时间 -->
                <el-date-picker
                    v-if="item.type === 'Daterange'"
                    v-model="searchData[item.prop]"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="yyyy-MM-dd"
                    @change="item.change(searchData[item.prop])"
                >
                </el-date-picker>
            </el-form-item>
            <!-- button 操作按钮 -->
            <el-form-item class="search_input_button" v-if="isHandle">
                <el-button
                    v-for="item in searchHandle"
                    :key="item.label"
                    :type="item.type"
                    @click="item.handle()"
                >
                    >
                    <span>{{ item.label }}</span>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props: {
        isHandle: {
            type: Boolean,
            default: true
        },
        labelWidth: {
            type: String,
            default: '120px'
        },
        size: {
            type: String,
            default: 'medium'
        },
        searchForm: {
            type: Array,
            default: () => []
        },
        searchHandle: {
            type: Array,
            default: () => []
        },
        searchData: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        /**解析表单的正则验证***/
        rules() {
            let rules = this.searchForm.reduce((map, i) => {
                if (i.rules) {
                    map[i.prop] = i.rules
                }
                return map
            }, {})
            return rules
        }
    },
    mounted() {},
    methods: {}
}
</script>
