---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RORHEPC PATIENT SAVE<br/>
# RORHEPC PATIENT SAVE

The RORHEPC PATIENT SAVE remote procedure updates the patient's record inthe registry (or creates one).

## Properties

Property | Value
--- | ---
Label | SAVE
Routine | [RORRP037](http://code.osehra.org/dox/Routine_RORRP037_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter.
DATA | LIST |  | true | A list that contains the data in the same format as the output of theRORHEPC PATIENT LOAD remote procedure. Only HEPC segment is processed; theothers are ignored. Example:   with RPCBroker do    begin      RemoteProcedure:&#x3D; &#x27;RORHEPC PATIENT LOAD&#x27;;      Param[0].Value :&#x3D; RegistryIEN;      Param[0].PType :&#x3D; literal;      Param[1].Value :&#x3D; DFN;      Param[1].PType :&#x3D; literal;      lstCall(PatientData);     // Load the data       ...                       // Edit the data       RemoteProcedure:&#x3D; &#x27;RORHEPC PATIENT SAVE&#x27;;      Param[0].Value :&#x3D; RegistryIEN;      Param[0].PType :&#x3D; literal;      Param[1].Value :&#x3D; DFN;      Param[1].PType :&#x3D; literal;      Param[2].PType :&#x3D; list;      Param[2].Mult.Assign(PatientData);      Call;                     // Save the data   end; NOTE: Only those items of the list are processed      that have numeric subscripts greater than 0;      all others are ignored.
CANCEL | LITERAL |  |  | Cancel the update and unlock the patient&#x27;s registry data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}