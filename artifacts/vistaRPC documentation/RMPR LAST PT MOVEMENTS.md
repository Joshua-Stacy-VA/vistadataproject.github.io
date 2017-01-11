---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR LAST PT MOVEMENTS 

 property | value 
--- | --- 
 label | RMPR LAST PT MOVEMENTS
 tag | EN
 routine | [RMPR9LM](http://code.osehra.org/dox/Routine_RMPR9LM_source.html)
 return value type | ARRAY
 description | This procedure supplies the data for the Last 2 inpatient movements for TAB 2 of the GUI 2319.Pass IEN to Prosthetic Suspense (#668) Return RESULTS Array and Example: RESULTS(0)=NameRESULTS(1)=SSNRESULTS(2)=DOBRESULTS(3)=Claim #RESULTS(4)= if 1 Yes a movementRESULTS(5)=Transaction typeRESULTS(6)=Date of last MovementRESULTS(7)=Type of MovementRESULTS(8)=WardRESULTS(9)=PhysicianRESULTS(10)=DiagnosisRESULTS(11)= if 1 Yes Second to last MovementRESULTS(12)=2nd to last Transaction TypeRESULTS(13)=2nd to last Transaction dateRESULTS(14)=2nd to last Type of movementRESULTS(15)=2nd to last WardRESULTS(16)=PhysicianRESULTS(17)=Diagnosis

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 50 | true |  | 




 ###### Generated on January 11th 2017, 6:39:43 am