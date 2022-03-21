Feature: SignUp, Sign In and Purchase Product

  Scenario: TC-001 Create New User/SignUp
     Given I am on the home page
     Then Navigate to SignUp page
     And create an account with random username
     

  Scenario: TC-002 Sign In with newly created user credentails
     Given I am on the sign In page
     When Login using newly created credentails
     Then I shall verify the address information in my addresses section

    Scenario: TC003 Add product to Online Cart and checkout
     Given  I am on the sign In page
     When Login using newly created credentails
     When I add below products to Cart
         | category | subCategory    | name                        | Model  | quantity |
         | Dresses  | CASUAL DRESSES | Printed Dress               | demo_3 | 2        |
         | Women    | TOPS           | Faded Short Sleeve T-shirts | demo_1 | 3        |

      Then I shall validate shopping car as below
         | name                        | model       | quantity |
         | Printed Dress               | SKU: demo_3 | 2        |  
         | Faded Short Sleeve T-shirts | SKU: demo_3 | 3        | 

      Then I shall be able to buy the product
      And I shall be able to Buy using cheque payment   