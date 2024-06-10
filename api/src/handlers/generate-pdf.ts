import { APIGatewayProxyHandler } from "aws-lambda";

export const generatePdfHandler: APIGatewayProxyHandler = async (event) => {
  // eslint-disable-next-line no-console
  console.log(event);

  return {
    statusCode: 200,
    body: "Hello, World!",
  };
};
