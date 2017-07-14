---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD2 DEVINFO<br/>
# ORWD2 DEVINFO

Returns device information related to a location/nature of order when anorder is signed or released via CPRS GUI.

## Properties

Property | Value
--- | ---
Label | DEVINFO
Routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEVINFO^ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
Method Comment | Return device info when signing/releasing orders
Input Parameters | LOC, NATR, ORDERS
First Comment | {::nomarkdown}<pre><code> Y(0)=Prompt Chart ^ Prompt Label ^ Prompt Requisition ^ Prompt Work<br/>      ^ Chart Device ^ Label Device ^ Requisition Device ^ Work Device<br/> for Prompt X: *=no print, 0=autoprint, 1=prompt&dev 2=prompt only <br/> Y(n)=ORIFN;ACT ^ Chart ^ Label ^ Requisition ^ Service ^ Work<br/> LOC=location (ptr 44), NATR=nature of order (ptr 100.02)<br/> ORDERS=ORIFN;ACT ^ R | S | E (released, signed, error)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N NATCHT,NATWRK,WHENCHT,PRMTCHT,PRMTLBL,PRMTREQ,PRMTWRK<br/> N DOCHT,DOLBL,DOREQ,DOWRK,RELEASE,ORDERID,I,J,X<br/> N NDCR,NODE,NPCC,NPWC<br/> S (DOCHT,DOLBL,DOREQ,DOWRK,I,J)=0,LOC=+LOC_";SC("<br/> S NATR=$O(^ORD(100.02,"C",NATR,0))<br/> S NATCHT=+$P($G(^ORD(100.02,NATR,1)),U,2),NATWRK=+$P($G(^(1)),U,5)<br/> S WHENCHT=$$GET^XPAR("ALL^"_LOC,"ORPF PRINT CHART COPY WHEN",1,"I")<br/> I '$L(WHENCHT) S WHENCHT="R"<br/> S PRMTCHT=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR CHART COPY",1,"I")<br/> S PRMTLBL=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR LABELS",1,"I")<br/> S PRMTREQ=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR REQUISITIONS",1,"I")<br/> S PRMTWRK=$$GET^XPAR("ALL^"_LOC,"ORPF PROMPT FOR WORK COPY",1,"I")<br/> N BBPKG S BBPKG=+$O(^DIC(9.4,"B","VBECS",0))<br/> D INSRTBB(.ORDERS) ; insert any blood bank child lab orders into ORDERS array<br/> F  S I=$O(ORDERS(I)) Q:'I  I $P(ORDERS(I),U,2)'["E" D<br/> . S ORDERID=$P(ORDERS(I),U),RELEASE=($P(ORDERS(I),U,2)["R")<br/> . S J=J+1,LST(J)=ORDERID_"^^^^"<br/> . ;AGP this section check the order for DC Reason and grabs the print requirement<br/> . ;from the Nature of Order file.<br/> . S NPCC=1,NPWC=1<br/> . S NDCR=$P($G(^OR(100,+ORDERID,6)),U) I NDCR>0 D<br/> . .S NODE=$G(^ORD(100.02,NDCR,1))<br/> . .S NPCC=+$P(NODE,U,2)<br/> . .S NPWC=+$P(NODE,U,5)<br/> . ; skip chart copy if nature doesn't print, no match to 'print when',<br/> . ; prompt parameter says don't print, or is lab child of blood bank <br/> . I NPCC,NATCHT,($P(ORDERS(I),U,2)[WHENCHT),(PRMTCHT'="*"),$$HASFMTC,$$NOTBB(+ORDERS(I)) S $P(LST(J),U,2)=1,DOCHT=1<br/> . ; skip label if not released, no label format, or prompt parameter<br/> . ; says don't print<br/> . I RELEASE,(PRMTLBL'="*"),$$HASFMTL S $P(LST(J),U,3)=1,DOLBL=1<br/> . ; skip requisition if not released, no requistion format, or the<br/> . ; prompt parameter says don't print<br/> . I RELEASE,(PRMTREQ'="*"),$$HASFMTR S $P(LST(J),U,4)=1,DOREQ=1<br/> . ; skip service copy if not releasing<br/> . I RELEASE S $P(LST(J),U,5)=1<br/> . ; skip work copy if nature doesn't print, not released, no work<br/> . ; copy format, or prompt parameter says don't print<br/> . I NPWC,NATWRK,RELEASE,(PRMTWRK'="*"),$$HASFMTW,$$NOTBB(+ORDERS(I)) S $P(LST(J),U,6)=1,DOWRK=1<br/> S LST(0)=$$DEFDEV</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}