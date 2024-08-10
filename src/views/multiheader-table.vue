<script setup>
import NestedTableHeader from './nested-table-header.vue';
const fields = [
  {
    label: '序号',
    prop: 'xh',
  },
  {
    label: '姓名',
    prop: 'xm',
  },
  {
    prop: 'xx',
    label: '管理考核',
    children: [
      {
        prop: 'jl',
        label: '奖',
      },
      {
        prop: 'kf',
        label: '罚',
      },
      {
        prop: 'hj',
        label: '合计',
      },
    ],
  },
  {
    prop: 'ydjj',
    label: '应得奖金',
  },
  {
    prop: 'sdjj',
    label: '实得奖金',
  },
];
const tableData = [
  {
    xh: 1,
    xm: '屈敏',
    jl: '11',
    kf: '12',
    hj: '23',
    ydjj: '',
    sdjj: '',
  },
];
</script>
<template>
  <h2>for循环实现</h2>
  <el-table :data="tableData">
    <el-table-column
      v-for="item in fields"
      :prop="item.prop"
      :label="item.label"
      align="center"
      :width="item.width"
      min-width="100"
    >
      <template v-if="item.children">
        <el-table-column
          v-for="subItem in item.children"
          :prop="subItem.prop"
          :label="subItem.label"
          align="center"
          :width="subItem.width"
          min-width="100"
        >
        </el-table-column>
      </template>
    </el-table-column>
  </el-table>
  <h2>嵌套表头组件实现</h2>
  <nested-table-header :fields="fields"> </nested-table-header>
</template>
<style></style>
