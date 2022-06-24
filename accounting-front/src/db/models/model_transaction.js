import { json } from "express";
import { Model } from "objection";

class Transaction extends Model {
  static get jsonSchema() {
    return {
      type: "object",
      required: ["amount", "description"],
      properties: {
        id: { type: "integer" },
        amount: { type: "integer" },
        description: { type: "string" },
      },
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    return json;
  }
}
