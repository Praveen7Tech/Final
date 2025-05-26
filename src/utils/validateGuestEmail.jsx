

export const validateGuestEmail = (email) => {
  const emailValid = /^\S+@\S+\.\S+$/.test(email);
  return !emailValid ? "Email not valid" : null;
};

