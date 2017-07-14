---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 DLGIEN<br/>
# OREVNTX1 DLGIEN



## Properties

Property | Value
--- | ---
Label | DLGIEN
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DLGIEN^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return Order Dialog IEN based on name
Input Parameters | DLGNAME
Code | {::nomarkdown}<pre><code> Q:'$D(^ORD(101.41,"B",DLGNAME))<br/> S ORY=$O(^ORD(101.41,"B",DLGNAME,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}