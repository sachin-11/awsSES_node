const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");

dotenv.config();

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION_NAME,
};

const SES = new AWS.SES(awsConfig);

const sendEmail = () => {
  const email = process.env.FROM_EMAIL;
  const val = Math.floor(1000 + Math.random() * 9000);

  try {
    //email send

    const params = {
      Source: email,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: `OTP Verification`,
        },
        Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<h1>Your verification code is ${val}</h1>`,
            },
          },
      },
     
    };

    //send Email

    const emailsend = SES.sendEmail(params).promise();

    emailsend
      .then((data) => {
        console.log(`Email send successfully ${data.MessageId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
