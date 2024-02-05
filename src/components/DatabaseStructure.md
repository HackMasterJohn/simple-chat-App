Author: Korre Henry

# Database Schema:
    User Object: Defined by the IP Address.
    Message Object: { A string a text, user name, & timestamp }
    Conversation Object: 
        A conversation is uniquely identified by the sum
        of two UserObjects identities added together.
        For example:
            User A: IP Address - 122.22.22.0
            User B: IP Address - 123.22.22.0
            Conversation ID for User A & User B: 
                ID: (UserA)122.22.22.0 + (UserB)123.22.22.0 
            Therefore User A or User B can search for a conversation 
            by adding their own user id to the User they are searching 
            for a conversation with.

            For example if user B is searching for a conversation with user A,
            then the search query would be 123.22.22.0 + 122.22.22.0
            because User B is 123.22.22.0 and User A is 122.22.22.0 .

            Conversely if user A is searching for a conversation with user B the
            search query would be 122.22.22.0 and User A is 123.22.22.0 

            Having conversation identities computed this way allows users to search
            for conversations effieciently since all they need is the other user's id.

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
