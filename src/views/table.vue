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
  <el-table :data="tableData">
    <nested-table-header></nested-table-header>
  </el-table>
</template>
<style></style>
