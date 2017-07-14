---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDAL32 ALLERGY MATCH<br/>
# ORWDAL32 ALLERGY MATCH

Given a text string, return a list of possible matches from severaldifferent sources.

## Properties

Property | Value
--- | ---
Label | ALLSRCH
Routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
user input string | LITERAL | 32 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLSRCH^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Return list of partial matches  
Input Parameters | X
Code | {::nomarkdown}<pre><code> N ORX,ROOT,XP,CNT,ORFILE,ORSRC,ORIEN,ORREAX S ORIEN=0,CNT=0,ORSRC=0,ORFILE=""<br/> S ORX=X,X=$$UP^XLFSTR(X)<br/> F ROOT="^GMRD(120.82,""B"")","^GMRD(120.82,""D"")",$$B^PSNAPIS,$$T^PSNAPIS,"^PSDRUG(""B"")","^PSDRUG(""C"")","^PS(50.416,""P"")","^PS(50.605,""C"")" D<br/> . S ORSRC=$G(ORSRC)+1,ORFILE=$P(ROOT,",",1)_")",ORSRC(ORSRC)=$P($T(FILENAME+ORSRC),";;",2)<br/> . I (ORSRC'=2),(ORSRC'=6) S CNT=CNT+1,Y(CNT)=ORSRC_U_ORSRC(ORSRC)_U_U_U_"TOP"_U_"+"<br/> . I ORSRC=1!(ORSRC=2) D<br/> .. I $D(@ROOT@(X)) D<br/> ... I ORSRC=1,X="OTHER ALLERGY/ADVERSE REACTION" Q  ;don't send this entry<br/> ... S ORIEN=$O(@ROOT@(X,0))<br/> ... I $L($T(SCREEN^XTID)) I $$SCREEN^XTID(120.82,.01,ORIEN_",") Q  ;233 Is term active?<br/> ... I ORSRC=2 S CNT=CNT+1,Y(CNT)=ORIEN_U_$P($G(^GMRD(120.82,+ORIEN,0)),U,1)_" <"_X_">"_ROOT<br/> ... I ORSRC'=2  S CNT=CNT+1,Y(CNT)=ORIEN_U_X_ROOT<br/> ... S Y(CNT)=Y(CNT)_U_$P($G(^GMRD(120.82,+Y(CNT),0)),U,2)_U_$S(ORSRC=2:1,1:ORSRC)<br/> .. S XP=X F  S XP=$O(@ROOT@(XP)) Q:XP=""  Q:$E(XP,1,$L(X))'=X  D<br/> ... I ORSRC=1,XP="OTHER ALLERGY/ADVERSE REACTION" Q  ;don't send this entry<br/> ... S ORIEN=$O(@ROOT@(XP,0))<br/> ... I $L($T(SCREEN^XTID)) I $$SCREEN^XTID(120.82,.01,ORIEN_",") Q  ;233 Is term active?<br/> ... I ORSRC=2 S CNT=CNT+1,Y(CNT)=ORIEN_U_$P($G(^GMRD(120.82,+ORIEN,0)),U,1)_" <"_XP_">"_ROOT ; partial matches<br/> ... I ORSRC'=2  S CNT=CNT+1,Y(CNT)=ORIEN_U_XP_ROOT<br/> ... S Y(CNT)=Y(CNT)_U_$P($G(^GMRD(120.82,+Y(CNT),0)),U,2)_U_$S(ORSRC=2:1,1:ORSRC)<br/> . I (ORSRC>2),(ORSRC'=4),(ORSRC'=5),(ORSRC'=6) D<br/> .. N CODE,LIST,VAL,NAME<br/> .. S CODE=$S(ORSRC=3:"S VAL=$$TGTOG2^PSNAPIS(X,.LIST)",ORSRC=4:"D TRDNAME(X,.LIST)",ORSRC=7:"D INGSRCH(X,.LIST)",ORSRC=8:"D CLASRCH(X,.LIST)",1:"") Q:'$L(CODE)<br/> .. X CODE I $D(LIST) S ORIEN=0 F  S ORIEN=$O(LIST(ORIEN)) Q:'ORIEN  D<br/> ... S NAME=$P(LIST(ORIEN),U,2)<br/> ... Q:$E($P(LIST(ORIEN),U,2),1,$L(X))'=X<br/> ... I $L($T(SCREEN^XTID)) I $$SCREEN^XTID($S(ORSRC=3:50.6,(ORSRC=4):50.6,ORSRC=7:50.416,ORSRC=8:50.605,1:0),.01,ORIEN_",") Q<br/> ... S CNT=CNT+1,Y(CNT)=ORIEN_U_NAME_ROOT_U_"D"_U_ORSRC<br/> . I ORSRC=4 D<br/> .. N CODE,LIST,VAL,NAME<br/> .. S CODE="D TRDNAME(X,.LIST)"<br/> .. X CODE I $D(LIST) S ORIEN=0 F  S ORIEN=$O(LIST(ORIEN)) Q:'ORIEN  D<br/> ... S NAME=$P(LIST(ORIEN),U,2)<br/> ... Q:$E($P(LIST(ORIEN),U,2),1,$L(X))'=X<br/> ... I $L($T(SCREEN^XTID)) I $$SCREEN^XTID(50.6,.01,+LIST(ORIEN)_",") Q<br/> ... S CNT=CNT+1,Y(CNT)=+LIST(ORIEN)_U_NAME_ROOT_U_"D"_U_ORSRC</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}