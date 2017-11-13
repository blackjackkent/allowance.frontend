export const schema = {
	"type": "object",
	"properties": {
		"budget": {
			"type": "object",
			"properties": {
				"id": {
					"type": "string",
					"faker": "random.uuid",
					"unique": true,
					"minimum": 1
				},
				"month": {
					"type": "integer",
					"maximum": 11,
					"minimum": 11
				},
				"year": {
					"type": "integer",
					"maximum": 2017,
					"minimum": 2017
				},
				"remainingSpendPerDay": {
					"type": "number",
					"faker": "finance.amount"
				},
				"monthlySavings": {
					"type": "number",
					"faker": "finance.amount"
				}
			},
			"required": ["id", "remainingSpendPerDay", "month", "year", "monthlySavings"]
		},
	},
	"required": ["budget"],
};
