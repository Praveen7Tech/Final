export const validateFormData = (name, email, password) => {
  const emailValid = /^\S+@\S+\.\S+$/.test(email);
  const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  const nameValid = /^[A-Za-z\s\-.']+$/.test(name) 

  return {
    emailMessage: !emailValid ? "Email Not Valid" : null,
    paswordMessage: !passwordValid ? "Password not valid..." : null,
    nameMessage: !nameValid ? "Name not valid" : null,
  };
};
