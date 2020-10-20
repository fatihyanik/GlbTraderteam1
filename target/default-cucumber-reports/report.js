$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/glbtrader_login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@glbtraderlogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC01_user logins with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the glbtraderlogin page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on Seller Join Now button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Agent Seller box",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters an email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a subdomain \"\u003csubdomain\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a mobile number \"\u003cnumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects a country",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters an address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters an enter postal code \"\u003cpostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects categories",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subdomain",
        "number",
        "state",
        "city",
        "address",
        "postal code",
        "password"
      ]
    },
    {
      "cells": [
        "Team1",
        "team1@gmail.com",
        "team1",
        "05050505050",
        "Germany",
        "Leipzig",
        "Bahnhof",
        "15600",
        "12345"
      ]
    },
    {
      "cells": [
        "Fatih",
        "fatih07@gmail.com",
        "team1",
        "01010010101",
        "Germany",
        "Berlin",
        "Bahnhof",
        "15600",
        "12345"
      ]
    },
    {
      "cells": [
        "Ihsan",
        "ihsan07@gmail.com",
        "team1",
        "03030030303",
        "Germany",
        "Berlin",
        "Bahnhof",
        "15600",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC01_user logins with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@glbtraderlogin"
    }
  ]
});
formatter.step({
  "name": "user is on the glbtraderlogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_is_on_the_glbtraderlogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Seller Join Now button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Seller_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Agent Seller box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Agent_Seller_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name \"Team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an email \"team1@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a subdomain \"team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_subdomain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a mobile number \"05050505050\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_mobile_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_a_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a state \"Germany\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_state(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a city \"Leipzig\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an address \"Bahnhof\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an enter postal code \"15600\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_enter_postal_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects categories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Registration()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_user logins with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@glbtraderlogin"
    }
  ]
});
formatter.step({
  "name": "user is on the glbtraderlogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_is_on_the_glbtraderlogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Seller Join Now button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Seller_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Agent Seller box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Agent_Seller_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name \"Fatih\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an email \"fatih07@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a subdomain \"team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_subdomain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a mobile number \"01010010101\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_mobile_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_a_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a state \"Germany\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_state(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a city \"Berlin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an address \"Bahnhof\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an enter postal code \"15600\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_enter_postal_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects categories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Registration()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC01_user logins with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@glbtraderlogin"
    }
  ]
});
formatter.step({
  "name": "user is on the glbtraderlogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_is_on_the_glbtraderlogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Seller Join Now button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Seller_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Agent Seller box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Agent_Seller_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a name \"Ihsan\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an email \"ihsan07@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a subdomain \"team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_subdomain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a mobile number \"03030030303\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_mobile_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects a country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_a_country()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a state \"Germany\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_state(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a city \"Berlin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an address \"Bahnhof\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters an enter postal code \"15600\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_enter_postal_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects categories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_categories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Registration()"
});
formatter.result({
  "status": "passed"
});
});