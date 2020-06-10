<template>
    <div class="env-video">
        <!-- 搜索 -->
        <zy-search-dz class="mb-2"></zy-search-dz>

        <!-- 视频主体 -->
        <div class="video-body">
            <el-row :gutter="20">
                <el-col :lg="12">
                    <video
                        class="w-100"
                        id="myPlayer"
                        poster=""
                        controls
                        playsInline
                        webkit-playsinline
                    >
                        <source
                            src="http://hls01open.ys7.com/openlive/c710fbaac1304417b901156da8e7e9f1.m3u8"
                            type="application/x-mpegURL"
                        />
                    </video>
                </el-col>
                <el-col :lg="12"> </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import zySearchDz from '@/components/zy-search-dz'
import EZUIKit from '@/assets/lib/ys/ezuikit'
export default {
    name: 'env_video',
    components: {
        zySearchDz
    },
    methods: {
        videoOpen() {
            setTimeout(() => {
                this.player = new EZUIKit.EZUIPlayer('myPlayer')
            }, 70)
        }
    },
    mounted() {
        this.videoOpen()
    },

    beforeDestroy() {
        this.player.stop() //关闭视频流
    }
}
</script>
