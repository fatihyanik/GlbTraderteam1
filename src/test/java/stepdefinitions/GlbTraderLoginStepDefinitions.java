package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.GlbTraderLoginPage;
import utilities.ConfigReader;
import utilities.Driver;

public class GlbTraderLoginStepDefinitions {

    GlbTraderLoginPage glbTraderLoginPage = new GlbTraderLoginPage();


    @Given("user is on the glbtraderlogin page")
    public void user_is_on_the_glbtraderlogin_page() {
            Driver.getDriver().get(ConfigReader.getProperty("glb_url"));
    }

    @Given("user clicks on Seller Join Now button")
    public void user_clicks_on_Seller_Join_Now_button() {
        glbTraderLoginPage.joinSeller.click();
    }

    @Given("user clicks on Agent Seller box")
    public void user_clicks_on_Agent_Seller_box() {
        glbTraderLoginPage.agentSeller.click();
    }

    @Given("user enters a name {string}")
    public void user_enters_a_name(String string) {
        glbTraderLoginPage.name.sendKeys(string+ Keys.ENTER);
    }

    @Given("user enters an email {string}")
    public void user_enters_an_email(String string) {
        glbTraderLoginPage.email.sendKeys(string+Keys.ENTER);
    }

    @Given("user enters a subdomain {string}")
    public void user_enters_a_subdomain(String string) {
        glbTraderLoginPage.subdomain.sendKeys(string+Keys.ENTER);
    }

    @Given("user enters a mobile number {string}")
    public void user_enters_a_mobile_number(String string) {
        glbTraderLoginPage.mobilNumber.sendKeys(string+Keys.ENTER);
    }

    @Given("user selects a country")
    public void user_selects_a_country() {

    }

    @Given("user enters a state {string}")
    public void user_enters_a_state(String string) {
        glbTraderLoginPage.state.sendKeys(string+Keys.ENTER);
    }

    @Given("user enters a city {string}")
    public void user_enters_a_city(String string) {
        glbTraderLoginPage.city.sendKeys(string+Keys.ENTER);
    }

    @Given("user enters an address {string}")
    public void user_enters_an_address(String string) {
        glbTraderLoginPage.address.sendKeys(string+Keys.ENTER);
    }

    @Given("user enters an enter postal code {string}")
    public void user_enters_an_enter_postal_code(String string) {
        glbTraderLoginPage.postalCode.sendKeys(string+Keys.ENTER);
    }

    @Given("user selects categories")
    public void user_selects_categories() {

    }

    @Given("user enters a password {string}")
    public void user_enters_a_password(String string) {
        glbTraderLoginPage.password.sendKeys(string+Keys.ENTER);
    }

    @Then("user clicks on Registration")
    public void user_clicks_on_Registration() {

    }



}
