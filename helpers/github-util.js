// github-util.js

export async function getUsers(perPage, page, since) {
  const response = await fetch(`https://api.github.com/users?per_page=${perPage}&since=${since}`);
  const fetchedUsers = await response.json();
  const users = fetchedUsers.filter((user) => user.id < page * perPage);
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

