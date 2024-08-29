<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()

const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const tableData = ref([
])
const countData = ref([
])
const tableLabel = ref({
    name: "课程",
    todayBuy: "今日购买",
    monthBuy: "本月购买",
    totalBuy: "总购买",
})
const getTableData = async () => {
    const data = await proxy.$api.getTableData()
    tableData.value = data.tableData
}
const getCountData = async () => {
    const data = await proxy.$api.getCountData()
    countData.value = data
}
onMounted(() => {
    getTableData();
    getCountData();
})
</script>

<template>
    <div>
        <!-- 行提供 gutter 属性来指定列之间的间距，其默认值为0。 -->
        <el-row class="home" :gutter="20">
            <el-col :span="8" style="margin-top: 20px;">
                <el-card shadow="hover">
                    <div class="user">
                        <img :src="getImageUrl('user')" class="user">
                        <div class="user-info">
                            <p class="user-info-admin">Admin</p>
                            <p class="user-info-p">超级管理员</p>
                        </div>
                    </div>
                    <div class="login-info">
                        <p>上次登录时间：<span>2024-08-29</span></p>
                        <p>上次登录地点：<span>南京</span></p>
                    </div>
                </el-card>

                <el-card shadow="hover" class="user-table">
                    <el-table :data="tableData">
                        <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col :span="16" style="margin-top: 20px;">
                <div class="num">
                    <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
                        <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
                        <div class="detail">
                            <p class="num">
                                ￥{{ item.value }}
                            </p>
                            <p class="txt">
                                {{ item.name }}
                            </p>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="less">
.home {
    height: 100%;
    overflow: hidden;

    .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }

        .user-info {
            p {
                line-height: 40px;
            }

            .user-info-admin {
                font-size: 35px;
            }

            .user-info-p {
                color: #999;
            }
        }
    }

    .login-info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;

            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }

    .user-table {
        margin-top: 20px;
    }

    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }
        .icons {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detail {
            margin-left: 16px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num {
                font-size: 30px;
                margin-bottom: 10px;
            }
            .txt {
                font-size: 15px;
                text-align: center;
                color: #999;
            }
        }
    }
}
</style>
