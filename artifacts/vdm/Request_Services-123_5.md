---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Request_Services-123_5 

 property | value 
--- | --- 
 id | Request_Services-123_5
 fmId | 123.5
 label | Request Services
 location | ^GMR(123.5,
 description | {::nomarkdown}This file allows services and specialties to be grouped in a hierarchy <br/>representing the sites services available.  This grouping capability<br/>may be used with Review screens to filter out consults to a <br/>service, sub-service, specialty, or sub-specialty of consults/requests.<br/>  <br/>The main entry in this file is the \ALL SERVICES\ entry.  Other entries<br/>should be subordinate in its hierarchy.<br/> <br/>The \ALL SERVICES\ entry is used to display the hierarchy of the hospital<br/>services when the Clinician ordering a consult is prompted for<br/>\Select TO Service/Specialty:\ to send the consult to.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| service_name | .01 | Service Name | {::nomarkdown}This is the Name of a service or specialty which may receive consult/<br/>requests.  This may also be a name which represents a group of services{:/} | STRING |  | REQUIRED, INDEXED |  | 
| unrestricted_access | .06 | Unrestricted Access | {::nomarkdown}This field, if set to yes will allow all users to perform the full range<br/>of update activities on consult or procedure requests directed to this<br/>service. If this field is set to yes, all other fields related to<br/>assignment of update users are ignored. <br/> <br/>The SERVICE INDIVIDUAL TO NOTIFY and the SERVICE TEAM(S) TO NOTIFY fields<br/>will still be used to determine notification recipients for each<br/>individual service. {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| process_parents_for_updates | .07 | Process Parents For Updates | {::nomarkdown}This field, if set to YES will cause the parent services of the this <br/>service to be screened to determine update authority for a given user. {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| process_parents_for_notifs | .08 | Process Parents For Notifs | {::nomarkdown}This field, if set to YES will cause the parent services of this service<br/>to be processed when determining notification recipients. {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| provisional_dx_prompt | 1.01 | Provisional Dx Prompt | {::nomarkdown}This field will be used by CPRS to determine how to prompt for the<br/>provisional diagnosis when ordering consults for this service. If this<br/>field is set to OPTIONAL, the user will be prompted for the provisional<br/>diagnosis but may bypass answering the prompt. If the field is set to<br/>SUPPRESS, the user will not be presented with the provisional diagnosis<br/>prompt. If set to REQUIRED, the user must answer the prompt to continue<br/>placing the order.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SUPPRESS</dd><dt>R</dt><dd>REQUIRE</dd><dt>O</dt><dd>OPTIONAL</dd></dl>{:/} | 
| provisional_dx_input | 1.02 | Provisional Dx Input | {::nomarkdown}This field will determine the method that CPRS will use to prompt the user<br/>for input of the provisional diagnosis when ordering. If set to FREE TEXT,<br/>the user may type any text from 2-80 characters in length. If set to<br/>LEXICON, the user will be required to select a coded diagnosis from the<br/>Clinical Lexicon.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>FREE TEXT</dd><dt>L</dt><dd>LEXICON</dd></dl>{:/} | 
| restrict_default_reason_edit | 1.03 | Restrict Default Reason Edit | {::nomarkdown}If a DEFAULT REASON FOR REQUEST exists for this service this field affects<br/>the ordering person's ability to edit the default reason while placing an<br/>order.<br/> <br/>        0 - UNRESTRICTED<br/>            User will be able to edit the default text at any time.<br/> <br/>        1 - ASK ON EDIT ONLY<br/>            User will only be allowed to edit the default reason if the<br/>            order is edited before releasing to the service.<br/> <br/>        2 - NO EDITING<br/>            User will not be allowed to edit the default reason at any<br/>            time.<br/> <br/>The value of this field will be ignored if no DEFAULT REASON FOR REQUEST<br/>exists for this service.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>UNRESTRICTED</dd><dt>1</dt><dd>ASK ON EDIT ONLY</dd><dt>2</dt><dd>NO EDITING</dd></dl>{:/} | 
| notify_service_on_dc | 1.04 | Notify Service On Dc | {::nomarkdown}This field controls when members configured to receive notifications for<br/>this service in the Consult hierarchy will be alerted to a consult being<br/>discontinued.<br/> <br/>0 - ALWAYS<br/>    service update users will receive notification of a discontinue<br/>    regardless of who DC's the order<br/> <br/>1 - REQUESTOR ACTION<br/>    service update users will receive notification of a discontinue only<br/>    if the user discontinuing the consult is not an update user for the<br/>    service<br/> <br/>2 - NEVER<br/>    service update users will never receive notification of a discontinued<br/>    consult{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ALWAYS</dd><dt>2</dt><dd>NEVER</dd><dt>1</dt><dd>REQUESTOR ACTION</dd></dl>{:/} | 
| reprint_513_on_dc | 1.05 | Reprint 513 On Dc | {::nomarkdown}This field will determine if the SF-513 should reprint to the consulting<br/>service when a consult is discontinued.<br/> <br/>0 - ALWAYS<br/>    the SF-513 will always reprint to the SERVICE PRINTER when a consult<br/>    is discontinued<br/> <br/>1 - REQUESTOR ACTION<br/>    the SF-513 will reprint to the SERVICE PRINTER only when a consult is<br/>    discontinued by a user that is not an update user for the service in<br/>    <br/>2 - NEVER<br/>    the SF-513 will never reprint to the SERVICE printer regardless of who<br/>    discontinued the consult {:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ALWAYS</dd><dt>2</dt><dd>NEVER</dd><dt>1</dt><dd>REQUESTOR ACTION</dd></dl>{:/} | 
| result_mgmt_user_class | 1.06 | Result Mgmt User Class | {::nomarkdown}This field defines the Authorization/Subscription User Class that is<br/>permitted to disassociate a Medicine result from a Consult request. It is<br/>recommended that this function be restricted to a very select group of<br/>individuals.<br/> <br/>This field invokes IA #3008{:/} | POINTER |  |  | Usr_Class-8930 | 
| synonym | 1.1 | Synonym | {::nomarkdown}This multiple field identifies the commonly known names and abbreviations<br/>for the Service named in the .01 Name field.  Synonyms identified here<br/>are used in the look-up of services at 'Select Service/Specialty: '<br/>prompts.{:/} | [STRING] |  |  |  | 
| print_name | 1.11 | Print Name | {::nomarkdown}This is a commonly known Abbreviation for this Service/Specialty.  <br/>This name is used to build Consult Notifications when a consult/request<br/>is ordered in OE/RR.<br/>  <br/>If not defined, the NAME (.01) is used.{:/} | STRING |  |  |  | 
| service_usage | 2 | Service Usage | {::nomarkdown}Whenever a value is defined in the SERVICE USAGE field, the Service<br/>entry will NOT be selectable to send consults TO in the OE/RR ordering<br/>process.  <br/>  <br/>Service Usages cause functioning as follows:<br/>GROUPER ONLY - Allows a service to be used for grouping other <br/>services together for review purposes, and aids in defining the <br/>service hierarchy (e.g., ALL SERVICES, INPATIENT SERVICES, OUTSIDE<br/>SERVICES).  During the order process, a user selecting a grouper only<br/>service will be shown the service hierarchy under that service grouper.<br/>A Grouper ONLY service should never be a \TO\ Service on a consult.<br/>  <br/>TRACKING ONLY - Allows a service to be defined in a hierarchy,<br/>but will not allow users ordering consults in OE/RR to be able to see<br/>or select a service marked for TRACKING ONLY.  (e.g., Psychology<br/>may be defined with its Service Usage blank, and its Sub-specialty<br/>multiple defined with services of which some or all may be \TRACKING<br/>ONLY\ services.  This hierarchy facilitates the situation when a<br/>service, such as Psychology, prefers a common location for all related<br/>consults to be sent to. A Tracking user at the common location then <br/>\Forwards\ the request to one of the sub-service TRACKING ONLY services<br/>for completion.)<br/> <br/>DISABLED - Disabled services are not selectable for ordering or tracking.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>9</dt><dd>DISABLED</dd><dt>1</dt><dd>GROUPER ONLY</dd><dt>2</dt><dd>TRACKING ONLY</dd></dl>{:/} | 
| disable_message | 3 | Disable Message | {::nomarkdown}If a service is disabled, a DISABLED message will be displayed on<br/>the screen.{:/} | STRING |  |  |  | 
| creator | 5 | Creator | {::nomarkdown}This field identifies who created the service entry.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| subservice | 10 | Sub-service | {::nomarkdown}This is the set of services or specialties that may be grouped under<br/>the Service/Specialty.  A member of this sub-service may also be defined<br/>to have its own sub-service/specialties. There is no limit to the<br/>depth of the hierarchy beneath ALL SERVICES.{:/} | [OBJECT] |  |  | [Subservice-123_51](#Subservice-123_51)  | 
| internal_name | 11 | Internal Name | {::nomarkdown}This field holds a name that can be used for internal name-spacing. <br/>This name will not be viewable to users when selecting a service. <br/>This name may be used to look up entries in the file via VA Fileman <br/>and the Setup Consult Services option.{:/} | STRING |  | INDEXED |  | 
| entry_action | 20 | Entry Action | {::nomarkdown}This field contains MUMPS code that will be executed when someone<br/>enters this option for CPRS Detailed and Results displays.{:/} | STRING |  |  |  | 
| procedure_type | 101 | Procedure Type |  | [POINTER] |  |  | {id:Protocol-101} | 
| oe_rr_display_group | 123.01 | Oe/rr Display Group | {::nomarkdown}The display group will automatically default to CONSULTS if there is no<br/>other display group defined as a sub-group of CONSULTS.{:/} | POINTER |  |  | Display_Group-100_98 | 
| service_update_option | 123.011 | Service Update Option | {::nomarkdown}This field provides security by defining who can actually perform tracking <br/>activities for a service/specialty's consults, based on the Option used.<br/>  <br/>This field works in conjunction with the PROTOCOL ACTION MENU BY OPTION<br/>field.<br/>If an option is identified here, and the user selects this option to<br/>review consults/requests, the user will be given access to the Protocol<br/>action menu defined in the PROTOCOL ACTION MENU BY OPTION field.  <br/>If this option was not used to access the consult/request tracking data,<br/>the user will only see the actions defined in the<br/>GMRCACTM USER REVIEW SCREEN protocol menu.{:/} | POINTER |  |  | Option-19 | 
| protocol_menu_of_request_items | 123.02 | Protocol Menu Of Request Items | {::nomarkdown}This field is being used primarily for the Medicine Package Interface to<br/>link the Medicine Service to a Protocol Menu representing the Procedure<br/>Types of the Medicine Package.  The GMRC MEDICINE PKG INTERFACE option<br/>uses this entry to determine the service and the type of results the <br/>Medicine Personnel may be associating results with.{:/} | POINTER |  |  | Protocol-101 | 
| protocol_action_menu_by_users | 123.03 | Protocol Action Menu By Users | {::nomarkdown}This is the Protocol menu of actions in the Protocol file which may be<br/>used by users identified in the \Service Individual to Notify,\<br/>\Service Teams to Notify,\ and \Update Users w/o Notification\ fields<br/>for a Service.  <br/> <br/>Two generic protocol action menus are exported, GMRCACTM USER REVIEW <br/>SCREEN and GMRCACTM SERVICE ACTION MENU.  The GMRCACTM USER REVIEW SCREEN is<br/>the default protocol menu of actions which will be used when no other<br/>protocol is defined.  This default menu of actions contains inquiry only <br/>kinds of actions.  The GMRCACTM SERVICE ACTION MENU contains actions<br/>which allow the consult/request to be tracked to its final resolution<br/>of Denied, Discontinued, or Completed.{:/} | POINTER |  |  | Protocol-101 | 
| protocol_action_menu_by_option | 123.04 | Protocol Action Menu By Option | {::nomarkdown}This is the menu of protocol actions in the Protocol File that may be<br/>used when the option named in the SERVICE UPDATE OPTION field <br/>is the option used to review the consults/requests.<br/>  <br/>This field is only used when the IRM service wants to establish<br/>security BY SERVICE via site-specific options.<br/>  <br/>If neither the PROTOCOL ACTION MENU BY OPTION or the SERVICE UPDATE<br/>OPTION are used to specify service security, then the PROTOCOL ACTION MENU <br/>BY KEY and SERVICE UPDATE SECURITY KEY are checked to establish the correct<br/>menu of actions allowed for the user BY SERVICE.<br/> <br/>The \GMRCACTM USER REVIEW SCREEN\ protocol menu of actions will <br/>be used for all users as a default.  This default menu of actions<br/>contains inquiry only kinds of actions.<br/> <br/>Sites that are using the Medicine Package to enter procedure results may<br/>specify GMRCACTM MEDICINE PKG MENU as the Protocol Action Menu By Option<br/>field and the GMRC MEDICINE PKG INTERFACE option as the Security Update<br/>Optifor field.  This should only be specified on those services that are<br/>linked to a \GMRCR \ protocol via the FILE LINK field in the Protocol <br/>File.  The exported Medicine sub-services are already defined for use with<br/>the GMRC MEDICINE PKG INTERFACE option.<br/> <br/>Pharmacy Services should specify GMRCACTM PHARMACY PKG MENU in the<br/>Protocol Action Menu By Option field and the GMRC PHARMACY TPN CONSULTS<br/>option in the Service Update Option field.{:/} | POINTER |  |  | Protocol-101 | 
| related_treating_specialty | 123.06 | Related Treating Specialty | {::nomarkdown}This field may be defined for use in Fileman reporting <br/> via the Relational Jumping capabilities.{:/} | POINTER |  | INDEXED | Facility_Treating_Specialty-45_7 | 
| related_service_section | 123.07 | Related Service/section |  | POINTER |  |  | Service_section-49 | 
| service_individual_to_notify | 123.08 | Service Individual To Notify | {::nomarkdown}A user may be identified in this field as having primary responsibility for<br/>receiving consults and tracking them through to completion or <br/>discontinuance.  This individual will receive a \NEW SERVICE CONSULT\<br/>notification type when a new order is released to the service<br/>through CPRS.  The notification will appear in the following<br/>format:<br/>  NIVEK,ALP (N8976): New Psychology Consult ordered<br/>  JONES,GEO (J4552): New Psychology consult forwarded - Stat<br/>  <br/>The user must have the \NEW SERVICE CONSULT/REQUEST\ notification type<br/>enabled.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| service_printer | 123.09 | Service Printer | {::nomarkdown}This field allows the service/specialty to identify a device that <br/>will be used for printing Consult Forms (513) 'automatically' at the <br/>service when the consult/request order is released by CPRS.<br/>  <br/>If the device is not defined, the Consult Form will print at the location<br/>where the order was placed, bypassing the electronic relay functionality.<br/>The order text in CPRS for an order to a service with no device is<br/>prefixed with \>>.\  This indicates to the ordering clerks/clinician<br/>that the consult form needs manual processing or a call to the service to<br/>have the service use the \PS\ action to print the service copy.{:/} | POINTER |  |  | Device-3_5 | 
| service_teams_to_notify | 123.1 | Service Team(s) To Notify | {::nomarkdown}A service can have teams of users associated with the Service.  Any users<br/>defined in a team related to the Service will receive Notifications.{:/} | [POINTER] |  |  | {id:Oe_rr_List-100_21} | 
| notification_by_pt_location | 123.2 | Notification By Pt Location | {::nomarkdown}A service may send notifications about new consults to an individual or<br/>teams, depending on the patient's location.  Each hospital/ward location<br/>for patients may be defined here.  For each location, an individual or <br/>team(s) may be specified to receive notifications for orders based <br/>on the patient's location at the time the order was placed.{:/} | [OBJECT] |  |  | [Notification_By_Pt_Location-123_54](#Notification_By_Pt_Location-123_54)  | 
| update_users_w_o_notifications | 123.3 | Update Users W/o Notifications | {::nomarkdown}Service users who are able to perform update tracking actions,<br/>but DO NOT receive \NEW SERVICE CONSULT\ notifications, should be defined<br/>here.  The update tracking capabilities are based on the Protocol<br/>Action Menu by Users field.{:/} | [POINTER] |  |  | {id:New_Person-200} | 
| update_teams_w_o_notifications | 123.31 | Update Teams W/o Notifications | {::nomarkdown}This field will allow teams of users to be assigned as update users. Team<br/>members will not receive notifications as a result of the team being<br/>entered in this field. {:/} | [POINTER] |  |  | {id:Oe_rr_List-100_21} | 
| administrative_update_users | 123.33 | Administrative Update Users |  | [OBJECT] |  |  | [Administrative_Update_Users-123_555](#Administrative_Update_Users-123_555)  | 
| administrative_update_teams | 123.34 | Administrative Update Teams |  | [OBJECT] |  |  | [Administrative_Update_Teams-123_58](#Administrative_Update_Teams-123_58)  | 
| update_user_classes_w_o_notifs | 123.35 | Update User Classes W/o Notifs |  | [POINTER] |  |  | {id:Usr_Class-8930} | 
| related_hospital_location | 123.4 | Related Hospital Location |  | [POINTER] |  |  | {id:Hospital_Location-44} | 
| special_updates_individual | 123.5 | Special Updates Individual | {::nomarkdown}This individual will have privileges to perform group status updates for<br/>this service or any of the entries in the SUB-SERVICE/SPECIALTY field. <br/> <br/>It is recommended that this individual be a responsible service update<br/>user or a Clinical Application Coordinator. If given the option GMRCSTSU,<br/>the user will be able to choose all requests within a date range that are<br/>pending, active or both and update the request to discontinued or<br/>complete. This will also update the related order in CPRS to the same<br/>status.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| default_reason_for_request | 124 | Default Reason For Request | {::nomarkdown}This field will allow a boilerplate of text to be imported into the reason<br/>for request when placing consult or procedure orders for this service. If<br/>the user places an order using a quick order having boilerplate text, that<br/>text will supersede any default text stored. <br/> <br/>This field may contain any text including TIU objects. TIU Objects must be<br/>enclosed in vertical bars (e.g. |PATIENT NAME| ).{:/} | STRING |  |  |  | 
| prerequisite | 125 | Prerequisite |  | STRING |  |  |  | 
| prosthetics_service | 131 | Prosthetics Service | {::nomarkdown}This field is used to flag those services that are part of the interface<br/>between Consult/Request Tracking and the Prosthetics package. <br/> <br/>This field is set by a package option. It is not intended to be modified<br/>via VA FileMan.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ifc_routing_site | 132 | Ifc Routing Site | {::nomarkdown}This field contains the VA facility that will perform consults <br/>requested for this service. When a consult for this service is <br/>ordered, it will automatically be routed to the VA facility in <br/>this field.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| ifc_remote_name | 133 | Ifc Remote Name | {::nomarkdown}This field contains the name of the service that will be requested at <br/>the VAMC defined in the IFC ROUTING SITE field.<br/> <br/>Enter the name of the service exactly as it is named at the remote<br/>facility. If this name does not match the name of the service at the<br/>routing site, the request will fail to be filed at the remote site. <br/>This will delay or prohibit the performance and processing of this<br/>request.{:/} | STRING |  |  |  | 
| ifc_sending_facility | 134 | Ifc Sending Facility |  | [POINTER] |  |  | {id:Institution-4} | 
| ifc_coordinator | 135 | Ifc Coordinator | {::nomarkdown}The person entered in this field will have the ability to act on consults<br/>that would not otherwise be accessible to other update users for this <br/>service. This user will also be able to rectify certain communication <br/>failures with Inter-facility Consults.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| administrative | 150 | Administrative | {::nomarkdown}Entering 'YES\ here will cause any orders placed to this service to have <br/>a corresponding entry of 'YES' in the ADMINISTRATIVE field of the REQUEST <br/>CONSULTATION FILE, #123.  Administrative requests are to be excluded from <br/>the CONSULTS PERFORMANCE MONITOR report [GMRC RPT PERF MONITOR].{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| associated_stop_code | 688 | Associated Stop Code |  | [POINTER] |  |  | {id:Clinic_Stop-40_7} | 

## <a name="Subservice-123_51"></a>Subservice-123_51 

 property | value 
--- | --- 
 id | Subservice-123_51
 label | Sub-service

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subservice_specialty | .01 | Sub-service/specialty | {::nomarkdown}This is the menu of sub-service/specialties that are grouped under this<br/>Service.  The sub-service/specialty entries must each be defined as <br/>entries in this file.<br/>  <br/>There is no limit on how deep the hierarchy of services may be defined.<br/>The only requirements are the \ALL SERVICES\ entry be at the top of the<br/>hierarchy and a service can not be a sub-service to itself or any other <br/>sub-service hierarchy which can be traced back to itself as a parent <br/>service.{:/} | POINTER |  | REQUIRED, INDEXED | Request_Services-123_5 | 
| mnemonic | 2 | Mnemonic | {::nomarkdown}This is a mnemonic associated with the service being entered as a sub-<br/>service.  For example, if the service is Pulmonary, PU could be<br/>could be defined as the mnemonic.{:/} | STRING |  |  |  | 

## <a name="Notification_By_Pt_Location-123_54"></a>Notification_By_Pt_Location-123_54 

 property | value 
--- | --- 
 id | Notification_By_Pt_Location-123_54
 label | Notification By Pt Location

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| notification_by_pt_location | .01 | Notification By Pt Location | {::nomarkdown}Enter a ward location or hospital location which the service wishes to<br/>assign a service individual or team to.<br/> <br/>When a consult or request is ordered, notifications to the receiving<br/>service will check to see if the patients location is defined here.<br/>If defined, notifications will be sent to the specified individual and/or<br/>members of the specified team.{:/} | POINTER |  | REQUIRED, INDEXED | undefined | 
| individual_to_notify | 1 | Individual To Notify | {::nomarkdown}This is the Individual that is assigned to this location for this <br/>Service.  When a consult/request order for this Service is released<br/>from OE/RR for a patient at this location, this individual will <br/>receive the new order notification.<br/>Enter the individual who should receive notifications when a consult <br/>order is released from OE/RR FOR this service, FROM this location.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| team_to_notify | 2 | Team To Notify | {::nomarkdown}This is the Team that is assigned to this location for the Service.{:/} | POINTER |  | INDEXED | Oe_rr_List-100_21 | 

## <a name="Administrative_Update_Users-123_555"></a>Administrative_Update_Users-123_555 

 property | value 
--- | --- 
 id | Administrative_Update_Users-123_555
 label | Administrative Update Users

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| administrative_update_user | .01 | Administrative Update User | {::nomarkdown}This multiple allows the administrative users for a service to be<br/>identified.  Administrative users update actions may be different from the<br/>service update users' actions.{:/} | POINTER |  | REQUIRED, INDEXED | [New_Person-200](New_Person-200.md) | 
| notification_recipient | .02 | Notification Recipient | {::nomarkdown}This field, if set to YES will include this user in the list of<br/>notification recipients for this service. {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Administrative_Update_Teams-123_58"></a>Administrative_Update_Teams-123_58 

 property | value 
--- | --- 
 id | Administrative_Update_Teams-123_58
 label | Administrative Update Teams

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| administrative_update_team | .01 | Administrative Update Team | {::nomarkdown}This field allows team lists from the OE/RR LIST (#100.21) file to be<br/>entered. All provider/users of the teams will have administrative update<br/>authority for requests directed to this service.{:/} | POINTER |  | REQUIRED, INDEXED | Oe_rr_List-100_21 | 
| notification_recipients | .02 | Notification Recipients | {::nomarkdown}This field, if set to YES will include the users on the specified team in<br/>the list of notification recipients for this service.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}