
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/tlyvou.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       // console.dir(result.ENVELOPE);
//        console.dir(result.ROOT.TALLYMESSAGE[0].LEDGER[0]["NAME.LIST"].length);
      if(err){
        console.log(err)
      }else{
        console.log('Done');
        console.dir(result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE[0].VOUCHER[0])
//        console.dir(JSON.stringify(result,null,' '))
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0].DATE)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0][ '$' ].VCHTYPE)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0].NARRATION)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0]['ALLLEDGERENTRIES.LIST'][0])
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0]['ALLLEDGERENTRIES.LIST'][0]['BILLALLOCATIONS.LIST'])

 //     console.dir(JSON.stringify(result))
        fs.writeFile('outjson.txt',JSON.stringify( result,null,'  ' ),(err)=>{
          if(err){
            console.log(err)
          }else{
            console.log("File writtten")
          }
        })

      }
//      let tlymsg = result.ROOT.TALLYMESSAGE[0]['LEDGER'][0]
      
    });
});
