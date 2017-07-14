---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL PROBLEM LEX SEARCH<br/>
# ORQQPL PROBLEM LEX SEARCH

Get a list from clinical lexicon for display in list or combo box

## Properties

Property | Value
--- | ---
Label | LEXSRCH
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAG | LITERAL |  |  | BACK/FORE FLAG
NUM | LITERAL |  |  | MAX NUMBER OF LIST ELEMENTS



## MUMPS Method Description

Property | Value
--- | ---
Method | [LEXSRCH^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | Get candidate Problems from LEX file
Input Parameters | FROM, N, VIEW, ORDATE
Code | {::nomarkdown}<pre><code> N LEX,VAL,VAL1,COD,CIEN,SYS,MAX,NAME,ORIMPDT,ICDCSYS,ICDCODE<br/> S ORIMPDT=$$IMPDATE^LEXU("10D")<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S:'$G(N) N=100<br/> S:'$L($G(VIEW)) VIEW="PL1"<br/> D CONFIG^LEXSET("GMPL",VIEW,ORDATE)<br/> D LOOK^LEXA(FROM,"GMPL",N,"",ORDATE)<br/> S S=0<br/> F  S S=$O(LEX("LIST",S)) Q:S<1  D<br/> . S VAL1=LEX("LIST",S)<br/> . S COD="",CIEN="",SYS="",NAME="",ICDCODE=""<br/> . S ICDCSYS=$S(ORDATE<ORIMPDT:"ICD",1:"10D")<br/> . I $L(VAL1,"CPT-4 ")>1 D<br/> .. S SYS=$S(ORDATE<ORIMPDT:"ICD-9-CM ",1:"ICD-10-CM ")<br/> .. S COD=$S(ORDATE<ORIMPDT:"799.9",1:"R69")<br/> .. S CIEN=""<br/> .. S NAME=$P(VAL1," (CPT-4")<br/> . I $L(VAL1,"DSM-IV ")>1 D<br/> .. S SYS="DSM-IV "<br/> .. S COD=$P($P(VAL1,SYS,2),")")<br/> .. S:COD["/" COD=$P(COD,"/",1)<br/> .. S ICDCODE=$$ONE^LEXU($P(VAL1,U,1),ORDATE,ICDCSYS)<br/> .. S ICDCODE=$S(ICDCODE["":COD,1:ICDCODE)<br/> .. S CIEN=+$$ICDDATA^ICDXCODE(ICDCSYS,$G(ICDCODE),ORDATE,"E")<br/> .. S NAME=$P(VAL1," (DSM-IV")<br/> .. ;<br/> . I $L(VAL1,"(TITLE 38 ")>1 D<br/> .. S SYS="TITLE 38 "<br/> .. S COD=$P($P(VAL1,SYS,2),")")<br/> .. S:COD["/" COD=$P(COD,"/",1)<br/> .. S ICDCODE=$$ONE^LEXU($P(VAL1,U,1),ORDATE,ICDCSYS)<br/> .. S ICDCODE=$S(ICDCODE["":COD,1:ICDCODE)<br/> .. S CIEN=+$$ICDDATA^ICDXCODE(ICDCSYS,$G(ICDCODE),ORDATE,"E")<br/> .. S NAME=$P(VAL1,"(TITLE 38 ")<br/> .. ;<br/> . I $L(VAL1,"ICD-9-CM ")>1 D<br/> .. S SYS="ICD-9-CM "<br/> .. S COD=$P($P(VAL1,SYS,2),")")<br/> .. S:COD["/" COD=$P(COD,"/",1)<br/> .. S CIEN=+$$ICDDATA^ICDXCODE("DIAG",$G(COD),ORDATE,"E")<br/> .. S NAME=$P(VAL1," (ICD-9-CM")<br/> .. ;<br/> . I $L(VAL1,"ICD-10-CM ")>1 D<br/> .. S SYS="ICD-10-CM "<br/> .. S COD=$P($P(VAL1,SYS,2),")")<br/> .. S:COD["/" COD=$P(COD,"/",1)<br/> .. S CIEN=+$$ICDDATA^ICDXCODE("DIAG",$G(COD),ORDATE,"E")<br/> .. S NAME=$P(VAL1," (ICD-10-CM")<br/> . I $L(NAME)=0 S NAME=$P($P(VAL1," (")," *")<br/> . ;<br/> . ; jeh Clean left over codes<br/> . S NAME=$P(NAME," (CPT-4")<br/> . S NAME=$P(NAME," (DSM-IV")<br/> . S NAME=$P(NAME,"(TITLE 38 ")<br/> . S NAME=$P(NAME," (ICD-9-CM")<br/> . S NAME=$P(NAME," (ICD-10-CM")<br/> . ;<br/> . S VAL=NAME_U_COD_U_CIEN_U_SYS ; ien^.01^icd^icdifn^system<br/> . S LIST(S)=VAL<br/> . S MAX=S<br/> I $G(MAX)'="" S LIST(MAX+1)=$G(LEX("MAT"))<br/> K ^TMP("LEXSCH",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}