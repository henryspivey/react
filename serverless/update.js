import * as dynamoDbLib from "./libs/dynamo-lib";
import {success, failure} from './libs/response-lib';


export async function main(event, context) {
	const data = JSON.parse(event.body);
	const params = {
		TableName: "notes",
		Key: {
			userId: event.requestContext.identity.cognitoIdentityId,
			notedId: event.pathParameters.id
		},

		UpdateExpression: "SET content = :content, attachment = :attachment",
		ExpressionAttributeValues: {
			":attachment": data.attachment || null,
			":content": data.content || null
		},

		ReturnValues: "ALL_NEW"
	};

	try {
		const result = await dynamoDbLib.call("update", params);
		return success({status:true})
	} catch(e) {
		console.log(e)
		return failure({status: false})
	}
}