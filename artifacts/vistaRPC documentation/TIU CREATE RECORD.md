---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU CREATE RECORD 

 property | value 
--- | --- 
 label | TIU CREATE RECORD
 tag | MAKE
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure allows the creation of TIU DOCUMENT records.


### Method description

 property | value 
--- | --- 
 Method comment | New Document
 Leading comment lines | SUCCESS = (by ref) TIU DOCUMENT # (PTR to 8925),= 0^Explanatory message if no SUCCESS,DFN     = Patient (#2),TITLE   = TIU Document Definition (#8925.1),[VDT]   = Date(/Time) of Visit,[VLOC]  = Visit Location (HOSPITAL LOCATION),[VSIT]  = Visit file ien (#9000010),[VSTR]  = Visit string (i.e., VLOC;VDT;VTYPE),[NOASF] = if 1=Do Not Set ASAVE cross-reference,TIUX    = (by ref) array containing field data and document body

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | This REQUIRED PARAMETER is the pointer to the patient file. | 
| TITLE | LITERAL |  | true | This is the pointer to the TIU DOCUMENT DEFINITION FILE which identifiesthe TITLE of the document to be filed. | 
| VDT | LITERAL |  | true | This optional parameter is the Date/time of visit.  If the parameter VSITis present, this will be ignored.  Otherwise, the RPC will attempt togenerate a match with a visit based on DFN, VDT, and VLOC (visitlocation).  In the event that the RPC cannot generate such a match, a newEVENT-type Visit will be created with the current date/time. | 
| VLOC | LITERAL |  | true | This optional parameter is the Location of Visit (e.g., CardiologyClinic).  It is a pointer to Hospital location (File #44). | 
| VSIT | LITERAL |  | true | This is a pointer to the Visit File (#9000010) entry for the visit towhich the document is to be linked. | 
| TIUX | LIST |  | true | This is the input array in which the identifiers of the document, as wellas its text, are to be stored in the format described for the TIU UPDATERECORD RPC. | 
| VSTR | LITERAL |  | true | This parameter identifies the visit location, date/time, and ServiceCategory (Hospitalization, Ambulatory, Telecommunications, or Event(HISTORICAL)) in the form of a semi-colon delimited string (e.g.,\469;2970616.1415;A\). | 
| SUPPRESS | LITERAL | 1 | true | BOOLEAN flag indicating whether or not to suppress execution of the COMMITACTION for the document in question. This gives the calling applicationcontrol over the circumstances in which the COMMIT CODE should beexecuted. | 
| NOASF | LITERAL | 1 | true | This parameter can optionally be set to 1 to indicate the ASAVE cross-reference in the TIU Document file (#8925) should not be set when calling this RPC.  The intent of this cross-reference is for telnet type sessions where a user could be dropped.  The cross-reference is used to provide the user with an easy way to resume editing the TIU Document they were working on when they were dropped.  In the Clinical Procedures realm, for example, where the stub is created in the 'background' thiscross-reference should not be set since the user is not interactivelyinvolved in the creation of the record. | 




 ###### Generated on January 11th 2017, 6:39:42 am