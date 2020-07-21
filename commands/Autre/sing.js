const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

   message.channel.send('<a:SenkoSingingBig1:735208780140380272><a:SenkoSingingBig2:735208770497675365><a:SenkoSingingBig3:735208758048850084>\n<a:SenkoSingingBig4:735208733851910224><a:SenkoSingingBig5:735208729644892200><a:SenkoSingingBig6:735208716021923951>\n<a:SenkoSingingBig7:735208703439142954><a:SenkoSingingBig8:735208695092215889><a:SenkoSingingBig9:735208685399441608>');
   message.delete();
   
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.SING;