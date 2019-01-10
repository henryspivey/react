import uuid from "uuid";
import * as dynamoDbLib from './libs/dynamo-lib';
import {success, failure} from './libs/response-lib';

export async function main(event, context) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "notes",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    return failure({status: false})
  }
}


// export function main(event, context, callback) {


//   const params = {
//     TableName: "notes",
//     Item: {
//       userId: event.requestContext.identity.cognitoIdentityId,
//       noteId: uuid.v1(),
//       content: data.content,
//       attachment: data.attachment,
//       createdAy: Date.now()
//     }
//   };

//   dynamoDb.put(params, (error, data) => {
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": true
//     }

//     if(error) {
//       const response = {
//         statusCode: 500,
//         headers: headers,
//         body: JSON.stringify({status: false})
//       };
//       failure(null, response);
//       return;
//     }

//     const response  = {
//       statusCode: 200,
//       headers: headers,
//       body: JSON.stringify(params.Item)
//     }
//     success(null, response);
//   });
// }