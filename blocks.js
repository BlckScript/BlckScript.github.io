Blockly.defineBlocksWithJsonArray([
    {
      "type": "HTML_sethtmltext",
      "message0": "Set Text Of Html Element With ID %1 to %2",
      "args0": [
        {
          "type": "field_input",
          "name": "NAME",
          "text": "id"
        },
        {
          "type": "input_value",
          "name": "text"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 195,
      "tooltip": "changes the text of an html element with an id",
      "helpUrl": ""
    }
]);

Blockly.JavaScript['HTML_sethtmltext'] = function(block) {
  return "alert('test');\n";
};