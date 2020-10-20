@glbtraderlogin
Feature: Login feature

  Scenario Outline: TC01_user logins with valid credentials
    Given user is on the glbtraderlogin page
    And user clicks on Seller Join Now button
    And user clicks on Agent Seller box
    And user enters a name "<name>"
    And user enters an email "<email>"
    And user enters a subdomain "<subdomain>"
    And user enters a mobile number "<number>"
    And user selects a country
    And user enters a state "<state>"
    And user enters a city "<city>"
    And user enters an address "<address>"
    And user enters an enter postal code "<postal code>"
    And user selects categories
    And user enters a password "<password>"
    Then user clicks on Registration

    Examples:
      | name  | email             | subdomain | number      | state   | city    | address | postal code | password |
      | Team1 | team1@gmail.com   | team1     | 05050505050 | Germany | Leipzig | Bahnhof | 15600       | 12345    |
      | Fatih | fatih07@gmail.com | team1     | 01010010101 | Germany | Berlin  | Bahnhof | 15600       | 12345    |
      | Ihsan | ihsan07@gmail.com | team1     | 03030030303 | Germany | Berlin  | Bahnhof | 15600       | 12345    |

