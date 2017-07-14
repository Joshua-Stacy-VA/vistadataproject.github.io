---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MDCP UPDATE MESSAGE STATUS<br/>
# MDCP UPDATE MESSAGE STATUS

This call will update the status of an entry in file 704.002(the CLIO_HL7_LOG file).  Note that if the status passed through is 'PROCESSED', the CP INSTRUMENT file entry pointed to by field .03 will be checked to see if it has a routine in its .11 field.  If it does, the HL7 message will be copied to a temp global and the PROCESSING ROUTINE will be invoked.

## Properties

Property | Value
--- | ---
Label | UPDATERP
Routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MDCPMSG | LITERAL |  | true | The IFN of the message in the CP RESULT REPORT file.
MDCPSTAT | LITERAL | 1 | true | The status to which to change the file entry referenced by the first parameter.  Check the data dictionary for field .09 to get a list of valid codes.  This parameter must be in internal format.
MDCPDFN | LITERAL |  | true | This is the IFN of the patient in file 2, if available.
MDCPISCR | LITERAL |  | true | If MDCPDFN is set, this tells the linetag that MDCPDFN is a correction, not the original DFN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}