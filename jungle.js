const express = require("express");
const app = express();
const vm = require("vm");
const { compileFunction, Script } = require("node:vm");

app.get("/", async (req, res) => {
  const input = req.query.name;

  var sandbox = {
    foo: input,
  };
  vm.createContext(sandbox);
  // proruleid: vm-express
  vm.runInContext("safeEval(orderLinesData)", sandbox, { timeout: 2000 });
  // ok: vm-express
  vm.runInContext("safeEval(orderLinesData)", {}, { timeout: 2000 });

  const code1 = `
      var x = ${input};
  `;
  // proruleid: vm-express
  vm.runInThisContext(code1);

  const context = vm.createContext({ name: input });
  let code2 = `return 'hello ' + name`;
  // proruleid: vm-express
  const fn = compileFunction(code2, [], { parsingContext: context });

  // proruleid: vm-express
  const script = new Script(`
      function add(a, b) {
        return a + ${input};
      }

      const x = add(1, 2);
  `);

  // ok: vm-express
  const script2 = new Script(`
      function add(a, b) {
        return a + aaa;
      }

      const x = add(1, 2);
  `);

  res.send("ok!");
});
