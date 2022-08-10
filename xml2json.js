var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/dybook.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
       // console.dir(result.ENVELOPE);
//        console.dir(result.ROOT.TALLYMESSAGE[0].LEDGER[0]["NAME.LIST"].length);
      if(err){
        console.log(err)
      }else{
        console.log('Done');

      console.dir(JSON.stringify(result))
        fs.writeFile('dybook.json',JSON.stringify( result,null,'  ' ),(err)=>{
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
