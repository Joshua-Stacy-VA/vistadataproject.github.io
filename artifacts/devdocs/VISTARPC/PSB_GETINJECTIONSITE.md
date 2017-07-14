---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB GETINJECTIONSITE<br/>
# PSB GETINJECTIONSITE

Get the last nn injections site info from the BCMA MEDICATION LOG file #53.9.   Get only of specific Orderable Items per patient in reversechronology date/time order or All Orderable Items per patient in reverse chronology date/time order.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [PSBINJEC](http://code.osehra.org/dox/Routine_PSBINJEC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient IEN number.
TIME | LITERAL |  | true | A time range, in hours, to search backwards through the BCMA MEDICATION LOG file #53.79 for injection site data. 
MAX | LITERAL |  | true | The maximum number of injection site items to return within the Time Range specified.
PSBOI | LITERAL |  | true | Orderable Item IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}