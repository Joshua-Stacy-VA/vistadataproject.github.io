---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST GENERIC DRUGS<br/>
# ROR LIST GENERIC DRUGS

The ROR LIST GENERIC DRUGS remote procedure returns a list of genericdrugs, which are referenced by the ROR GENERIC DRUG file (#799.51).

## Properties

Property | Value
--- | ---
Label | GDLIST
Routine | [RORRP035](http://code.osehra.org/dox/Routine_RORRP035_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
GROUP | LITERAL |  |  | If this parameter is defined and not zero, it should contain a valid codeof the Drug Group. In this case, only the drugs associated with this groupwill be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}