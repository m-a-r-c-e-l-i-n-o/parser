const HeaderRecord = [
    // Record Descriptor Word (RDW)
    '0426',
    // Record Identifier
    'HEADER',
    // Cycle Number
    '1-',
    // Innovis Program Identifier
    'INNOVIS---',
    // Equifax Program Identifier
    'EQUIFAX---',
    // Experian Program Identifier
    'EXP3R',
    // TransUnion Program Identifier
    'TRANSUN---',
    // Activity Date
    '02121992',
    // Date Created
    '08252016',
    // Program Date
    '08212016',
    // Program Revision Date
    '08242016',
    // Reporter Name
    'MARCELINO-TORRES-BRAULIO----------------',
    // Reporter Address
    '292-MAIN-ST-KEARNY-NEW-JERSEY-07032-------------------------------------------------------------',
    // Reporter Telephone Number
    '2016286027',
    // Software Vendor Name
    'MARCELINO-TORRES-BRAULIO----------------',
    // Software Version Number
    'V1---',
    // Reserved
    '------------------------------------------------------------------------------------------------------------------------------------------------------------'
].join('').replace(/\-/g, ' ')

const BaseSegmentRecord = [
    // Record Descriptor Word (RDW)
    '0426',
    // Processing Indicator
    '1',
    // Time Stamp
    '08262016063399',
    // Correction Indicator
    '0',
    // Identification Number
    'IDENTIFIER----------',
    // Cycle Identifier
    '--',
    // Consumer Account Number
    'ACCOUNTNUMBER-----------------',
    // Portfolio Type
    'M',
    // Account Type
    '12',
    // Date Opened
    '08262016',
    // Credit Limit
    '000000000',
    // Highest Credit or Original Loan Amount
    '000165000',
    // Terms Duration
    '030',
    // Terms Frequency
    'M',
    // Scheduled Monthly Payment Amount
    '000001375',
    // Actual Payment Amount
    '000001375',
    // Account Status
    '05',
    // Payment Rating
    '0',
    // Payment History Profile
    '0BBBBBBBBBBBBBBBBBBBBBBB',
    // Special Comment
    'AS',
    // Compliance Condition Code
    'XR',
    // Current Balance
    '000185000',
    // Amount Past Due
    '000000000',
    // Original Charge-off Amount
    '000000000',
    // Billing Date
    '08262016',
    // FCRA Compliance/Date of First Delinquency
    '08262016',
    // Date Closed
    '08262016',
    // Date of Last Payment
    '08262016',
    // Reserved
    '-----------------',
    // Consumer Transaction Type
    '1',
    // Surname
    'BRAULIO------------------',
    // First Name
    'MARCELINO-----------',
    // Middle Name
    'TORRES--------------',
    // Generation Code
    'S',
    // Social Security Number
    '555555555',
    // Date of Birth
    '02121992',
    // Telephone Number
    '2016286027',
    // ECOA Code
    '1',
    // Consumer Information Indicator
    'A-',
    // Country Code
    'US',
    // First Line of Address
    '100 MAIN ST---------------------',
    // Second Line of Address
    '--------------------------------',
    // City
    'KEARNY--------------',
    // State
    'NJ',
    // Postal/Zip Code
    '07032----',
    // Address Indicator
    'Y',
    // Residence Code
    'O'
].join('').replace(/\-/g, ' ')

const PhysicalRecord = HeaderRecord + BaseSegmentRecord
export default PhysicalRecord
export { HeaderRecord, BaseSegmentRecord }
