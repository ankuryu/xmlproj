var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/foo.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result.ROOT.TALLYMESSAGE[0].LEDGER[0]["NAME.LIST"]);
        console.dir(result.ROOT.TALLYMESSAGE[0].LEDGER[0]["NAME.LIST"].length);

        console.log('Done');
      console.dir(result)
      let tlymsg = result.ROOT.TALLYMESSAGE[0]['LEDGER'][0]
      
      console.dir(typeof( tlymsg ))
      if ( typeof(tlymsg) == 'object' ){
        console.log('keys',Object.keys(tlymsg))
        console.log('val',Object.values(tlymsg))
      }
      console.log(typeof(tlymsg['PARENT']))
      console.log(tlymsg['PARENT'])
    });
});
