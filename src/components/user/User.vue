<template>
    <div class="user_box">
        <el-breadcrumb  separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >用户管理</el-breadcrumb-item>
            <el-breadcrumb-item >用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input placeholder="请输入内容">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
              <el-col :span="18">
                <el-button type="primary" plain>添加用户</el-button>
              </el-col>
            </el-row>
            <!-- 表格 -->
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="用户名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="邮箱"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="电话">
              </el-table-column>
              <el-table-column
                prop="address"
                label="角色">
              </el-table-column>
              <el-table-column label="状态">
              <template slot-scope="scope">
                  <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                  </el-switch>
              </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template>
                  <el-button-group>
                    <el-button type="primary" round icon="el-icon-edit"></el-button>
                    <el-button type="primary" round icon="el-icon-delete"></el-button>
                    <el-button type="primary" round icon="el-icon-s-tools"></el-button>
                  </el-button-group>
                </template>
              </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
import mixin from './User-Mixin.js'
export default {
    mixins: [mixin]
}
</script>
<style>
    .el-card{
        margin:10px 0 ;
    }
</style>