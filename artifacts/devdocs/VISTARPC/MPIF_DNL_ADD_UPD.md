---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF DNL ADD UPD<br/>
# MPIF DNL ADD UPD

This RPC has been established to allow the remote creation of records into the MPI DO NOT LINK (#985.26) file.

## Properties

Property | Value
--- | ---
Label | DNLADD
Routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOURCEID | LITERAL | 50 | true | The field is the ID of the record you want to add to the DO NOT LINK list.The field format will be the fully qualified SourceID:  SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI
DNLSOURCEID | LITERAL | 50 | true | The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID: SourceID~AssigningLocation~AssigningAuthority~SourceType  For example: 123~500~USVHA~PI
DNLIDENTIFIEDBY | LITERAL | 60 | true | This is the person that identified the DO NOT LINK record.
DNLEVENT | LITERAL | 30 | true | This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, andKERNEL VERIFIED NOT A DUPLICATE.
DNLSOURCEID | LITERAL | 50 | true | The field contains the corresponding ID of the record you want to add tothe DO NOT LINK list.  The field format will be the fully qualifiedSourceID:SourceID~AssigningLocation~AssigningAuthority~SourceType For example: 123~500~USVHA~PI
INACT | LITERAL | 1 |  | This field will be used to pass whether the user/application wants the pair to be inactivated.  If you want the pair to be inactivated pass a Yfor yes, otherwise leave blank.
DNLIDENTIFIEDBY | LITERAL | 60 | true | This is the person that identified the DO NOT LINK record.
DNLEVENT | LITERAL | 30 | true | This is the event that triggered this entry to get created.  The events are MPI Resolve Mismatch, User input, TOOLKIT Resolve Duplicate, and KERNEL VERIFIED NOT A DUPLICATE.
DNLIDENTIFYINGLOCATION | LITERAL | 5 | true | This field contains the station# of the person that identified/triggered the DO NOT LINK request to be added.
INACT | LITERAL | 1 |  | This field will be used to pass whether the user/application wants the pairto be inactivated.  If you want the pair to be inactivated pass a Y foryes, otherwise leave blank.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}