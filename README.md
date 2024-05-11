# Ceneco Advisory Checker

Github action that sends sms via AWS SNS

**Example**: [Action](https://github.com/AlecBlance/aws-sns-sms/actions)

### Usage

```yaml
- name: Send SMS
  usage: AlecBlance/aws-sns-sms@v1.0.0
  with:
    accessKeyId: ${{ secrets.AWS_ACCESS_KEY_ID }}
    secretAccessKey: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    region: ${{ secrets.AWS_REGION }}
    phoneNumber: ${{ secrets.PHONE_NUMBER }}
    message: "Hello from GitHub Actions"
```

### Input

| Name            | Type   | Description                 |
| --------------- | ------ | --------------------------- |
| accessKeyId     | string | AWS Access Key ID           |
| secretAccessKey | string | AWS Secret Access Key       |
| region          | string | AWS Region                  |
| accessKeyId     | string | Phone number to send sms to |
| phoneNumber     | string | Message to send             |
| message         | string | The AWS SNS Message ID      |

### Outputs

| Name      | Type   | Description            |
| --------- | ------ | ---------------------- |
| messageId | string | The AWS SNS Message ID |
