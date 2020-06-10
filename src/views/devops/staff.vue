<template>
    <el-container>
        <el-header>
            <el-button @click="position">当前定位</el-button>
            <el-button @click="trajectory">历史轨迹</el-button>
        </el-header>
        <el-main
            ><baidu-map
                v-if="key == 1"
                class="map position"
                center="北京"
                style="height:700px"
                scroll-wheel-zoom
                ><bm-geolocation
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                    :showAddressBar="true"
                    :autoLocation="true"
                ></bm-geolocation
            ></baidu-map>
        </el-main>
        <baidu-map
            v-if="key == 0"
            class="map trajectory"
            style="height:700px"
            scroll-wheel-zoom
            center="北京"
        >
            <bm-polyline
                :path="polylinePath"
                stroke-color="blue"
                :stroke-weight="4"
            ></bm-polyline>
        </baidu-map>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            points: [],
            key: 1,
            polylinePath: [
                { lng: 116.400164,lat: 39.914245 },
                { lng: 116.371993, lat: 39.92531233 },
                { lng: 116.442708, lat: 39.919557 },
                { lng: 116.432359, lat: 39.932394 },
                { lng: 116.412237, lat: 39.883689 }
            ]
        }
    },
    methods: {
        trajectory() {
            this.key = 0
            console.log(this.key)
        },
        position() {
            this.key = 1
            console.log(this.key)
        }
    }
}
</script>
