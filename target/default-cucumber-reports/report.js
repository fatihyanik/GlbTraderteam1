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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.GlbTraderLoginStepDefinitions\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RBKIVT1\u0027, ip: \u0027192.168.43.127\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: Driver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat utilities.Driver.getDriver(Driver.java:30)\r\n\tat pages.GlbTraderLoginPage.\u003cinit\u003e(GlbTraderLoginPage.java:11)\r\n\tat stepdefinitions.GlbTraderLoginStepDefinitions.\u003cinit\u003e(GlbTraderLoginStepDefinitions.java:12)\r\n\t... 38 more\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:10627/status] to be available after 20003 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\t... 49 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Seller Join Now button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Seller_Join_Now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Agent Seller box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Agent_Seller_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a name \"Team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters an email \"team1@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a subdomain \"team1\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_subdomain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a mobile number \"05050505050\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_mobile_number(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects a country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_a_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a state \"Germany\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_state(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a city \"Leipzig\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_city(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters an address \"Bahnhof\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters an enter postal code \"15600\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_an_enter_postal_code(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects categories",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_selects_categories()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_enters_a_password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GlbTraderLoginStepDefinitions.user_clicks_on_Registration()"
});
formatter.result({
  "status": "skipped"
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
