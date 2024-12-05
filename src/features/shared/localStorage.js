


export const addUserToLocal = (user) =>{
 localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocal = ()=>{
  const user = localStorage.getItem('user');
  return user === null ? user : JSON.parse(user);
}

export const clearUser = ()=>{
  localStorage.clear()
}