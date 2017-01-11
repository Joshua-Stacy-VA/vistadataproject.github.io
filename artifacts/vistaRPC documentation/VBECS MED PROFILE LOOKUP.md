---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS MED PROFILE LOOKUP 

 property | value 
--- | --- 
 label | VBECS MED PROFILE LOOKUP
 tag | RX
 routine | [VBECRPCP](http://code.osehra.org/dox/Routine_VBECRPCP_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of medications for a patient from the Pharmacy package within a given date range. The patient demographic data is provided by the VistA API DEM^VADPT in the VADM array. The medication related data is provided by the Pharmacy API OCL^PSOORRL inthe ^TMP(\PS\,$J global array in the following format. ^TMP(\PS\,$J,D0,0)=ORDER #_File;PKG^DRUG^INFUSION RATE^STOP DATE^REFILLSREMAINING^TOTAL DOSE^UNITS PER DOSE^PLACER #^STATUS^LAST FILLDATE^DAYSSUPPLY^QUANTITY^NOT TO BE GIVEN^PENDING RENEWAL (1 or 0)^ISSUEDATE(Outpatient) or START DATE(Inpatient)^LAST RELEASE DATE/TIME^LAST FILLDAY SUPPLY XML Mapping:PatientName element =          VADM(1)PatientSsn element =           VADM(2)PatientDob element =           VADM(3) in HL7 formatBeginningSearchDate element =  SDATE input parameter in HL7 formatEndingSearchDate element =     EDATE input parameter in HL7 formatOrderNumber element =          ORDER #DrugName element =             DRUGIssueStartDate element =       ISSUE DATE(Outpatient) or START                                DATE(Inpatient)Status element =               STATUSInpatientOutpatientIndicator = PKG XML Example:<MedicationProfile>    <PatientName>VBECSpatient,One</PatientName>    <PatientSsn>666-66-6666</PatientSsn>    <PatientDob>Jan 01, 1900</PatientDob>    <BeginningSearchDate>Oct 01, 2002</BeginningSearchDate>    <EndingSearchDate>Jul 31, 2003</EndingSearchDate>    <Order>        <OrderNumber>4863015</OrderNumber>        <DrugName>ACETAMINOPHEN 500MG TAB</DrugName>        <IssueStartDate>Apr 08, 2002</IssueStartDate>        <Status>EXPIRED</Status>        <InpatientOutpatientIndicator>O</InpatientOutpatientIndicator>    </Order></MedicationProfile>

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SDATE | LITERAL | 30 | true | The SDATE input parameters represents the start date required by the Pharmacy API OCL^PSOORRL. | 
| EDATE | LITERAL | 30 | true | The EDATE input parameter represents the end date required by the Pharmacy API OCL^PSOORRL. | 
| DFN | LITERAL | 15 | true | The VistA Patient file (#2) Internal Entry Number. | 




 ###### Generated on January 11th 2017, 6:39:43 am