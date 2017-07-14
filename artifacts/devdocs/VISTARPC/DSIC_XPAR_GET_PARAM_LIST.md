---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR GET PARAM LIST<br/>
# DSIC XPAR GET PARAM LIST

This will return a detailed list of one or more Kernel ParameterDefinitions.  It does not return every Param Definition field. Either the NAME input parameter or the PREFIX input parameter is required.  If you pass a NAME then PREFIX is ignored.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 30 | true | This is the name or the IFN for a Parameter Definition.  Pass this value only if you wish to retrieve the data for one specific Parameter Definition.
PREFIX | LITERAL | 20 | true | This is the namespace or the leading characters for the Parameter Definitions you wished to be returned.  For example, PREFIX&#x3D;&quot;DSIC&quot; will return all DSIC Kernel Parameter Definitions.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}