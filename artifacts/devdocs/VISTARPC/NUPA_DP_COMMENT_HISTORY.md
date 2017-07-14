---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA DP COMMENT HISTORY<br/>
# NUPA DP COMMENT HISTORY

Pulls in the comments for Discharge Planning issues for a care plan.

## Properties

Property | Value
--- | ---
Label | DPH
Routine | [NUPABCL2](http://code.osehra.org/dox/Routine_NUPABCL2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | The IEN of the Care Plan from file 1927.4.
FLAG | LITERAL |  | true | Flag to determine whether to return the latest comment for each Discharge Planning issue, or the entire set of Discharge Planning comments for theCare Plan. FLAG&#x3D;1 - Entire set of Discharge Planning commentsFLAG&#x3D;2 - Latest comment for each Discharge Planning issue



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}