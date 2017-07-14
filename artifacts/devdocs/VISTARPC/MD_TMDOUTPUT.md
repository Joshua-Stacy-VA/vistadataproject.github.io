---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MD TMDOUTPUT<br/>
# MD TMDOUTPUT

Manages the output of VistA data to the client via the default HFS device.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [MDRPCOO](http://code.osehra.org/dox/Routine_MDRPCOO_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 30 | true | Currently set to EXECUTE as the only option.
RTN | LITERAL | 30 | true | Contains the routine to produce the output.  Currently to client producesthis parameter in the form of TAG^ROUTINE(needed parameters) to simplifythe calling process.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}