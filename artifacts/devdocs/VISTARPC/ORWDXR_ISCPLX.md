---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR ISCPLX<br/>
# ORWDXR ISCPLX



## Properties

Property | Value
--- | ---
Label | ISCPLX
Routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISCPLX^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | 1: is complex order 0: is not
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORID,0))<br/> N PKG<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I PKG'="PS" Q<br/> N NUMCHDS,NOWID,NOWVAL<br/> S (NOWVAL,NOWID)=0<br/> S NUMCHDS=$P($G(^OR(100,+ORID,2,0)),U,4)<br/> I NUMCHDS>2 S ORY=1 Q<br/> I NUMCHDS=2 D<br/> . S ORY=1<br/> . S:$D(^OR(100,+ORID,4.5,"ID","NOW")) NOWID=$O(^("NOW",0))<br/> . S:NOWID NOWVAL=$G(^OR(100,+ORID,4.5,NOWID,1))<br/> I NOWVAL=1 S ORY=0 Q</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}