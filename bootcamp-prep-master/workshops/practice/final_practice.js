// 3. Long-Named Potion Brewers (Coding)
// Write a function namePotionBrewers that takes a nested object potions, and returns a string of names of brewers where each name's length is greater than 12, or an empty string if there are no brewers. The string of names must be connected by a &. Please use Object.keys() in your solution, and any array methods you would like.

// Note: Assume all potions are brewed by a different witch/wizard.

const hpObj = {
    "amortentia": {
      "definition": "creates powerful obsession and infatuation",
      "brewedBy": "Romilda Vane"
    },
    "polyjuice": {
      "definition": "causes deep slumber",
      "brewedBy": "Hermione Granger"
    },
    "felix felicis": {
      "definition": "causes the user to have liquid luck!",
      "brewedBy": "Horace Slughorn"
    }
  }