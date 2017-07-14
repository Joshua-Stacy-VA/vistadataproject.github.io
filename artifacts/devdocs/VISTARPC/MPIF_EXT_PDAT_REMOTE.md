---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF EXT PDAT REMOTE<br/>
# MPIF EXT PDAT REMOTE

Extended PDAT call remote.  ICN or SSN can be passed.

## Properties

Property | Value
--- | ---
Label | PATINFO
Routine | [MPIFEXT2](http://code.osehra.org/dox/Routine_MPIFEXT2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 16 | true | ICN for patient requesting data on.
SSN | LITERAL | 9 | true | SSN for patient data to be returned on.
RPC | LITERAL | 1 | true | 
EXIST | LITERAL | 1 | true | If there is no value or 0 is passed, then a new request for data should be made.  If there is a 1 passed, then if there is an existing request in the ^XTMP(&quot;MPIF EXT PDAT&quot;,ICN/SSN,SITE) global, then that request should be used to return the data -- request had already been made.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}