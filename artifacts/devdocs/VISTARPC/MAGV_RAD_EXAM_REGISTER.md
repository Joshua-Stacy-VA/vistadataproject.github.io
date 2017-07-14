---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV RAD EXAM REGISTER<br/>
# MAGV RAD EXAM REGISTER

Wraps a call to the RAMAG EXAM REGISTER remote procedure, and re-formatsthe output for the DICOM Importer II application. Returns the IEN ofthe new case in the RAD/NUC MED PATIENT file (#70), or an arrayof error messages.

## Properties

Property | Value
--- | ---
Label | XMREGSTR
Routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RAOIFN | LITERAL |  | true | IEN of the order in the RAD/NUC MED ORDERS file (#75.1).
EXMDTE | LITERAL |  | true | Date and time of the exam in HL7 format (TS): YYYYMMDDHHMM[+/-ZZZZ]. If seconds are provided, they are ignored. The date must be exact and the time is required.
RAMSC | LIST |  |  | Items of this list define miscellaneous/optional exam parameters. Eachrecord has 3 or more pieces separated by &#x27;^&#x27;:   ^01: Parameter name  ^02: Index (for multiples and word-processing values)  ^03: Value1  ^04: Value2  ... The following parameters are supported by this remote procedure:   BEDSECT^^{IEN #42.4}    Internal value for the BEDSECTION field (19) of    the EXAMINATIONS multiple (sub-file #70.03).   EXAMCAT^^{C|E|I|O|R|S}    Value for the CATEGORY OF EXAM field (4) of the    EXAMINATIONS multiple (sub-file #70.03).   FLAGS^^{flags}    Flags that control the execution (can be combined):     A  If this flag is provided, then the registration        entry point adds the new case to the existing       ones with the same date/time instead of        returning the error code -28.        If the existing date/time record stores an exam        set and the &quot;D&quot; flag is not provided, then the       error code -54 is returned.     D  If there is an existing case with the same        date/time, then the time of the new case is       incremented by 1 minute until an unused date/time       is found.        If the &quot;A&quot; flag is also provided, then time        increments also stop when a non-examset       date/time record is found.        If the date is also changed during the time        modification, then the case is not registered and       the error code -29 is returned.   PRINCLIN^^{IEN #44}    Internal value for the PRINCIPAL CLINIC field (8) of    the EXAMINATIONS multiple (sub-file #70.03).   RAPROC^{Seq#}^{IEN #71}^{IEN #71.2}^{IEN #71.2}^...    Radiology procedure and optional modifiers.   SERVICE^^{IEN #49}    Internal value for the SERVICE field (7) of    the EXAMINATIONS multiple (sub-file #70.03).   SINGLERPT^^{0|1}    If this parameter is defined and not 0, then all    cases should be associated with the same order    and they will share the same report. See the    MEMBER OF SET (25) and IMAGING ORDER (11) fields    of the sub-file #70.03 for more details.   TECHCOMM^^{text}    Value for the TECHNOLOGIST COMMENT field (4) of the    ACTIVITY LOG multiple (sub-file #70.07).    WARD^^{IEN #42}    Internal value for the WARD field (6) of    the EXAMINATIONS multiple (sub-file #70.03). Records can be added to the list in any order. See the comments precedingthe $$REGISTER^RAMAG03 for more details. Example:   with RPCBroker.Param[2] do    begin      PType :&#x3D; list;      Mult[1] :&#x3D; &#x27;BEDSECT^^12&#x27;;      Mult[2] :&#x3D; &#x27;SERVICE^^43&#x27;;      Mult[3] :&#x3D; &#x27;WARD^^456&#x27;;      Mult[4] :&#x3D; &#x27;EXAMCAT^^I&#x27;;    end;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}