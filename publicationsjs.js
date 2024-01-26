function copyText(text) {
  // Create a textarea element
  var textarea = document.createElement("textarea");

  // Set the value of the textarea to the provided text
  textarea.value = text;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Execute the "copy" command
  document.execCommand('copy');

  // Remove the textarea from the body
  document.body.removeChild(textarea);

  // Optionally, provide feedback to the user
  alert("Text copied to clipboard!");
}
