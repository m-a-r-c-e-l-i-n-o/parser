const Spec = [
    { "id": "RECORD_DESCRIPTOR_WORD",         "required": "Y", "length": 4,   "position": 0,    "type": "N" },
    { "id": "RECORD_IDENTIFIER",              "required": "Y", "length": 6,   "position": 4,    "type": "AN" },
    { "id": "CYCLE_NUMBER",                   "required": "A", "length": 2,   "position": 10,   "type": "AN" },
    { "id": "INNOVIS_PROGRAM_IDENTIFIER",     "required": "A", "length": 10,  "position": 12,   "type": "AN" },
    { "id": "EQUIFAX_PROGRAM_IDENTIFIER",     "required": "A", "length": 10,  "position": 22,   "type": "AN" },
    { "id": "EXPERIAN_PROGRAM_IDENTIFIER",    "required": "A", "length": 5,   "position": 32,   "type": "AN" },
    { "id": "TRANSUNION_PROGRAM_IDENTIFIER",  "required": "A", "length": 10,  "position": 37,   "type": "AN" },
    { "id": "ACTIVITY_DATE",                  "required": "Y", "length": 8,   "position": 47,   "type": "N", "superType": ["DATE"] },
    { "id": "DATE_CREATED",                   "required": "Y", "length": 8,   "position": 55,   "type": "N", "superType": ["DATE"] },
    { "id": "PROGRAM_DATE",                   "required": "Y", "length": 8,   "position": 63,   "type": "N", "superType": ["DATE"] },
    { "id": "PROGRAM_REVISION_DATE",          "required": "Y", "length": 8,   "position": 71,   "type": "N", "superType": ["DATE"] },
    { "id": "REPORTER_NAME",                  "required": "Y", "length": 40,  "position": 79,   "type": "AN" },
    { "id": "REPORTER_ADDRESS",               "required": "Y", "length": 96,  "position": 119,  "type": "AN" },
    { "id": "REPORTER_TELEPHONE_NUMBER",      "required": "Y", "length": 10,  "position": 215,  "type": "N" },
    { "id": "SOFTWARE_VENDOR_NAME",           "required": "Y", "length": 40,  "position": 225,  "type": "AN" },
    { "id": "SOFTWARE_VERSION_NUMBER",        "required": "Y", "length": 5,   "position": 265,  "type": "AN" },
    { "id": "RESERVED",                       "required": "Y", "length": 156, "position": 270,  "type": "AN", "superType": ["ALL_SPACE"] }
]

export default Spec
