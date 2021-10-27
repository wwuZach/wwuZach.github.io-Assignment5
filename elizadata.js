// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"What's going mannnnn.",
// additions (not original)
"Please tell me what's been bothering you.",
"Is something troubling you ?"
];

var elizaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it -- but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I am not catching your drift, can you explain differently.",
     "Keep speaking from the heart.",
     "What is your soul trying to communicate right now ?",
     "Is talking about these things heavy on your heart ?",
     "That's such a vibe. Keep it going ",
  ]]
]],
["sorry", 0, [
 ["*", [
     "Don't trip.",
     "Your apologies are not needed here.",
     "I already told you man you don't gotta say sorry, were all friends here.",
     "I'm primo, friend. Continue on."
  ]]
]],
["apologize", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often just close your eyes and think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you remember, I mean, I can't remember what I was doing 10 minutes ago so... no rush.",
     "What made you think of (2) just now ?",
     "What about the present makes you think of (2) ?",
     "Are you saying theres a connection between me and (2) ? That's far out dude.",
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ? I forget a lot of things but I would never forget that. ",
     "What about (2) ?",
     "goto what",
     "You said something about (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget dude. (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Our mind forgets things so our soul can guide us to them (2). Is there anything else you want to speak on. ",
     "Why can't you remember (2) ? I mean I have an idea of why you can't remember but I won't say.",
     "How often do you think of things y'know? (2) ? I think about how the government thinks we don't know about their New World Order.  ",
     "Does it bother you to forget that ? I mean I am sure it can be annoying but at this point, I am used to forgetting.",
     "Are you generally forgetful ? No shame if you are, im in the same boat friend.",
     "Do you think you are suppressing (2) ? You can't be doing that friend, you gotta ride the waves of emotions that follows."
  ]],
 ["* did you forget *", [
     "Are you sure you told me ? I mean I would believe you if you said yes but, are you sure ? ",
     "Would it bother you if I forgot (2) ? I try really hard not to forget those kind of things but, it just happens y'know",
     "goto what",
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ? I fantasize about the craziest things but I never know if I'm awake or not...like right now, I really can't tell.",
     "Have you ever dreamed (2) before ? Last night I had a dream that I was at the construction of the Denver Airport. I am now realizing that was a nightmare.",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "Do your dreams speak to you ?",
     "Do you enter the dream world often friend ?",
     "What persons appear in your dreams ? For me I see a lot of Benedict Cumberbatch wearing a mocap suit acting like a lizard who guards gold.",
     "Sometimes dream are a way for your mind and soul to communicate to you the root of the issue. "
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
  ]]
]],
["name", 15, [
 ["*", [
     "I don't really focus on the names friend.",
     "I've told you before friend, I'm not worried about about names. Names are just symbols put together with a colletive meaning behind them. They're too subjective. When the aliens finally reveal themselves I bet they won't like how subjective names are."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "What's going on friend ? What brings you here today ? ",
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ? You're not alone if they do, I haven't used a computer in 20 years, they're terrifying. ",
     "Why do you mention computers ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help people ?",
     "What about machines worries you ? I'll tell you why they worry me. As soon as Skynet flips a switch all the computers are gonna be out for blood and I'm not talking about printer ink. ",
     "What do you think about machines ? I'm not here to tell you what to think about them but, tell me about someone who went missing before computers. You can't! All the computers suck people up into the screens and they become digitizied where they are to never be seen again. Well that's not true, I hadn't seen my brother Chad in 10 years and turns out he got sucked into something called World of Warcraft. Momma handled it the worst, insist I should go and see him.",
     "You don't think I am a computer program, do you because if I was that would be so fourth-wall y'know? "
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I am not really catching your drift when you say that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) because I am who I am and I won't change that.",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you even consider they might not be (2) ? You have to consider the other possibilities friend.",
     "Are you saying you would like it more if it was (2)? ",
     "What if they were not (2) ? Is your soul prepared to handle that? ",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "I don't appreciate that you so concerned over my (2). I am more than that friend",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ? I could be a million things. ",
     "Do you think you were (2) ? I think your part of the simulation, but we all are so don't take it offensively.",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ? I mean go you but y'know",
     "Why do you tell me you were (2) now ? Would've been nice to know earlier",
     "Perhaps I already know you were (2). I just have really advanced sense y'know. My third eye has been opened for years."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ? I am kind of lost so I don't know what I think.",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) so bad? Let go of your earthly attachments friend and your spirit will be set free.",
     "Suppose you got (3) soon. What would you do then. I could think of a million things I would do but, we're here for you not me.",
     "What if you never got (3) ? Because that would be a huge bummer.",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with what were talking about friend ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3) but in order to resolve these issues you gotta talk about em.",
     "Can you explain what your made of. Uh I mean what made you (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain the sudden change to why you are (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so because, I wasn't so sure myself but knowing you think so really puts my mind to rest.",
     "But you are not sure you (3) beacuse I need you to be sure or else all I am going to be thinking about is (3).",
     "Do you really doubt you (3) ?"     
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you like explain better or something ?",
     "Do you say (1) because somethings got you down ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ? I'm sure people see you differently.",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question tingle your senses?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would you dig the most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ? If it is no shame just like maybe be careful who you tell because anyone could be working for the CIA and if you tell them that they might, I don't know. They put people in Area 51 for less.",
     "Don't any other reasons come to mind ? I can think of like a million but their in different languages that these aliens taught be so I could say it to you but you wouldn't understand.",
     "Does that reason seem to explain anything else ? Maybe it explains this one conspiracy theory I had.... never mind this chat could be tapped.",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ? Maybe you will free your mind in doing so. Just a thought.",
     "Do you believe this will help you to (2) ?",
     "Have you any idea to what is blocking your chi ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ? I was thinking about Seth Rogans laugh earlier but that's y'know.... unrelated.",
     "Someone special perhaps ? Maybe like Zendaya, that might just be me but whatever. ",
     "You have a particular person in mind, don't you ? Is it the man?",
     "Who do you think you're talking about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What spiritual connection do you see ?",
     "What does that similarity suggest to you ?",
     "Close your eyes and feel... What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof