var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Mark';
    var text = 'the message';
    var message = generateMessage(from,text);

    expect(res.createdAt).toBeA('number');
    expect(message).toInclude({from, text});    
  });
});