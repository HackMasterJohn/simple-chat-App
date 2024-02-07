import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firestore.js"; 


// Add a new document in collection "Users"
async function CreateSingleUser(ipAddress)
{
    var hash = ConvertIPAddressIntoUserId(ipAddress);
    var hash_AsString = hash.toString();
    var user_object = 
    { 
        user_hash: hash,
        user_ip: ipAddress,
        user_name: "dummy name"
    };
    console.log("Created User for : "+ipAddress)
    console.log(user_object);
    await setDoc(doc(db, "users", hash_AsString), user_object);
}

async function UpdateGroupConversation(message)
{
    var ipData = { ip : null };
    await RegisterIPAddress( (ip) => {ipData.ip = ip} );

    var ipAddress = ipData.ip;
    var hash = ConvertIPAddressIntoUserId(ipAddress);
    var hash_AsString = hash.toString();
    var message_Object = 
    {
        user_hash: hash_AsString,
        user_ip: ipAddress,
        user_name: " test name -- ",
        message: message,
        timestamp: "Dummy time"
    }
    var guid = generateGuid();
    console.log(guid);
    await setDoc(doc(db, "groupConvo", guid), message_Object);
    console.log("Message object with ID: "+guid);
    console.log(message_Object);
}

async function RegisterIPAddress( callBack )
{
    await fetch("https://api.ipify.org/?format=json%27")
    .then(response => response.text())
    .then(data => 
        { 
            CreateSingleUser(data);
            callBack(data);
            console.log("IP Address Identified: " + data);
        });
}

function ConvertIPAddressIntoUserId(user_ipAddress)
{
    // Remove extra spaces
    var ipAddress = user_ipAddress.trim();

    // remove "." symbols
    ipAddress = ipAddress.replaceAll('.', '');


    // replace all 0's with 7's
    ipAddress = ipAddress.replace("0", "7");

    var user_id = -1;
    var num = user_id;
    var power = 1;
    for (let i = ipAddress.length-1; i > -1; i--) 
    {
        if (num < 0 )
        {
            num = 0;
        }
        let intChar = parseInt(ipAddress[i]);

        num += Math.pow(intChar, power);
        power +=1;
    }

    user_id = num;

    console.log("User Id for IP: "+ ipAddress + " is : "+ user_ipAddress);

    return user_id;
}

async function PullGroupConversation()
{

}

export const RegisterIPAsUser = RegisterIPAddress;
export const CreateUser = CreateSingleUser;
//export const CreateConversation = CreateSingleConversation;
export const SendGroupMessage = UpdateGroupConversation;

function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

// Add a new document in collection "Conversations"
async function CreateSingleConversation(user1, user2)
{
    var conversationId = null; // CreateConversationId(user1, user2);
    var convo_id_asString = conversationId.toString();
    console.log("Creating Conversation for User for : "+user1 + " & "+user2 + " as: \n ==> "+ conversationId)
    var convo_object = 
    { 
        convo_id: conversationId,
        messages: []
    };
    console.log(convo_object);

    //await setDoc(doc(db, "conversations", convo_id_asString), convo_object);
}
function CreateConversationId(user1, user2)
{
    var convo_id = ConvertIPAddressIntoUserId(user1) + ConvertIPAddressIntoUserId(user2);
    console.log("convo_id ==> " + convo_id);
    return convo_id;
}
