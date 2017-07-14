---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQCN GET CONSULT<br/>
# ORQQCN GET CONSULT

Given a Consult ID from file 123, return the zero node to the client forloading into a consult record in RESULTS[0].  If the consult has anyassociated TIU records (completion, addenda) these will be returned inRESULTS[i..j].

## Properties

Property | Value
--- | ---
Label | GETCSLT
Routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult ID | LITERAL | 16 | true | Consult IEN from file #123, REQUEST/CONSULT.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETCSLT^ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
Method Comment | Retrieve a complete consult record
Input Parameters | ORIEN, SHOWADD
Code | {::nomarkdown}<pre><code> N ORDOC,ORREQ,I,X,SEQUENCE,ORI,ORGMRC,MEDRSLTS,ROOT<br/> S MEDRSLTS=1<br/> Q:+$G(ORIEN)=0<br/> I '$D(^GMR(123,ORIEN)) S ORY(0)="-1^Invalid consult" Q<br/> I $$PATCH^XPDUTL("GMRC*3.0*17") D<br/> . D DOCLIST^GMRCGUIB(.ORGMRC,ORIEN,MEDRSLTS)<br/> E  D DOCLIST^GMRCGUIB(.ORGMRC,ORIEN)<br/> S ORY(0)=ORGMRC(0),ORREQ=$P(ORY(0),U,14)<br/> S:+$G(SHOWADD) SEQUENCE="D"<br/> I ORREQ'="",$D(^VA(200,ORREQ,0)) S $P(ORY(0),U,14)=ORREQ_";"_$P(^VA(200,ORREQ,0),U,1)<br/> S X=0,I=1,ORI=1<br/> F  S X=$O(ORGMRC(50,X)) Q:X=""  D<br/> . S ORDOC=$P(ORGMRC(50,X),U,1)<br/> . S ROOT=U_$P($P(ORDOC,";",2),",",1)_")"<br/> . Q:'$D(@ROOT@(+ORDOC))<br/> . I ROOT="^TIU(8925)" D<br/> . . S ORY(I)=+ORDOC_U_$$RESOLVE^TIUSRVLO(+ORDOC)<br/> . . S $P(ORY(I),U,14)="1",I=I+1  ; parent treenode=1 for TIU docs<br/> . . S ORY("INDX",+ORDOC,ORI)=""<br/> . . I +$G(SHOWADD) D <br/> . . . I +$$HASDAD^TIUSRVLI(+ORDOC) S ORI=I+1 D SETDAD^TIUSRVLI("ORY",+ORDOC,.ORI) S I=ORI+1 ; for treeview of related notes<br/> . . . I +$$HASKIDS^TIUSRVLI(+ORDOC) S ORI=I+1 D SETKIDS^TIUSRVLI("ORY",+ORDOC,.ORI) S I=ORI+1 ; for treeview of related notes<br/> . E  I $E(ROOT,1,5)="^MCAR" D<br/> . . S ORY(I)=ORGMRC(50,X)<br/> . . S $P(ORY(I),U,14)="2",I=I+1     ; parent treenode=2 for med results<br/> K ORY("INDX")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}