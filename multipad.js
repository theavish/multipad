var multipad = {
  left: left,
  right: right,
  center: center
};

function right(string, length, character) {
  string = string.toString();
  character = character.toString();
  length = parseInt(length);

  if (!character && character !== 0) {
    character = ' ';
  }

  while (string.length < length) {
    string += character;
  }

  return string;
}

function left(string, length, character) {
  string = string.toString();
  character = character.toString();
  length = parseInt(length);

  if (!character && character !== 0) {
    character = ' ';
  }

  while (string.length < length) {
    string = character + string;
  }

  return string;
}

function center(string, length, character) {
  string = string.toString();
  character = character.toString();
  length = parseInt(length);

  if (!character && character !== 0) {
    character = ' ';
  }

  while (string.length < length) {
    string = character + string;
    if (string.length < length) {
      string = string + character;
    }
  }

  return string;
}

module.exports = multipad;
