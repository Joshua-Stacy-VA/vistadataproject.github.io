---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS LAB ORDER LOOKUP BY UID 

 property | value 
--- | --- 
 label | VBECS LAB ORDER LOOKUP BY UID
 tag | ORDER
 routine | [VBECRPCB](http://code.osehra.org/dox/Routine_VBECRPCB_source.html)
 return value type | GLOBAL ARRAY
 description |  This RPC returns XML containing a list of laboratory tests and associated data based on a Specimen UID. The data is used in VBECS to identify an existing VBECS order based on the Lab Order number provided by CPRS.  XML Mapping: PatientName element =     PATIENT file (#2) / NAME field (#.01) VistaPatientId element =  PATIENT file (#2) / NUMBER field (#.001) LabOrderNumber element =  LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / ORDER# field (#9.5) LabTestId element =       LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / TEST/PROCEDURE field (#.01) LabTestName element =     LABORATORY TEST file (#60) / NAME field (#.01) SpecimenAccessionNumber = ACCESSION file (#68) / ACCESSION NUMBER                           sub-file (#68.02) / ACCESSION field (#15) SpecimenUid =             LAB ORDER ENTRY file (#69) / SPECIMEN sub-file                           (#69.01) / TEST sub-file (#69.03) / UID field                           (#16) CollectionDateTime =      ACCESSION file (#68) / ACCESSION NUMBER                           sub-file (#68.02) / DRAW TIME field (#9)  XML Example: <UIDLookup>     <PatientName>VBECSpatient,One</PatientName>     <VistaPatientId>1000</VistaPatientId>     <SpecimenAccessionNumber>BB0401-01</SpecimenAccessionNumber>     <LabOrderNumber>25000</LabOrderNumber>     <SpecimenUID>29500000000</SpecimenUID>     <CollectionDateTime>304010800</CollectionDateTime>     <LabTests>         <LabTest>             <LabTestID>2400</LabTestID>             <LabTestName>VBECS ANTIBODY SCREEN</LabTestName>         </LabTest>     </LabTests> </UIDLookup>

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VBUID | LITERAL | 20 | true | Input VBUID = The specimen UID received in Blood Bank associated with aLab Testaused to identify the Lab Order. | 




 ###### Generated on January 11th 2017, 6:39:43 am