---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDR FILER<br/>
# DSIC DDR FILER

This calls FILE^DIE to file data.  It can only file data at a single level (top, multiple, a multiple within a multiple, etc.).  It presumes you know how to set Param[x] properly in Fileman syntax.

## Properties

Property | Value
--- | ---
Label | FILE
Routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 15 | true | This is the file number (or subfile number) for which data is to be filed.
IENS | LITERAL | 40 | true | This is the IENS parameter to the FILE^DIE call.   If you are filing data to a file at top level fields, then IENS must be &lt;null&gt;.   If you are filing data to a subfile entry then IENS must be properly defined.
FLAGS | LITERAL | 10 | true | This is the FLAGS parameter used when invoking FILE^DIE.If no value is passed, then the default value is &quot;KE&quot;
DATA | LIST | 250 | true | This is an array of fields in format:  DATA(field_num)&#x3D;value 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}