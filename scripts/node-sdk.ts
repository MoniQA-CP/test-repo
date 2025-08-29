import * as fs from "fs";
import { ChannelPaymentsApi, CreateTransactionRequestDto, CreateTransactionRefundDto, CaptureTransactionDto, SearchTransactionsRequest, MerchantEntity, SearchRefundsRequest, GetFeeDetailsRequest, CreateTransactionRequestDtoIntentEnum } from "@cp/node-sdk";

const stage = {
    keyId: "GPW5ASC5whL6CwGpWhFGFspSVXTeBpfNPuNEgUB0y5M=",
    privateKey: fs.readFileSync("keys/stage-key.pem", "utf8"),
    url: "https://stage.channelpayments-api.com",
};
  
const channelPaymentsApi = new ChannelPaymentsApi(stage);

/*--------------PAYLOAD--------------*/

const cardTrasactionData: CreateTransactionRequestDto = {
    amount: 1,
    currency: "USD", 
    intent: "authorize", //authorize or capture
    paymentMethod: {
        method: "CARD",
        number: "4000700011112221",
        expirationDate: "10/29"
    }
}

const achTrasactionData: CreateTransactionRequestDto = {
    amount: 1,
    currency: "USD",
    intent: "debit", //debit
    paymentMethod: {
        method: "BANK",
        abaNumber: "053200983",
        accountHolderName: "monica",
        accountType: "SAVINGS", // SAVINGS or CHECKING
        accountNumber: "1130025611"
    },
    secCode: "PPD" //PPD, CCD, TEL or WEB
}

const refundData: CreateTransactionRefundDto = {
    refundAmount: 2,
    transactionId: "2b49f360-aeb5-4f1f-b043-c43e32f76659" //Note: To refund a transaction, the status of it should be SETTLED (For ACH transactions) or CAPTURED (For cards transactions)
}
/* 
const captureData: CaptureTransactionDto = {
    amount: 1,
    transactionId: "" //Note: To capture a transaction, the status of it should be AUTHORIZED and this method is only for Card transactions
} */

const transactionId = "0c682ddf-c218-4f36-af61-f436c9cede92" //Note: To void a transaction, the status of if should be HOLD, SUBMITTED (For ACH transactions), or AUTHORIZED (For cards transactions) */



/*--------------METHODS--------------*/

/* async function createCardTransaction (){
    try {
      const response = await channelPaymentsApi.createTransaction(cardTrasactionData)
      console.log("New CARD transaction:\n", response);
    } catch (error) {
      console.error(error);
    }
} createCardTransaction(); */

 /*

async function createACHTransaction (){
    try {
      const response = await channelPaymentsApi.createTransaction(achTrasactionData)
      console.log("New ACH transaction:\n", response);
    } catch (error) {
      console.error(error);
    }
} createACHTransaction(); */

async function refundTransaction (){
    try {
      const response = await channelPaymentsApi.refundTransaction(refundData)
      console.log("Refund transaction:\n", response);
    } catch (error) {
      console.error(error);
    }
} refundTransaction();

/* async function captureTransaction (){
    try {
      const response = await channelPaymentsApi.captureTransaction(captureData)
      console.log("Transaction captured:\n", response);
    } catch (error) {
      console.error(error);
    }
} captureTransaction();
*/

/* 
async function voidTransaction (){
    try {
      const response = await channelPaymentsApi.voidTransaction(transactionId)
      console.log("Transaction voided:\n", response);
    } catch (error) {
      console.error(error);
    }
} voidTransaction(); */