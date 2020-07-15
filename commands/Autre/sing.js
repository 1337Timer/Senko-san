const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

   message.channel.send('<a:SenkoSingingBig1:733043351003201607><a:SenkoSingingBig2:733042993799626822><a:SenkoSingingBig3:733043010748809256>\n<a:SenkoSingingBig4:733043019577819237><a:SenkoSingingBig5:733043046844727356><a:SenkoSingingBig6:733043065169903687>\n<a:SenkoSingingBig7:733043067170324560><a:SenkoSingingBig8:733043098732724335><a:SenkoSingingBig9:733043104818397264>');
   message.delete();
   
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.SING;