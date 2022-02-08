import * as cdk from "aws-cdk-lib";
import { Template } from 'aws-cdk-lib/assertions';
import { CDKExampleLambdaApiStack } from "../lib/lambda-api-stack";

describe("CDKExampleLambdaApiStack", () => {
  test("Uses Node.js 14 lambda runtime", () => {
    const lambdaApiStackName = "CDKExampleLambdaApiStack"
    const lambdaFunctionName = "CDKExampleWidgetStoreFunction"

    const app = new cdk.App()
    const stack = new CDKExampleLambdaApiStack(app, lambdaApiStackName, { functionName: lambdaFunctionName })
    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::Lambda::Function", {
      Runtime: "nodejs14.x",
    });
  })    
});