import User from '../types/User';

// Imitating server request api
// Here suppose to be data request to remote server or database
export default async (): Promise<User[]> => {
  try {
    const response = await fetch('/users.json');
    const data = await response.json();
    return data;
  }
  catch(err) {
    throw new Error(`Error then loading user list from server. ${err}`);
  }
}