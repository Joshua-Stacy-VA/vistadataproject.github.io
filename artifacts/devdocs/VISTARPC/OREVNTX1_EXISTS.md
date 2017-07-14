---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 EXISTS<br/>
# OREVNTX1 EXISTS



## Properties

Property | Value
--- | ---
Label | EXISTS
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [EXISTS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Returns PtEvtID ptr #100.2 if patient already has delayed orders
Input Parameters | DFN, EVT
Code | {::nomarkdown}<pre><code> I '+EVT S ORY=0 Q<br/> N PTEVT S (PTEVT,ORY)=0<br/> S PTEVT=$O(^ORE(100.2,"AE",+DFN,+EVT,PTEVT))<br/> I PTEVT>0 S ORY=PTEVT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}