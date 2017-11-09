/**
 * @file lib/prompt.js
 */
'use strict';


const readline = require('readline');


/**
 * Prompts for input via the terminal.
 * @param {String}   text
 * @param {Function} cb
 * @see {@link https://nodejs.org/api/readline.html#readline_rl_question_query_callback}
 * @private
 */
module.exports = function prompt(text, cb) {
  let rl = readline.createInterface({
    input:    process.stdin,
    output:   process.stdout,
    terminal: true
  });

  rl.question(text, (response) => {
    rl.close();
    cb(response);
  });
};
