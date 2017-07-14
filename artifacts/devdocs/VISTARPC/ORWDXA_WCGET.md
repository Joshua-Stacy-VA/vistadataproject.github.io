---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA WCGET<br/>
# ORWDXA WCGET

Return ward comments for an order.

## Properties

Property | Value
--- | ---
Label | WCGET
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [WCGET^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | ward comments
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> N I,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br/> S I=0 F  S I=$O(^OR(100,ORIFN,8,ACT,5,I)) Q:'I  S LST(I)=$G(^(I,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}