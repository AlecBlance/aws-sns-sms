const AWS = require("aws-sdk");
const dotenv = require("dotenv");
const core = require("@actions/core");

dotenv.config();

const accessKeyId =
  core.getInput("accessKeyId") || process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey =
  core.getInput("secretAccessKey") || process.env.AWS_SECRET_ACCESS_KEY;
const region = core.getInput("region") || process.env.AWS_REGION;
const phoneNumber = core.getInput("phoneNumber") || process.env.PHONE_NUMBER;
const message = core.getInput("message") || process.env.MESSAGE;

AWS.config.update({ accessKeyId, secretAccessKey, region });
const sns = new AWS.SNS();

const run = async () => {
  try {
    const params = {
      Message: message,
      PhoneNumber: phoneNumber,
    };
    core.debug("Sending SMS");
    const { MessageId } = await sns.publish(params).promise();
    core.setOutput("messageId", MessageId);
    core.debug("SMS sent!");
  } catch (error) {
    core.error("Failed to send message", message);
    core.setFailed(message);
  }
};

run();
