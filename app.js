const encryptionRules = [
  { condition: "e", replace: "enter" },
  { condition: "i", replace: "imes" },
  { condition: "a", replace: "ai" },
  { condition: "o", replace: "ober" },
  { condition: "u", replace: "ufat" },
];

const decryptionRules = [
  { condition: "ai", replace: "a" },
  { condition: "enter", replace: "e" },
  { condition: "imes", replace: "i" },
  { condition: "ober", replace: "o" },
  { condition: "ufat", replace: "u" },
];

const toggleStyleDisplayClassHTML = (className, state) => {
  let elementHTML = document.querySelector(className);
  elementHTML.style.display = state;
};

const assignTextElements = (tag, text) => {
  let elementHTML = document.querySelector(tag);
  elementHTML.innerHTML = text;
  return;
};

const getText = (id) => {
  return String(document.getElementById(id).value).toLowerCase();
};

const replaceValue = (text, rules) => {
  let textReplace = text;

  rules.forEach((rule) => {
    const regex = new RegExp(rule.condition, "g");
    textReplace = textReplace.replace(regex, rule.replace);
  });

  return textReplace;
};

const showTextEncryptDecrypt = (text, rule) => {
  if (text !== "") {
    let textEncryptDecrypt = replaceValue(text, rule);
    console.log("text", textEncryptDecrypt);
    toggleStyleDisplayClassHTML(".no_text_encruypt_decrypt", "none");
    assignTextElements(".show_text_encrypt_decrypt", textEncryptDecrypt);
    toggleStyleDisplayClassHTML(".text_encrypt_decrypt", "flex");
  } else {
    toggleStyleDisplayClassHTML(".no_text_encruypt_decrypt", "flex");
    toggleStyleDisplayClassHTML(".text_encrypt_decrypt", "none");
  }

  return;
};

const encrypt = () => {
  let text = getText("text_encrypt_decrypt");
  showTextEncryptDecrypt(text, encryptionRules);

  return;
};

const decrypt = () => {
  let textEncrypt = getText("text_encrypt_decrypt");
  showTextEncryptDecrypt(textEncrypt, decryptionRules);

  return;
};

const copy = async () => {
  let copyText = document.querySelector(".show_text_encrypt_decrypt").innerHTML;

  try {
    await navigator.clipboard.writeText(copyText);
  } catch (error) {
    console.log("Error to copy text");
  }

  return;
};
