
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/pmtlymas02Jul.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       // console.dir(result.ENVELOPE);
//        console.dir(result.ROOT.TALLYMESSAGE[0].LEDGER[0]["NAME.LIST"].length);
      if(err){
        console.log(err)
      }else{
        ln = result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE.length
        console.log("Length :",ln)
        console.log('Done');
        //tlyobj = result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE[n]
        for(n=0;n<11;n++){
          tlyobj = result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE[n]
          //console.dir(tlyobj)
          console.dir('========================')
          console.dir(Object.entries(tlyobj))
          tr = Object.entries(tlyobj)
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>')
          av = tr[1][1]
          console.dir(tr[1][0])
          console.dir(av[0]['$'].NAME)
        }
        console.dir(result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE[0])
//        console.dir(JSON.stringify(result,null,' '))
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0].DATE)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0][ '$' ].VCHTYPE)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0].NARRATION)
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0]['ALLLEDGERENTRIES.LIST'][0])
   //   console.dir(result.root.TALLYMESSAGE[0].VOUCHER[0]['ALLLEDGERENTRIES.LIST'][0]['BILLALLOCATIONS.LIST'])

 //     console.dir(JSON.stringify(result))
        fs.writeFile('outtmas.json',JSON.stringify( result,null,'  ' ),(err)=>{
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
