// github-util.js

export async function getUsers(perPage, since) {
  const response = await fetch(`https://api.github.com/users?per_page=${perPage}&since=${since}`);
  const users = await response.json();
  return users;
}

export async function findUser({username}){
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    return {
      props: { userData },
    };
  } catch (error) {
    return {
      props: { error: 'User not found' },
    };
  }
}