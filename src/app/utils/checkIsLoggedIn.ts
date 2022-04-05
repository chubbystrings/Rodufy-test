export const checkIsLoggedIn = () => {
    const user = localStorage.getItem('RodufyUser');
  
    if (!user) return false;

  
    return true;
};