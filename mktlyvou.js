fs = require('fs'),
    xml2js = require('xml2js');

var xmlbldr = new xml2js.Builder()

vobj = {
  TALLYMESSAGE :
  {"$":{ xmlns:UDF="TallyUDF" },
  VOURCHER: {
    "$":{REMOTEID:"jjj",VCHTYPE:"Purchase",ACTION:"Create"},
    DATE:"220704",
    GUID:"UUID",
    NARRATION:"HSN",
    VOUCHERTYPENAME:"Purchase",
    VOUCHERNUMBER:"2022000954",
    REFERENCE:"000954/31May22",
    PARTYLEDGERNAME:"LEADER VALVES LTD.<P>",
    "ALLLEDGERENTRIES.LIST":[ {
      LEDGERNAME:"LEADER VALVES",
      ISDEEMEDPOSITIVE:"NO",
      LEDGERFROMITEM:"NO",
      REMOVEZEROENTRIES:"NO",
      ISPARTYLEDGER:"YES",
      AMOUNT:569719,
      "BILLALOCATION.LIST":{
        NAME:"BILL1",
        BILLCREDITPERIOD:"30 Days",
        BILLTYPE:"New Ref",
        AMOUNT: 56719
      }
    },
{
      LEDGERNAME:"[71]",
      ISDEEMEDPOSITIVE:"YES",
      LEDGERFROMITEM:"NO",
      REMOVEZEROENTRIES:"NO",
      ISPARTYLEDGER:"YES",
      AMOUNT:-569719,
    }
    ]
    

  }
    
}
}


vouxml = xmlbldr.buildObject(vobj)
console.log(vouxml)

