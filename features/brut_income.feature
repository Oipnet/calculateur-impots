Feature: Brut Calculator

    Calculate brut income

    Scenario: Single person
      Given A Person with 0 child
      And A net income of 28383 €
      And Precision is 1 €
      When Calculate brut income
      Then Brut is 32000 €

    Scenario: A couple with 2 children
      Given A Couple with 2 children
      And A net income of 53117 €
      And Precision is 1 €
      When Calculate brut income
      Then Brut is 55950 €


