---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCIRN FACLIST<br/>
# ORWCIRN FACLIST

Returns a list of the remote VA facilities at which the selected patienthas been seen.

## Properties

Property | Value
--- | ---
Label | FACLIST
Routine | [ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [FACLIST^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
Method Comment | Return list of remote facilities for patient
Input Parameters | ORDFN
First Comment | {::nomarkdown}<pre><code>Check to see if CIRN PD/MPI installed</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X,ORSITES,I,IFN,LOCAL,CTR,HDRFLG,GOTNHIN<br/> S X="MPIF001" X ^%ZOSF("TEST")<br/> I '$T S ORY(0)="-1^CIRN MPI not installed." Q<br/> S X="VAFCTFU1" X ^%ZOSF("TEST")<br/> I '$T S ORY(0)="-1^Remote data view not installed." Q<br/> S X=$$GET^XPAR("ALL","ORWRP CIRN REMOTE DATA ALLOW",1,"I")<br/> I 'X S ORY(0)="-1^Remote access not allowed" Q<br/> D TFL^VAFCTFU1(.ORY,ORDFN)<br/> S (GOTNHIN,I)=0 F  S I=$O(ORY(I)) Q:'I  I $P(ORY(I),"^",5)="OTHER" D  ;Screen out Type 'OTHER' locations<br/> . I $P(ORY(I),"^")="200HD" Q  ;HDR<br/> . I $P(ORY(I),"^")="200NDD" Q  ;DoD Correlated Patients<br/> . I $E($P(ORY(I),"^"),1,4)="200N",'GOTNHIN S GOTNHIN=1,$P(ORY(I),"^",2)="Non-VA DATA AVAILABLE - use VistAWeb to access" Q  ;NwHIN Master Item<br/> . K ORY(I)<br/> S HDRFLG=0<br/> I $$GET^XPAR("ALL","ORWRP CIRN SITES ALL",1,"I") D<br/> . S (CTR,I)=0<br/> . F  S I=$O(ORY(I)) Q:'I  S $P(ORY(I),"^",5)=1,CTR=CTR+1 D<br/> .. I $P(ORY(I),"^")=200 S $P(ORY(I),"^",2)="DEPT. OF DEFENSE"<br/> .. I $P(ORY(I),"^")="200HD" D<br/> ... I +$$GET^XPAR("ALL","ORWRP HDR ON",1,"I")=0 K ORY(I) S CTR=CTR-1 Q<br/> ... S HDRFLG=I ; Remove commented out code to enable HDR + 1 other site. <br/> D GETLST^XPAR(.ORSITES,"ALL","ORWRP CIRN SITES","I")<br/> S (CTR,I)=0,LOCAL=$P($$SITE^VASITE,"^",3)<br/> F  S I=$O(ORY(I)) Q:'I  D<br/> . I +ORY(I)=+LOCAL K ORY(I) Q<br/> . S IFN=$$IEN^XUAF4(ORY(I)),CTR=CTR+1<br/> . I IFN,$G(ORSITES(IFN)) S $P(ORY(I),"^",5)=1 D<br/> .. I $P(ORY(I),"^")=200 S $P(ORY(I),"^",2)="DEPT. OF DEFENSE"<br/> . I IFN,$G(ORSITES(IFN)),$P(ORY(I),"^")="200HD" D<br/> .. I +$$GET^XPAR("ALL","ORWRP HDR ON",1,"I")=0 K ORY(I) S CTR=CTR-1 Q<br/> .. S HDRFLG=I ; Remove commented out code to enable HDR + 1 other site. <br/> I '$L($O(ORY(""))) S ORY(0)="-1^Only local data exists for this patient"<br/> I $G(HDRFLG),CTR'>1 K ORY(HDRFLG) S ORY(0)="-1^Only HDR has data for this patient"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}