/**
 * @file lib/index.js
 */
'use strict';


const prompt       = require('./prompt');
const promptSilent = require('./prompt-silent');


/**
 * A Promisified wrapper around readline#question.
 * @param   {String} text
 * @returns {Promise.<String>}
 * @see {@link https://nodejs.org/api/readline.html#readline_rl_question_query_callback}
 * @public
 */
module.exports.string = (text) => {
  return new Promise((resolve) => {
    prompt(text, resolve);
  });
};


/**
 * A Promisified wrapper around readline#question that obscures input, suitable
 * for hiding sensitive data from prying eyes. Does _not_ magically prevent said
 * sensitive data from leaking out of the program in other ways.
 * @param   {String} text
 * @returns {Promise.<String>}
 * @see {@link https://nodejs.org/api/readline.html#readline_rl_question_query_callback}
 * @public
 */
module.exports.password = (text) => {
  return new Promise((resolve) => {
    promptSilent(text, resolve);
  });
};
