interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(value: unknown): value is UserData {
  if (
    value &&
    typeof value === "object" &&
    ("nome" in value || "email" in value || "cpf" in value)
  ) {
    return true;
  } else {
    return false;
  }
}

const form = document.querySelector<HTMLElement>("#form");

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function loadUserData() {
  const localUserData = localStorage.getItem("UserData");
  if (localUserData && validJSON(localUserData) && form) {
    let UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}
loadUserData();

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem("UserData", JSON.stringify(window.UserData));
  }
}

form?.addEventListener("keyup", handleInput);
