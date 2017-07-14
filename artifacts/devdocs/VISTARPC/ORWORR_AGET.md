---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORR AGET<br/>
# ORWORR AGET

Get an abbreviated order list for a patient in the format:     ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm

## Properties

Property | Value
--- | ---
Label | AGET
Routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [AGET^ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
Method Comment | Get abbrev. event delayed order list for patient
Input Parameters | DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT, ORRECIP
First Comment | {::nomarkdown}<pre><code> returns ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm<br/> see input parameters above<br/> -- from ORWORR<br/> -- section uses ORQ1 to get orders list rather than XGET --</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORLIST,ORIFN,IFN,I,ORWTS,TOT,MULT,ORWARD,TXTVW,ORYD,PTEVTID,EVTNAME<br/> S (PTEVTID,EVTNAME)=""<br/> K ^TMP("ORR",$J),^TMP("ORRJD",$J)<br/> S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2<br/> S ORWTS=+$P(FILTER,U,2),FILTER=+FILTER<br/> S MULT=$S("^1^6^8^9^10^11^13^14^20^22^"[(U_FILTER_U):1,1:0)<br/> I $L($G(^DPT(DFN,.1))) S ORWARD=1 ; normally ptr to 42<br/> S:'$L($G(DTFROM)) DTFROM=0<br/> S:'$L($G(DTTHRU)) DTTHRU=0<br/> I $P(DTFROM,".")=$P(DTTHRU,"."),$P(DTFROM,".",2)>$P(DTTHRU,".",2),$P(DTTHRU,".",2)="" S $P(DTTHRU,".",2)=2359<br/> S:'$L($G(EVENT)) EVENT=0<br/> I $G(EVTDCREL)="TRUE" D<br/> . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,2,MULT,"",1,EVENT)<br/> . D GET2^ORWORR1<br/> E  D<br/> . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,0,MULT,"",1,EVENT)<br/> . D GET1^ORWORR1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}