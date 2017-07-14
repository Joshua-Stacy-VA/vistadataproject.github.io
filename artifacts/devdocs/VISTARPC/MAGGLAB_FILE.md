---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGLAB FILE<br/>
# MAGGLAB FILE

Files the Lab pointer in Image File, ^MAG(2005, and files the imagepointer in the Lab file. ^LR(LRDFN,LRSECT

## Properties

Property | Value
--- | ---
Label | FILE
Routine | [MAGGTLB1](http://code.osehra.org/dox/Routine_MAGGTLB1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IMIEN | LITERAL | 30 | true | IMIEN - ^MAG(2005,IMIEN image captured.
DATA | LITERAL | 245 | true | ;DATA - stain^micro obj^Pt name^ssn^date/time^acc#^Pathologist^specimendesc.^lab section^dfn^lrdfn^lri^spec ien^field#^global root e.g. ^LR(1,&quot;SP&quot;,7069 758,.1,1   ;DATA is the result of START^MAGGTLB (the specimen variable during the   ;image capture window).   ;Will return a single value on filing success.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}