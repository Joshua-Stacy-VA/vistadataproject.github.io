---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET ROIS 

 property | value 
--- | --- 
 label | DSIR GET ROIS
 tag | GETLIST
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC is used to return an array of ROI INSTANCE (File 19620) entries. GETLIST(AXY,TYPE,STAT,IEN)      ;RPC - DSIR GET ROISInput: TYPE: Set of Codes:     \P\  : Get list by patient     \C\  : Get list by clerk     \O\  : Get all open or pending requests.            Defaults to all requests for a given status     \R\  : Get list by requestor    STAT: Set of Codes: (Delimited by '^', defaults to *)     \*\  : Get all requests of a given type     \O\  : Get only the open requests of this type     \C\  : \          \ closed \                \ (-D,-G,-P)     \P\  : \          \ pending \               \     \N\  : \          \ other non-disclosure \  \                       (-NR,-RF,-ND,-NV,-RC,-NF,-NU)     \E\  : \          \ entered in error \      \     \X\  : \          \ cancelled \             \     \A\  : \          \ appealed \              \ (-RV,-PR)  ID: IFN of patient, requestor or clerk.     If not for requestor or clerk IEN should be one of the following formats           nnnn;DPT( - VA Patient file entry           nnnn;DSIR(19620.96, - DSIR NON-COMPUTERIZED RECORDS PATIENT           1;DSIR(19620.95, - True FOIA requests        Return: Global Array IEN^Patient Name^External Date Entered^Status^Requestor^SSN^Priority^FMDT    ^Exemptions^Expedite Reqstd^Expedite Granted^Clerk Name    ^Opened by Clerk Name^Internal Opened Date^External Open Date    ^Last Closed Clerk^Internal Last Closed Date^External Last Closed Date    ^Last Reopen Clerk^Internal Last Reopen Date^External Last Reopen Date

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE OF LIST | LITERAL | 1 | true | \P\  : Get list by patient\C\  : Get list by clerk\O\  : Get all open or pending requests. Defaults to all requests for a given status | 
| STATUS | LITERAL | 8 | true | \A\  : Get only the appealed requests of this type\O\  : Get only the open requests of this type\C\  : \          \ closed \                \\P\  : \          \ pending \               \\N\  : \          \ Other Nondisclosures    \\E\  : \          \ entered in error \      \\X\  : \          \ cancelled \             \\*\  : Get all types | 
| PATIENT/CLERK ID | LITERAL | 99 | true | DFN of patient or IEN of clerk. | 




 ###### Generated on January 11th 2017, 6:39:43 am