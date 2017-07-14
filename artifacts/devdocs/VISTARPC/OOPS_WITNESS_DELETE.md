---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS WITNESS DELETE<br/>
# OOPS WITNESS DELETE

The broker call will remove witness information (stored in node "CA1W") fromthe 2260 file.

## Properties

Property | Value
--- | ---
Label | DELWITN
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | The INPUT parm will contain the IEN of the case in the 2260 file, and thewitness number in the format IEN^WITNESS NUMBER. The witness number is the subfield indentification as such... ^OOPS(2260,170,&quot;CA1W&quot;,3,0)  3 BEING THE WITNESS NUMBER.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}