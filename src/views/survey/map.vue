<template>
    <div class="survey-map h-100 po-relative">
        <!-- 地图 -->
        <baidu-map
            class="h-100"
            :scroll-wheel-zoom="true"
            :center="center"
            :zoom="zoom"
            :Pixel="pixel"
            :ak="$config.map.ak"
        >
            <bm-marker
                v-for="(item, index) in markerPoints"
                :key="index"
                :position="item.position"
                :icon="{
                    url: 'http://www.illih.com/static/images/icon1.png',
                    size: { width: 36, height: 50 }
                }"
                @mouseover="item.show = true"
                @mouseout="item.show = false"
            >
                <bm-label
                    :content="item.content"
                    :position="item.position"
                    :labelStyle="{
                        color: '#fff',
                        fontSize: '14px',
                        display: item.show ? 'block' : 'none',
                        padding: '5px',
                        backgroundColor: '#ff8355',
                        border: 'none',
                        left: '45px',
                        top: '20px'
                    }"
                    :title="item.content"
                />
            </bm-marker>
        </baidu-map>

        <!-- 左侧统计 -->
        <div class="map-total po-absolute ta-center">
            <el-row :gutter="0" class="mb-2">
                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>

                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>

                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>

                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>

                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>

                <el-col :span="12" class="map-item ta-center">
                    <div class="icon"></div>
                    <div class="title font-20">变配电站数量</div>
                    <div class="number font-16">
                        <span class="text-yellow font-20 fw-600">5</span>
                        个
                    </div>
                </el-col>
            </el-row>

            <el-button type="primary" @click="showLable" class="show-title">
                {{ show ? '隐藏' : '显示' }}变配电站名称
            </el-button>
        </div>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmLabel from 'vue-baidu-map/components/overlays/Label'
export default {
    name: 'survey_map',
    components: {
        BaiduMap,
        BmMarker,
        BmLabel
    },
    data() {
        return {
            center: { lng: 116.404, lat: 39.915 },
            zoom: 10,
            pixel: {
                x: 20,
                y: 10
            },
            // 标记点列表
            markerPoints: [
                {
                    position: {
                        lng: 116.404,
                        lat: 39.915
                    },
                    show: false,
                    type: 0,
                    content: '测试地点'
                },
                {
                    position: {
                        lng: 116.45,
                        lat: 39.415
                    },
                    show: false,
                    type: 0,
                    content: '测试地点111'
                },
                {
                    position: {
                        lng: 116.48,
                        lat: 39.815
                    },
                    show: false,
                    type: 0,
                    content: '测试地点'
                },
                {
                    position: {
                        lng: 116.32,
                        lat: 39.615
                    },
                    show: false,
                    type: 0,
                    content: '测试地点'
                },
                {
                    position: {
                        lng: 116.39,
                        lat: 39.115
                    },
                    show: false,
                    type: 0,
                    content: '测试地点'
                },
                {
                    position: {
                        lng: 116.25,
                        lat: 39.015
                    },
                    show: false,
                    type: 0,
                    content: '测试地点'
                }
            ],
            show: 0
        }
    },
    methods: {
        showLable() {
            // show=0
            console.log(this.show)
            if (this.show) {
                this.markerPoints.forEach(item => {
                    item.show = false
                })
                this.show = 0
            } else {
                this.markerPoints.forEach(item => {
                    item.show = true
                })
                this.show = 1
            }
        }
    }
}
</script>
