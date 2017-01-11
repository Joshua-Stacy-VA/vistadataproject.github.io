---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PRF TITLE 

 property | value 
--- | --- 
 label | TIU GET PRF TITLE
 tag | GETTITLE
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.


### Method description

 property | value 
--- | --- 
 Method comment | RPC Gets Note Title associated with FLAGID for PTDFN
 Leading comment lines | Receives TIUY by ref; passes back,TIUY = TitleIEN^Title,0 if no title is associated or flg assignmt is not active,Requires PTDFN,Requires FLAGID - identifier for particular flag assignment,for patient PTDFN. Set as subscript in GETACT^DGPFAPI.,See GETFLG^ORPRF.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTDFN | LITERAL |  | true | Patient IEN in Patient file | 
| FLAGID | LITERAL |  | true | The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF. | 




 ###### Generated on January 11th 2017, 6:39:43 am