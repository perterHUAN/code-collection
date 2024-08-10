<script setup>
const fields = [
  {
    prop: 'date',
    label: '日期',
    width: 180,
  },
  {
    prop: 'name',
    label: '姓名',
    width: 180,
  },
  {
    prop: 'address',
    label: '地址',
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
</script>
<template>
  <el-table :data="tableData">
    <el-table-column
      v-for="item in fields"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      align="center"
    ></el-table-column>
  </el-table>
</template>
<style type="scope"></style>
