export default function validateDataUser(dataUserForm) {
  if (dataUserForm.fullName === ""
    || dataUserForm.fullName.length < 5
    || dataUserForm.email === ""
    || !emailVálido(dataUserForm.email)) {
    alert("Por favor verifique su información nuevamente.");
    return false;
  }
  return true
}

function emailVálido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}