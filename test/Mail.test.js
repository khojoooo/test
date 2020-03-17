const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/MailFactory.json');
const compiledMail = require('../ethereum/build/Mail.json');

let accounts;
let factory;
let mailAddress;
let mail;

beforeEach(async () =>{
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  await factory.methods.createMail().send({
    from: accounts[0],
    gas: '1000000'
  });

  const addresses = await factory.methods.getDeployedMails().call();
  mailAddress = addresses[0];
  mail = await new web3.eth.Contract(
    JSON.parse(compiledMail.interface),
    mailAddress);
});

describe('Mails', () => {
  it('deploys a factory and a campaign',() =>{
    assert.ok(factory.options.address);
    assert.ok(mail.options.address);
  })

});
