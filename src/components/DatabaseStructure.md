Author: Korre Henry

# Database Schema:
    User Object: Defined by the IP Address.
    Message Object: { A string a text, user name, & timestamp }
    Conversation Object: A list of messages.

# Notes:
    The Conversation component loads a Dialogue or list 
    or messsages in the database and createe Message Components from every
    list that the conversation object (in the database) contains
    Conversations are unique and should have a unique id representing
    one person to another person (dialogue)
    Every user should have access to any Conversation they are apart of

    AkA: -- where both use1 & user2 can has a reference to the conversation
        User1 -> (acesses) -> ConversationA (user1 & user2 conversation)
        User2 -> (accesses) -> ConversationA (user1 & user2 conversation)
