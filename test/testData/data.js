
const ipAddress = {
   
}
const LoginCredentials = {
    validJobID: "automationuser",
    validPWD: "auto@123"
}
const searchingPageData = {
    awbNo: "5963508146411",
    binIDText: "A101",
    bagID: "BAG382818283",
}
const binResultHeaders ={
    sortid:"SORT ID",
    binstatus:"BIN STATUS",
    currentUbrBagID:"CURRENT UBR BAG ID",
    numberOfClosed:"NUMBER OF CLOSED",
    timecutoff:"TIME CUT OFF",
    weightCutOff:"WEIGHT CUT OFF",
    volumeCutOff:"VOLUME CUT OFF",
    parcelCount:"PARCEL COUNT",
    binLevel:"BIN LEVEL"
}
const inValidCredentials={
    invalidJobID:"InvalidID",
    invalidPwd:"invalid@123"
}
const binStatus={
    all:"All",
    full:"Full",
    active:"Active",
    stopped:"Stopped",
    deactivated:"Deactivated"
}
const filterOptions={
    all:"All",
    a:"A",
    b:"B",
    sort_by_parcel_count:"Parcel Count",
    sort_by_elapsed_time:"Elapsed Time",
    ascending:"1",
    descending:"2"
}
const sortingData={
    AcceptedAWBNo:"18107715127732",
    RejectedAWBNO:"14907527643814",
    InvalidAWBNo:"INVALID1234567",
    AwbUNX:"5963508146411",
    AwbHV:"16602170012801",
    AwbLMM:"149083844971991",
    AwbDNF:"123456789001"
}
const bagtagScreenPrinters={
    printer1:"1",
    printer2:"2",
    printer3:"3",
    printer4:"4",
    printer5:"5",
    printer6:"6",
    noActiveText:"No active printer found on ip",
    printerCallingText:"Print failed , Calling printer failed."
}
const parcelLinkDelinkData={
    invalidBinID:"INVALID123",
    invalidAWBNo:"Invalidawb1234567",
    validBinID:"A101",
    ValidAWBNum:"5963508146411"
}
exports.ipAddress=ipAddress;
exports.LoginCredentials = LoginCredentials;
exports.searchingPageData = searchingPageData;
exports.binResultHeaders = binResultHeaders;
exports.inValidCredentials=inValidCredentials;
exports.binStatus=binStatus;
exports.filterOptions=filterOptions;
exports.sortingData=sortingData;
exports.parcelLinkDelinkData=parcelLinkDelinkData;
exports.bagtagScreenPrinters=bagtagScreenPrinters;