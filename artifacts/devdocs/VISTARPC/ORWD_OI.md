---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD OI<br/>
# ORWD OI

Returns a group of orderable items to be used in the OnNeedData event fora long list box.

## Properties

Property | Value
--- | ---
Label | OI
Routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [OI^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | Return a bolus of orderable items
Input Parameters | XREF, DIR, FROM
First Comment | {::nomarkdown}<pre><code> .Return Array, Cross Reference (S.xxx), Direction, Starting Text</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,IEN,CNT S CNT=44<br/> I DIR=0 D  ; Forward direction<br/> . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM)) Q:FROM=""  D<br/> . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM<br/> . I $G(Y(CNT))="" S Y(I)=""<br/> I DIR=1 D  ; Reverse direction<br/> . F I=1:1:CNT S FROM=$O(^ORD(101.43,XREF,FROM),-1) Q:FROM=""  D<br/> . . S Y(I)=$O(^ORD(101.43,XREF,FROM,0))_"^"_FROM</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}