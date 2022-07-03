
var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
let lgr = fs.createWriteStream('pmmas02Jul.csv')
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
        for(n=0;n<ln;n++){
          tlyobj = result.ENVELOPE.BODY[0].IMPORTDATA[0].REQUESTDATA[0].TALLYMESSAGE[n]
          //console.dir(tlyobj)
          console.dir('========================')
          console.dir(Object.entries(tlyobj))
          tr = Object.entries(tlyobj)
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>')
          av = tr[1][1]
          ki = tr[1][0]   // get the key alias type
          console.dir(tr[1][0])
          // now get the parent
          if(ki == 'LEDGER' || ki=='GROUP'){

            prnt = av[0].PARENT[0]
            //console.log( '++',av[0].PARENT )
            lnglst =av[0]['LANGUAGENAME.LIST'][0]
            nmlst = lnglst['NAME.LIST'][0].NAME
            console.log(nmlst.length)
            console.log('>>>',ki,prnt,nmlst[0])
            lgr.write(ki+","+prnt+","+nmlst[0]+"\n")

          }

          // get all the names
          console.dir(av[0]['$'].NAME)
        }
        lgr.end()
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
