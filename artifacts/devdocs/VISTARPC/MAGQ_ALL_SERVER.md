---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ ALL SERVER<br/>
# MAGQ ALL SERVER

Returns a list of all online file servers at a site.This network location file list requires the following from eachcandidate:ONLINEtype: MAGpath does not contain: ":"NON-ROUTER 

## Properties

Property | Value
--- | ---
Label | ALLSERV
Routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
null |  |  |  | No input parameter required.
GROUP | LITERAL | 16 | true | This value should be either &quot;GROUP&quot; or &quot;ALL&quot; to differentiatebetween a Current Write Group Update and an All share update.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}