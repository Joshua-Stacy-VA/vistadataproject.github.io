---
layout: default
title: RPCL documentation
---



## [RPCL](TableOfContent.md) &#8594; ORQQAL LIST 

 property | value 
--- | --- 
 name | ORQQAL LIST
 domain | Allergy
 description | {::nomarkdown}Returns a list of allergies for a patient.{:/}
 VISTA (8994) description | [nodeVISTA 8994](../vistaRPC documentation/ORQQAL LIST)
 MUMPS implementation | [LIST^ORQQAL](http://code.osehra.org/dox/Routine_ORQQAL_source.html)
 type | READ_STRUCTURED
 complexity | LOW
 uses | 
 return type | ARRAY
 return description | 
 Method comment | RETURN PATIENT'S ALLERGY/ADVERSE REACTION INFO:
 Leading comment lines | null:no allergy assessment, 0:no known allergies, 1:pt has allergies,if 1 also get: allergen/reactant^reaction/symptom^severity^allergy ien

### Input Parameters

| id | parameterType | required | description | example | 
| --- | --- | --- | --- | --- | 
| PATIENT_ID | REFERENCE | true | {::nomarkdown}The record number of the patient (DFN) from the Patient file (#2).{:/} | 25 | 