---
title: 表格
order: 2
---

# 表格

## table-layout: "auto"

### 所有列都设置宽度

按照内容决定宽度，可以自由缩放，如果内容大于设置的宽度，列宽会被撑开。

<code src="./demo/table/FixColWidthAutoTable.jsx" />

### 所有列都不设置宽度

按照内容决定宽度，可以自由缩放。

<code src="./demo/table/AutoColWidthAutoTable.jsx" />

### 部分列设置宽度

如果宽度够，除了定宽外的其他列会按内容分配剩余空间；如果宽度不够，设置宽度的列会按比例缩小，未设置宽度的列至少会保留一列文字显示。

<code src="./demo/table/PartialFixColWidthAutoTable.jsx" />

## table-layout: "fixed"

### 所有列都设置宽度

表格会按照宽度比例分配空间，设置的宽度是最小宽。

<code src="./demo/table/FixColWidthFixTable.jsx" />

### 所有列都不设置宽度

表格会等分所有列，可以自由等比缩放。

<code src="./demo/table/AutoColWidthFixTable.jsx" />

### 部分列设置宽度

设置宽度的列是定宽，不设置宽度的列自适应剩余空间，空间不足会导致不设置宽度的列游离在表格外。

<code src="./demo/table/PartialFixColWidthFixTable.jsx" />
