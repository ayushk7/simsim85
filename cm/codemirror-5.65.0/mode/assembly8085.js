/* Example definition of a simple mode that understands a subset of
 * JavaScript:
 */

CodeMirror.defineSimpleMode("assembly8085", {
    // The start state contains the rules that are initially used
    start: [
      // The regex matches the token, the token property contains the type
      {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},
      // You can match multiple tokens at once. Note that the captured
      // groups must span the whole string in this case
      {regex: /(a|b|c|d|e|h|l|sp|pc|psw)\b/i,
       token: [ "variable-2"]},
      // Rules are matched in the order in which they appear, so there is
      // no ambiguity between this one and the one above
      {regex: /(?:aci|adc|add|adi|ana|ani|call|cc|cm|cma|cmc|cmp|cnc|cnz|cp|cpe|cpi|cpo|cz|daa|dad|dcr|dcx|di|ei|ei|hlt|in|inr|inx|jc|jnc|jm|jmp|jnz|jp|jpe|jpo|j|lda|ldax|lhld|lxi|mov|mvi|nop|ora|ori|out|pchl|pop|push|ral|rar|rc|ret|rim|rlc|rm|rnc|rnz|rp|rpe|rpo|rrc|rst|rz|sbb|sbi|shld|sim|sphl|sta|stax|stc|sub|sui|xchg|xra|xri|xthl)\b/i,
       token: "keyword"},
      {regex: /true|false|null|undefined/, token: "atom"},
      {regex: /[a-fA-F0-9]+h/i,
       token: "number"},
      {regex: /\/\/.*/, token: "comment"},
      {regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3"},
      // A next property will cause the mode to move to a different state
      {regex: /\/\*/, token: "comment", next: "comment"},
      {regex: /[-+\/*=<>!]+/, token: "operator"},
      // indent and dedent properties guide autoindentation
      {regex: /[:]/, indent: true},
      {regex: /[\}\]\)]/, dedent: true},
      {regex: /#[a-zA-Z][a-zA-Z0-9]*/, token: "variable"},
      {regex: /[a-zA-Z][a-zA-Z0-9]*/i, token: "variable-4"},
      // You can embed other modes with the mode property. This rule
      // causes all code between << and >> to be highlighted with the XML
      // mode.
      {regex: /<</, token: "meta", mode: {spec: "xml", end: />>/}}
    ],
    // The multi-line comment state.
    comment: [
      {regex: /.*?\*\//, token: "comment", next: "start"},
      {regex: /.*/, token: "comment"}
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
      dontIndentStates: ["comment"],
      lineComment: "//"
    }
  });
  