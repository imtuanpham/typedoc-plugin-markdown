
export function displaySymbol(kindString: string) {

  let symbol = '';

  switch (kindString) {
    case 'Constructor signature':
      symbol = '⊕ ';
      break;
    case 'Call signature':
      symbol = '► ';
      break;
    case 'Property':
    case 'Variable':
      symbol = '● ';
      break;
    default:

  }

  return symbol;
}
