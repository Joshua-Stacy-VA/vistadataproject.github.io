---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DEFAULT PROVIDER 

 property | value 
--- | --- 
 label | TIU GET DEFAULT PROVIDER
 tag | DEFDOC
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This RPC returns the default provider as specified by the TIU Site ParameterDEFAULT PRIMARY PROVIDER, which has the following allowable values:0      NONE, DON'T PROMTIn which case the call will return 0^1      DEFAULT, BY LOCATIONIn this case, the call will return the default provider for a given HospitalLocation, as specified in the set-up for the Clinic in MAS. If a defaultprovider is specified for the location in question, that person will bereturned. If the Clinic set-up specifies use of the Primary Provider (if defined) for the patient, then that person will be returned. The returnformat will be DUZ^LASTNAME,FIRSTNAME.2      AUTHOR (IF PROVIDER)In this case, the call will return the current user (if they are a known Provider). If their not a known Provider, then the call will return 0^.


### Method description

 property | value 
--- | --- 
 Method comment | Get default primary provider

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HLOC | LITERAL |  | true | Pointer to the Hospital Location File (#44). | 
| USER | LITERAL |  | true | Optional Pointer to the New Person File (#200) identifying the Author. If nothing is passed, the current user will be assumed. | 
| TIUIEN | LITERAL |  | true | This is the Record # (IEN) of the document in the TIU DOCUMENT FILE(#8925). | 




 ###### Generated on January 11th 2017, 6:39:42 am