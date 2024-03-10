import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { db } from "../server/firestore.js"; 
import { collection, query, onSnapshot } from "firebase/firestore";
import store  from '../store';


// Add a new document in collection "Users"
export async function CreateSingleUser(userName)
{
    var ipAddress = null; 
    await GetIPAddress((data) => { ipAddress = data });
    var user_object = 
    {
        user_name: userName,
        user_ip: ipAddress
    };

    await setDoc(doc(db, "users", ipAddress), user_object);

    // Validate that User Exists.
    store.dispatch({type: 'SET_USER', payload: user_object});
}

// Look up user from "Users" collection
export async function LookUpUserIp( callBack )
{
    var ipAddress = null; 
    await GetIPAddress((data) => { ipAddress = data });
    const docRef = doc(db, "users", ipAddress);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let obj = docSnap.data();
      callBack(obj);
    } else {
      console.log("No such document, for IP Address: " + ipAddress);
    }
}

export async function SendGroupMessage(message)
{
    var ipAddressData = { ip : null };
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

export async function GetIPAddress( callBack )
{
    await fetch("https://api.ipify.org/?format=json%27")
    .then(response => response.text())
    .then(data => 
        { 
            data = CleanIp(data);
            if (data.length > 3)
            {
                callBack(data);
            }
            else
            {
                callBack(data);
                console.log("Failed to get IP Address for device.")
            }
        });
}

export async function PullGroupConversation()
{
    const q = query(collection(db, "groupConvo"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const newMessages = [];
      console.log("Pulling new messages");
      querySnapshot.forEach((doc) => {
        // Get list of messages
        var messageObject = doc.data();
        newMessages.push(messageObject)
      });
      store.dispatch({type: 'UPDATE_FEED', messages: newMessages});
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
