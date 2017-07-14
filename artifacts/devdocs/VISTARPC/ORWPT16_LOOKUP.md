---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT16 LOOKUP<br/>
# ORWPT16 LOOKUP



## Properties

Property | Value
--- | ---
Label | LOOKUP
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LOOKUP^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | Return a set of patient names
Input Parameters | FROM
Code | {::nomarkdown}<pre><code> N I,X<br/> D FIND^DIC(2,"","","M",FROM)<br/> S I=0,Y=""<br/> F  S I=$O(^TMP("DILIST",$J,1,I)) Q:'I  D<br/> . S X=^TMP("DILIST",$J,"ID",I,.09)<br/> . S X=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br/> . S Y(I)=^TMP("DILIST",$J,2,I)_"^"_^TMP("DILIST",$J,1,I)_"^"_X<br/> K ^TMP("DILIST",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}