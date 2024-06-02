export const checkValidData = (email, passsword) => {
  const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassworValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passsword);
  // const isAadharVaild = /^\d+$/.test(aadhar);

  if (!isEmailVaild) return "Email ID is Not Valid";
  if (!isPassworValid) return "Passsword is not valid";
  // if (!isAadharVaild) return "Aadhar Number is not Valid";
  return null;
};
