---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LOAD RECORD FOR EDIT 

 property | value 
--- | --- 
 label | TIU LOAD RECORD FOR EDIT
 tag | GET4EDIT
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC loads the return array with data in a format consistent with thatrequired by the TIU UPDATE RECORD API.  It should be invoked when the userinvokes the Edit action, to load the dialog for editing the document.


### Method description

 property | value 
--- | --- 
 Method comment | Get data in preparation for editing a record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number (IEN) in file 8925 for the document to beedited. | 
| DR  | LITERAL | 245 | true | This optional parameter allows the calling application to specify thefields to be returned in Y(FIELD #) as expected by the edit dialog. e.g., for a PROGRESS NOTE, the user may only edit the DATE/TIME OF NOTE(Field #1301), the AUTHOR OF NOTE (Field #1202), and (per user preference)the SUBJECT of the note (Field #1701) (in addition to the body of thenote, of course). For a Discharge Summary, the user may edit the URGENCYof the record (Field #.09), DICTATED BY (Field #1202), DICTATION DATE(Field #1307), ATTENDING PHYSICIAN (Field #1209), and an optional SUBJECT(if specified as preferred by the user). | 




 ###### Generated on January 11th 2017, 6:39:42 am