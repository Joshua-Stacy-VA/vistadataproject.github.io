---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXA WCPUT<br/>
# ORWDXA WCPUT

Set ward comments for an order.

## Properties

Property | Value
--- | ---
Label | WCPUT
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [WCPUT^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Set ward comments
Input Parameters | ORID, WCLST
Code | {::nomarkdown}<pre><code> N DIERR,ERRLST,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br/> D WP^DIE(100.008,ACT_","_ORIFN_",",50,"","WCLST","ERRLST")<br/> S ERR="" I $D(DIERR) S ERR="An error occurred while saving comments."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}