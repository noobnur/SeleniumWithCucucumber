$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "\u003cusername\u003e",
        "\u003cpassword\u003e"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#  Scenario: Login with correct username and password to fail"
    },
    {
      "line": 13,
      "value": "#    Given I navigate to the login page"
    },
    {
      "line": 14,
      "value": "#    And I enter the following for Login"
    },
    {
      "line": 15,
      "value": "#      | username | password      |"
    },
    {
      "line": 16,
      "value": "#      | admin    | adminpassword |"
    },
    {
      "line": 17,
      "value": "#    And I click login button"
    },
    {
      "line": 18,
      "value": "#    Then I should see the userform page wrongly"
    }
  ],
  "line": 20,
  "name": "I should close the chrome page",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 23,
      "id": "loginfeature;login-with-correct-username-and-password;;1"
    },
    {
      "cells": [
        "justin",
        "adminpassword"
      ],
      "line": 24,
      "id": "loginfeature;login-with-correct-username-and-password;;2"
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 25,
      "id": "loginfeature;login-with-correct-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5930308606,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "justin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#  Scenario: Login with correct username and password to fail"
    },
    {
      "line": 13,
      "value": "#    Given I navigate to the login page"
    },
    {
      "line": 14,
      "value": "#    And I enter the following for Login"
    },
    {
      "line": 15,
      "value": "#      | username | password      |"
    },
    {
      "line": 16,
      "value": "#      | admin    | adminpassword |"
    },
    {
      "line": 17,
      "value": "#    And I click login button"
    },
    {
      "line": 18,
      "value": "#    Then I should see the userform page wrongly"
    }
  ],
  "line": 20,
  "name": "I should close the chrome page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1796190894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 339342224,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 488565392,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 50899407,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.closeChromePage()"
});
formatter.result({
  "duration": 320708995,
  "status": "passed"
});
formatter.after({
  "duration": 280403,
  "status": "passed"
});
formatter.before({
  "duration": 3469371033,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the userform page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#  Scenario: Login with correct username and password to fail"
    },
    {
      "line": 13,
      "value": "#    Given I navigate to the login page"
    },
    {
      "line": 14,
      "value": "#    And I enter the following for Login"
    },
    {
      "line": 15,
      "value": "#      | username | password      |"
    },
    {
      "line": 16,
      "value": "#      | admin    | adminpassword |"
    },
    {
      "line": 17,
      "value": "#    And I click login button"
    },
    {
      "line": 18,
      "value": "#    Then I should see the userform page wrongly"
    }
  ],
  "line": 20,
  "name": "I should close the chrome page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 1607124247,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 291373536,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 467151603,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheUserformPage()"
});
formatter.result({
  "duration": 75220884,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.closeChromePage()"
});
formatter.result({
  "duration": 277433921,
  "status": "passed"
});
formatter.after({
  "duration": 124770,
  "status": "passed"
});
});