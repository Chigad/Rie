<template>
    <div class="home-content d-flex">
        <!-- 菜单+用户信息+功能 -->
        <div
            :class="[
                'home-aside',
                'h-100',
                isCollapse ? 'hide-aside' : 'show-aside'
            ]"
            :style="{ flexBasis: isCollapse ? '60px' : '180px' }"
        >
            <!-- 功能区域 -->
            <div :class="['aside-func', 'po-relative']">
                <!-- 收缩 -->
                <div
                    class="iconfont icon-ziyuan po-absolute aside-spread cu-p"
                    @click="isCollapse = !isCollapse"
                ></div>

                <!-- 切换 -->
                <div class="aside-toggle d-flex jc-center">
                    <div class="theme cu-p">主题</div>
                    <span>|</span>
                    <div class="lang cu-p">语言</div>
                </div>

                <!-- 刷新 -->
                <div class="aside-refresh po-absolute">
                    <i class="iconfont icon-shuaxin cu-p"></i>
                </div>
            </div>

            <!-- 用户信息 -->
            <div class="aside-user ta-center">
                <!-- 头像 -->
                <div class="user-avatar">
                    <img
                        class="w-100"
                        src="../assets/images/common/aside_user_avatar.png"
                        alt=""
                    />
                </div>

                <!-- 信息 -->
                <div class="user-info font-16">
                    <!-- 名称 -->
                    <p class="name">test</p>
                </div>
            </div>

            <!-- 菜单 -->
            <el-menu
                class="aside-menu w-100 mb-2 ta-center"
                background-color="#f7f7f7"
                text-color="#fff"
                active-text-color="#01ada8"
                router
                unique-opened
                :collapse="isCollapse"
                :collapse-transition="false"
                :default-active="$route.path"
            >
                <el-submenu
                    v-for="(navItem, navIndex) in navbar"
                    :key="navIndex"
                    :index="navItem.type"
                >
                    <template slot="title">
                        <i :class="['iconfont', navItem.icon]"></i>
                        <span>{{ navItem.name }}</span>
                    </template>
                    <el-menu-item
                        v-for="(item, index) in navItem.list"
                        :key="index"
                        :index="('/' + item.path) | toBias"
                    >
                        <div class="d-flex ai-center">
                            <i class="d-block bg-primary nav-line mr-1"></i>
                            <span>{{ item.name }}</span>
                        </div>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

        <!-- 主要区域 -->
        <div class="home-main flex-1">
            <!-- 头部 -->
            <el-header class="home-header d-flex jc-between ai-center">
                <!-- 公司名称 -->
                <div class="header-company d-flex ai-center font-20">
                    <p class="woh">{{ $config.company.name }}</p>
                </div>

                <!-- 面包屑导航 -->
                <div class="header-breadcrumb mr-4 h-100 cf">
                    <div
                        class="breadcrumb-main h-100  fr d-flex ai-center jc-end"
                    >
                        <div
                            class="breadcrumb-item pl-2 pr-4 font-14 d-flex ai-center po-relative"
                            v-for="(item, index) in brn"
                            :key="index"
                        >
                            <el-link :src="item.path">{{ item.name }}</el-link>
                            <i
                                class="breadcrumb-close iconfont icon-guanbi1 po-absolute cu-p"
                                @click="brn.splice(index, 1)"
                            ></i>
                        </div>
                    </div>
                </div>

                <!-- 关闭页面 -->
                <div class="header-other d-flex ai-center">
                    <div class="home-alert mr-1">
                        <div class="iconfont icon-lingdang cu-p fw-600"></div>
                    </div>
                    <div
                        class="home-close iconfont font-20 icon-guanbi cu-p fw-600"
                    ></div>
                </div>
            </el-header>

            <!-- 视图 -->
            <div class="home-view p-1">
                <!-- 主要试图 -->
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import filters from '@/mixins/filters'
export default {
    name: 'Home',
    mixins: [filters],
    data() {
        const brn = [
            {
                name: '用能月报1',
                path: '/'
            },
            {
                name: '用能月报2',
                path: '/'
            },
            {
                name: '用能月报3',
                path: '/'
            },
            {
                name: '用能月报4',
                path: '/'
            },
            {
                name: '用能月报5',
                path: '/'
            },
            {
                name: '用能月报6',
                path: '/'
            },
            {
                name: '用能月报7',
                path: '/'
            },
            {
                name: '用能月报8',
                path: '/'
            },
            {
                name: '用能月报9',
                path: '/'
            }
        ]
        return {
            // 侧边栏
            navbar: this.$config.navbar,
            // 收缩侧边栏
            isCollapse: false,
            // 面包屑
            brn
        }
    }
}
</script>
