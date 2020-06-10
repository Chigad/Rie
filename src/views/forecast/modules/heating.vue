<template>
    <div class="forecast-modules-heating">
        <el-row :gutter="10"
            ><el-card class="zy-card">
                <!-- 卡片头部 -->
                <div
                    slot="header"
                    class="clearfix card-hd d-flex jc-between ai-center"
                >
                    <span class="font-16">应供热量计算</span>
                </div>
                <el-form style="padding-left:50px" label-position="left" inline>
                    <el-form-item
                        label="计算方式："
                        :label-width="formLabelWidth"
                    >
                        <el-select v-model="value_supply1" @change="change">
                            <el-option
                                label="手动参数设置"
                                value="hand"
                            ></el-option>
                            <el-option
                                label="实际参数设置"
                                value="actual"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="能源站："
                        :label-width="formLabelWidth"
                    >
                        <el-select v-model="value_supply2">
                            <el-option
                                label="能源站1"
                                value="first"
                            ></el-option>
                            <el-option
                                label="能源站2"
                                value="second"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="实际面积："
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            v-model="value_area"
                            style="width:200px"
                            @change="input"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="室外温度："
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            v-model="value_wd"
                            style="width:200px"
                            @change="wdinput"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="K系数：" :label-width="formLabelWidth">
                        <el-input
                            style="width:200px"
                            v-model="value_k"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="应供瞬时热量："
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            style="width:200px"
                            v-model="value_ss"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="天应供热量："
                        :label-width="formLabelWidth"
                    >
                        <el-input
                            style="width:200px"
                            v-model="value_total"
                        ></el-input>
                    </el-form-item>
                    <div>
                        <el-form-item :label-width="formLabelWidth">
                            <el-button @click="add">计算</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </el-card>
        </el-row>
        <el-row :gutter="10" class="mt-2"
            ><el-card class="zy-card">
                <!-- 卡片头部 -->
                <div
                    slot="header"
                    class="clearfix card-hd d-flex jc-between ai-center"
                >
                    <span class="font-16">一次侧参数计算</span>
                </div>
                <el-form style="padding-left:50px" label-position="left" inline>
                    <el-form-item
                        label="计算类型："
                        :label-width="formLabelWidth"
                    >
                        <el-select v-model="value_sideone">
                            <el-option
                                label="供水温度计算"
                                value="supply"
                            ></el-option>
                            <el-option
                                label="回水温度计算"
                                value="back"
                            ></el-option>
                            <el-option
                                label="瞬时流量计算"
                                value="instant"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="供水温度："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="回水温度："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="瞬时流量(t/h)："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>

                    <div>
                        <el-form-item :label-width="formLabelWidth">
                            <el-button>计算</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </el-card>
        </el-row>
        <el-row :gutter="10" class="mt-2"
            ><el-card class="zy-card">
                <!-- 卡片头部 -->
                <div
                    slot="header"
                    class="clearfix card-hd d-flex jc-between ai-center"
                >
                    <span class="font-16">二次侧参数计算</span>
                </div>
                <el-form style="padding-left:50px" label-position="left" inline>
                    <el-form-item
                        label="计算类型："
                        :label-width="formLabelWidth"
                    >
                        <el-select v-model="value">
                            <el-option
                                label="供水温度计算"
                                value="supply_"
                            ></el-option>
                            <el-option
                                label="回水温度计算"
                                value="back_"
                            ></el-option>
                            <el-option
                                label="瞬时流量计算"
                                value="instant_"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="供水温度："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="回水温度："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="瞬时流量(t/h)："
                        :label-width="formLabelWidth"
                    >
                        <el-input style="width:200px"></el-input>
                    </el-form-item>
                    <div>
                        <el-form-item :label-width="formLabelWidth">
                            <el-button>计算</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </el-card>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'forecast-modules-heating',
    data() {
        return {
            formLabelWidth: '120px',
            value_supply1: '',
            value_area: '',
            value_wd: '',
            value_k: '',
            value_ss: '',
            value_total: '',
            value_supply2: '',
            value_sideone: '',
            value: ''
        }
    },
    methods: {
        handleChange(val) {
            console.log(val)
        },
        change() {
            console.log(this.value_supply1)
            if (this.value_supply1 == 'actual') {
                this.value_k = 2.2
                this.value_area = 2
            } else {
                this.value_k = ''
                this.value_area = ''
            }
        },
        input() {
            console.log(this.value_area)
        },
        wdinput() {
            console.log(this.value_wd)
        },
        add() {
            this.value_total =
                parseInt(this.value_area) + parseInt(this.value_wd)
            console.log(this.value_total)
        }
    }
}
</script>
