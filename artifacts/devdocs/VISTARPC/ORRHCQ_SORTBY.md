---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRHCQ SORTBY<br/>
# ORRHCQ SORTBY

Causes the query results that are in ^TMP("ORRHCQD",$J) to be sorted ona particular column.

## Properties

Property | Value
--- | ---
Label | SORTBY
Routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FNM | LITERAL |  | true | This is the name of the column that should be used as the sort key.
FWD | LITERAL |  | true | This is boolean true if the sort should be ascending, false if descending.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}