Feature: Income Taxes Calculator

    Calculate income Taxes

    Scenario: Single person
      Given A Person with 0 child
      And An income of 32k
      When Calculate income Taxes
      Then Pay 3617 € of taxes
      Then Slice 1 is 0
      Then Slice 2 is 1715.34
      Then Slice 3 is 1902
      Then Net income is 28383 €

    Scenario: Couple with 2 children
      Given A Couple with 2 children
      And An income of 55.950k
      When Calculate income Taxes
      Then Pay 2833 € of taxes
      Then Slice 1 is 0
      Then Slice 2 is 944.35
      Then Net income is 53117 €