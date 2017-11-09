/**
 * @file lib/prompt-silent.js
 */
'use strict';


const eol      = require('eol');
const readline = require('readline');
const stream   = require('stream');


/**
 * Prompts for input via the terminal, obscuring visible characters via a stream
 * that recognizes when it's muted and shouldn't echo input visibly.
 * @param {String}   text
 * @param {Function} cb
 * @see {@link https://nodejs.org/api/stream.html#stream_class_stream_writable}
 * @see {@link https://nodejs.org/api/readline.html#readline_rl_question_query_callback}
 * @private
 */
module.exports = function promptSilent(text, cb) {
  let out = new stream.Writable({
    write: function write(chunk, encoding, callback) {
      if (!this.muted) {
        process.stdout.write(chunk, encoding);
      }

      return callback();
    }
  });

  let rl = readline.createInterface({
    input:    process.stdin,
    output:   out,
    terminal: true
  });

  rl.question(text, (response) => {
    out.muted = false;
    out.write(eol.auto('\n'));
    rl.close();
    cb(response);
  });

  out.muted = true;
};
