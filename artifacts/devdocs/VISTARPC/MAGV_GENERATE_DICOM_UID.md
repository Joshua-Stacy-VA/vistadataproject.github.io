---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GENERATE DICOM UID<br/>
# MAGV GENERATE DICOM UID

Per VHA Directive 2004-038, this RPC should not be modified.+---------------------------------------------------------------+| Property of the US Government.                                || No permission to copy or redistribute this software is given. || Use of unreleased versions of this software requires the user || to execute a written test agreement with the VistA Imaging    || Development Office of the Department of Veterans Affairs,     || telephone (301) 734-0100.                                     || The Food and Drug Administration classifies this software as  || a medical device.  As such, it may not be changed in any way. || Modifications to this software may result in an adulterated   || medical device under 21CFR820, the use of which is considered || to be a violation of US Federal Statutes.                     |+---------------------------------------------------------------+ This RPC generates a new DICOM UID that is not unique.

## Properties

Property | Value
--- | ---
Label | GENNWUID
Routine | [MAGVUID2](http://code.osehra.org/dox/Routine_MAGVUID2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM(&quot;ACCESSION NUMBER&quot;)MAGPARAM(&quot;SITE&quot;)MAGPARAM(&quot;INSTRUMENT&quot;)MAGPARAM(&quot;TYPE&quot;) &#x3D; &quot;STUDY&quot; or &quot;SERIES&quot; or &quot;SOP&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}