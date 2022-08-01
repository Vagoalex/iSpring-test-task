class Calculator {
  constructor() {
    this.variables = new Map();
    this.functions = new Map();
  }

  create(name, operands, operation) {
    if (this.isExist(name)) {
      throw new CalcException('Exists variable or function');
    }

    if (operands) {
      this.functions.set(name, { operands, operation });
      return;
    }

    this.variables.set(name, NaN);
  }

  set(name, value) {
    if (this.isFunc(value)) {
      throw CalcException('Variable cant links to function');
    }

    if (!this.variables.has(name)) {
      this.create(name);
    }

    try {
      this.variables.set(name, Number(this.get(value)));
    } catch {
      this.variables.set(name, Number(value));
    }
  }

  isExist(name) {
    return this.variables.has(name) || this.functions.has(name);
  }

  get(name) {
    if (this.variables.has(name)) {
      return this.variables.get(name);
    }

    throw new CalcException('Not exists variable');
  }

  isFunc(name) {
    return this.functions.has(name);
  }

  execute(name) {
    if (!this.functions.has(name)) {
      throw new CalcException('Not exists function');
    }

    const { operands, operation } = this.functions.get(name);

    const ops = operands.map((item) =>
      this.isFunc(item) ? this.execute(item) : this.get(item)
    );

    return operation ? operation(ops[0], ops[1]) : ops[0];
  }
}

class CalcException extends Error {
  constructor(message) {
    super(message);
    this.name = 'CalcException';
  }
}

class Program {
  constructor() {
    this.calculator = new Calculator();
    this.reserved = ['var', 'let', 'fn', 'print', 'printvars', 'printfns'];
    this.operations = {
      '+': (val1, val2) => val1 + val2,
      '-': (val1, val2) => val1 - val2,
      '/': (val1, val2) => val1 / val2,
      '*': (val1, val2) => val1 * val2,
    };
  }

  print(name) {
    try {
      const c = this.calculator;
      console.log(
        name +
          ': ' +
          (c.isFunc(name) ? c.execute(name) : c.get(name)).toFixed(2)
      );
    } catch (e) {
      console.log(e);
    }
  }

  printMap(map) {
    [...map.keys()].sort().forEach(this.print.bind(this));
  }

  parse(string) {
    const [reserved, expression] = string.split(' ');

    const [name, value] = (expression || '').split('=');

    if (this.reserved.includes(name)) {
      throw new CalcException('Reserved variable');
    }

    const c = this.calculator;

    switch (reserved) {
      case 'var':
        c.create(expression);
        break;

      case 'let':
        c.set(name, value);
        break;

      case 'fn':
        const operator = value
          .split('')
          .find((letter) => this.operations.hasOwnProperty(letter));

        c.create(name, value.split(operator), this.operations[operator]);
        break;

      case 'print':
        this.print(name);
        break;

      case 'printvars':
        this.printMap(c.variables);
        break;

      case 'printfns':
        this.printMap(c.functions);
        break;

      default:
        break;
    }
  }
}

// const program = new Program();
// const stdin = process.openStdin();

// stdin.addListener('data', function (d) {
//   const command = d.toString().trim();

//   if (command == 'exit') {
//     process.exit(0);
//     return;
//   }

//   program.parse(command);
// });

export default Program;
