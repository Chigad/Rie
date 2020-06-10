<template>
    <div class="login-content po-relative">
        <!-- header -->
        <div class="login-header p-2">
            <!-- 二维码 -->
            <div class="qr-code d-flex jc-end ai-center po-relative">
                <!-- 小二维码 -->
                <div class="qr-code-small mr-1"></div>

                <!-- title -->
                <div class="lh-2 font-16 text-white">
                    扫码下载App
                </div>

                <!-- 大二维码 -->
                <div class="qr-code-big po-absolute"></div>
            </div>

            <!-- logo -->
            <div class="header-logo d-flex jc-center ai-center">
                <!-- logo -->
                <div class="logo mr-2">
                    <img
                        class="w-100"
                        src="../assets/images/login/logo.png"
                        alt=""
                    />
                </div>
                <!-- title -->
                <div class="title font-24 fw-600 text-white">
                    {{ $config.company.name }}
                </div>
            </div>
        </div>

        <!-- main -->
        <div class="login-main po-relative">
            <!-- 左侧 -->
            <div class="main-img po-absolute"></div>

            <!-- 右侧 -->
            <div class="main-form po-absolute">
                <!-- 表单主体 -->
                <el-form
                    ref="logoModelRef"
                    :rules="loginModelRules"
                    :model="logoModel"
                    class="po-absolute w-50 login-form"
                >
                    <el-form-item class="po-relative" prop="username">
                        <i
                            class="el-icon-user form-icon po-absolute text-white font-18"
                        ></i>
                        <el-input
                            type="text"
                            class="form-input"
                            v-model="logoModel.username"
                            placeholder="用户名"
                        ></el-input>
                    </el-form-item>

                    <el-form-item class="po-relative" prop="password">
                        <i
                            class="el-icon-unlock form-icon po-absolute text-white font-18"
                        ></i>
                        <el-input
                            type="password"
                            class="form-input"
                            v-model="logoModel.password"
                            placeholder="密码"
                            show-password
                        ></el-input>
                    </el-form-item>

                    <el-button class="form-enter bg-white mb-2" @click="login"
                        >登录</el-button
                    >

                    <!-- 文字下落 -->
                    <div class="slogan">
                        <span class="text t-1">智</span>
                        <span class="text t-2">能</span>
                        <span class="text t-3">运</span>
                        <span class="text t-4">维</span>
                        <span class="text t-5">安</span>
                        <span class="text t-6">全</span>
                        <span class="text t-7">用</span>
                        <span class="text t-8">电</span>
                        <span class="text t-9">节</span>
                        <span class="text t-10">能</span>
                        <span class="text t-11">增</span>
                        <span class="text t-12">效</span>
                    </div>
                </el-form>
            </div>
        </div>

        <!-- 底部 -->
        <div class="login-footer po-absolute w-100 ta-center">
            <!-- 版权 -->
            <div
                class="footer-copyright d-flex jc-center ai-center text-white font-16 mb-1"
            >
                <div class="item mr-1">
                    ©版权所有：{{ $config.company.right }}
                </div>
                <div class="item mr-1">地址：{{ $config.company.address }}</div>
                <div class="item mr-1">
                    &nbsp;热线电话：{{ $config.company.tele }}
                </div>
            </div>

            <!-- 备案信息 -->
            <div class="footer-record d-flex jc-center ai-center ">
                <div class="ba-icon"></div>
                <el-link type="success" class="text-white mr-1">
                    {{ $config.company.icp }}
                </el-link>

                <el-link type="success" class="text-white mr-1">
                    {{ $config.company.gwa }}
                </el-link>
            </div>
        </div>
    </div>
</template>

<script>
import valid from '@/utils/valid'
export default {
    name: 'Login',
    data() {
        // 验证用户名
        let validUserName = (rule, value, callback) => {
            const res = valid('name', value)
            if (!res.bla) {
                return callback(new Error(res.msg + ' ：' + res.title))
            }
        }

        // 验证密码
        let validPassword = (rule, value, callback) => {
            if (value.length < 6) {
                return callback(new Error('密码至少6位'))
            }
        }
        return {
            logoModel: {
                username: 'hnzy',
                password: '123456'
            },
            loginModelRules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        validator: validUserName,
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    {
                        validator: validPassword,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },

    methods: {
        login() {
            this.$store
                .dispatch('login', this.logoModel)
                .then(res => {
                    console.log(res)
                    this.$router.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>
