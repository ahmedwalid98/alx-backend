import { createClient, print } from 'redis';
const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.toString()}`);
});

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print)
}

const displaySchoolValue = async (schoolName) => {
  console.log(await promisify(client.GET).bind(client)(schoolName));
}

async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

client.on('connect', () => {
  console.log('Redis client connected to the server');
});
