import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from "../server/firestore.js"; 
import { collection, query, onSnapshot } from "firebase/firestore";


// Add a new document in collection "Users"
async function CreateSingleUser(ipAddress, userName)
{
    ipAddress = CleanIp(ipAddress);
    var user_object = 
    {
        user_ip: ipAddress,
        user_name: userName
    };

    await setDoc(doc(db, "users", ipAddress), user_object);
}

// Look up user from "Users" collection
async function LookUpUserIp(ipAddress)
{
    ipAddress = CleanIp(ipAddress);
    const docRef = doc(db, "users", ipAddress);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Data For IP Address: "+ipAddress+" is ==> ");
      let obj = docSnap.data();
      console.log(obj);
    } else {
      console.log("No such document, for IP Address: " + ipAddress);
      return false;
    }
}

async function UpdateGroupConversation(message)
{
    var ipAddressData = { ip : null };
    await RegisterIPAddress( (ip) => {ipAddressData.ip = ip} );

    var message_Object = 
    {
        user_ip: ipAddressData.ip,
        user_name: "",
        message: message,
        timestamp: "Dummy time"
    }
    var guid = generateGuid();
    await setDoc(doc(db, "groupConvo", guid), message_Object);
}

async function RegisterIPAddress( callBack )
{
    await fetch("https://api.ipify.org/?format=json%27")
    .then(response => response.text())
    .then(data => 
        { 
            data = CleanIp(data);
            if (LookUpUserIp(data))
            {
                callBack(data);
                console.log("IP Address Identified: " + data);
            }
            //CreateSingleUser(data);
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

    return user_id;
}


function CleanIp (ipAddress)
{
    var newData = ipAddress.trim();

    return newData;
}

async function PullGroupConversation(callBack)
{
    const q = query(collection(db, "groupConvo"));
    onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      querySnapshot.forEach((doc) => {
        // Get list of messages
        var messageObject = doc.data();
        newMessages.push(messageObject)
        callBack(newMessages);
      });
    });
}

export const RegisterIPAsUser = RegisterIPAddress;
export const CreateUser = CreateSingleUser;
export const SendGroupMessage = UpdateGroupConversation;
export const UpdateMessages = PullGroupConversation;

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
