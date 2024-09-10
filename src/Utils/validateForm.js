export const validateForm = (name, emailOrMobile, password) => {
	const isNameValid = /^[A-Za-z]+([A-Za-z]+)*/.test(name);
	const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailOrMobile);
	const isMobileValid = /^[0-9]{10}$/.test(emailOrMobile);
	const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{8,}$/.test(
		password
	); 
    if(emailOrMobile === "" || password === "") return "All fields are required";
	if (name !== "" && !isNameValid) return "Name is invalid";
	if (!isEmailValid && !isMobileValid) return "Email or Mobile is invalid";
	if (!isPasswordValid) return "Password is invalid";

	return "";
};
