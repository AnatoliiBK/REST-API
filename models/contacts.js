// const fs = require('fs/promises')

// const listContacts = async () => {}

// const getContactById = async (contactId) => {}

// const removeContact = async (contactId) => {}

// const addContact = async (body) => {}

// const updateContact = async (contactId, body) => {}


const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, 'contacts.json');

async function read () {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function write (data) {
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

async function listContacts() {
 
  const data = await read();
  return data;
}

async function getContactById(contactId) {
  
  const data = await read();
  return data.find(contact => contact.id === contactId )|| null;
}

async function removeContact(contactId) {
 
  const data = await read();
  const index = data.findIndex(contact => contact.id === contactId);

  if (index === -1) {
    return null;
  }
 
  const [result] = data.splice(index, 1);
  await write(data);
  return result;  
}


async function addContact(body) {
  
  const data = await read();
  const newContact = {...body, id: crypto.randomUUID()};
  data.push(newContact);
  await write(data);
  return newContact; 
}

async function updateContact(id, body) {
  
  const data = await read();
  
  const index = data.findIndex((item) => item.id === id);
  
  if (index === -1) {
    return null;
  }
  
  data[index] = { ...body, id };
  
  await write(data);
  
  return data[index];
}


// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact
// };

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
