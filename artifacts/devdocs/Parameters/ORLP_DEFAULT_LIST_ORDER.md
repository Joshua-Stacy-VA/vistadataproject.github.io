---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORLP DEFAULT LIST ORDER<br/>
# ORLP DEFAULT LIST ORDER

Default sort order for the patient list.  Room/Bed is valid only for inpatients list (Ward, Team/Personal Team, Provider, Specialty). Appointment Date is valid only for outpatient lists (Clinic) andCombination lists.  Source is valid only for Combination lists.

## Properties

Property | Value
--- | ---
Summary | Sort Order
Value Type | set of codes
Value Domain | A:Alphabetic;R:Room/Bed;P:Appointment Date;T:Terminal Digit;S:Source
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | SERVICE
3 | DIVISION
4 | SYSTEM
5 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}