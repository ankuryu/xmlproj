fs = require('fs'),
    xml2js = require('xml2js');

var xmlbldr = new xml2js.Builder()
//  Class definitions
class vbdy{
  constructor(type,act,dt,vref,vno,nar){
    this.type = type
    this.act = act
    this.dt = dt
    this.vno = vno
    this.vref = vref
    this.uuid ="" 
    this.nar = nar
  }
}

class ldgent {
  constructor(ldgname,idp,lfi,rmvz,pldg,amt){
    this.ldgname= ldgname
    this.ISDEEMEDPOSITIVE = idp
    this.LEDGERFROMITEM = lfi
    this.REMOVEZEROENTRIES = rmvz
    this.ISPARTYLEDGER = pldg
    this.baclst = []
    this.amt = amt
  }
  addbacu(bacu){
    this.baclst.push(bacu)
  }
    
}

class bacu {
  constructor(name,cr,typ,amt){
    this.name = name
    this.cr = cr
    this.typ = typ
    this.amt = amt
  }
}

class ldgents{
  constructor(){
    this.ents = []
  }
  add_ldgent(ldgent){
    this.ents.push(ldgent)

  }
}

////    endo of class definitions 
let vbdy = {}
let ldgentlst = []
let baclst =[]

let ldgent = { }
let bac = {}

//#=======================================

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

