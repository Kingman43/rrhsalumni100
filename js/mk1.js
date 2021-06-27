var synth = window.speechSynthesis;

let inputTxt = 'Please select a topic';
let countUpText = '';


let totalMorals = 0;
let totalPolitics = 0;
let totalWho = 0;
let totalBedroom = 0;
let totalCurrentNews = 0;

let totalDoneMorals = 0;
let totalDonePolitics = 0;
let totalDoneWho = 0;
let totalDoneBedroom = 0;
let totalDoneCurrentNews = 0;

let found = false;
let currIdx = -1;


let questions = [
    {"type": "bedroom", "text": "What is your dirtiest sexual fantasy?", "used": false},

    {"type": "politics", "text": "Why do blue collar white people tend to vote Republican?", "used": false},
    {"type": "politics", "text": "How have your political views changed over your lifetime?", "used": false},
    {"type": "bedroom", "text": "Where is the riskiest place you have had sex?", "used": false},
    {"type": "politics", "text": "Is voting by mail a good idea?", "used": false},

    {"type": "bedroom", "text": "Where on your body is your favorite place to be touched?", "used": false},
    {"type": "bedroom", "text": "What is your favorite part of the person to your right's body?", "used": false},
    {"type": "politics", "text": "Have you ever voted for a Democrat for President?", "used": false},
//  {"type": "bedroom", "text": "Have you ever received anal penetration of a penis?", "used": false},

    {"type": "bedroom", "text": "If you could choose what the person to your left is wearing right now, what would you choose? ('nothing' or 'naked' is not a valid answer)", "used": false},

    {"type": "bedroom", "text": "If you could have sex anywhere in the world, where would it be?", "used": false},
    {"type": "bedroom", "text": "When did you first have sex?", "used": false},
    {"type": "politics", "text": "Have you ever voted for a Republican for President?", "used": false},

    {"type": "bedroom", "text": "What is your favorite sexual position?", "used": false},

    {"type": "bedroom", "text": "Have you ever been caught having sex?", "used": false},
    {"type": "bedroom", "text": "Do you watch porn?", "used": false},
    {"type": "bedroom", "text": "How often do you masturbate?", "used": false},
    {"type": "bedroom", "text": "Do you prefer to give or receive?", "used": false},
    {"type": "bedroom", "text": "Have you been skinny dipping in the past three years?", "used": false},
    {"type": "bedroom", "text": "Have you ever slept with someone you work with? Have you ever done it secretly", "used": false},
    {"type": "bedroom", "text": "Have you ever sent nudes of yourself?", "used": false},
    {"type": "bedroom", "text": "Have you had group sex?", "used": false},
    {"type": "bedroom", "text": "What is the most orgasms you have had in one day?", "used": false},
    {"type": "bedroom", "text": "If no one else can hear besides you and your partner, are you loud or quiet during sex?", "used": false},
    {"type": "bedroom", "text": "Would you care if other people in your household could hear you during sex?", "used": false},
    {"type": "bedroom", "text": "Are you verbal during sex?", "used": false},
    {"type": "bedroom", "text": "Have you ever made a sex video?", "used": false},
    {"type": "bedroom", "text": "What is the first thing that sexually attacts you to someone?", "used": false},
    {"type": "bedroom", "text": "Would you say you have any fetishes?", "used": false},
    {"type": "bedroom", "text": "When it comes to B.D.S.M., how far have you gone? How far would you go?", "used": false},
    {"type": "bedroom", "text": "Do you currently have a favorite sexual prop or toy?", "used": false},
    {"type": "bedroom", "text": "Have you read an erotic fiction story or book in the past year?", "used": false},
    {"type": "bedroom", "text": "Have you joined the mile high club?", "used": false},
    {"type": "bedroom", "text": "Has anyone ever taken off your underwear without using hands?", "used": false},
    {"type": "bedroom", "text": "Would you say you are more kinky, or more traditional?", "used": false},
    {"type": "bedroom", "text": "Have you had shower sex in the past two years?", "used": false},
    {"type": "bedroom", "text": "Where is the weirdest place you have ever masturbated?", "used": false},
    {"type": "bedroom", "text": "Do you like to be spanked?", "used": false},
    {"type": "bedroom", "text": "What is your most embarrassing sexual experience?", "used": false},
    {"type": "bedroom", "text": "Have you ever fantasized about someone else during sex? How about while receiving oral?", "used": false},
    {"type": "bedroom", "text": "If the person to your left caught you masturbating and asked you to continue, would you stop or would you finish?", "used": false},
    {"type": "bedroom", "text": "Have you ever had an inappropriate crush?", "used": false},
    {"type": "bedroom", "text": "Have you ever fallen asleep during sex or oral sex?", "used": false},
    {"type": "bedroom", "text": "Has anyone ever fallen asleep on you while you were giving them oral sex?", "used": false},
    {"type": "bedroom", "text": "Do you prefer eye contact or no eye contact during sex?", "used": false},
    {"type": "bedroom", "text": "Do you like to kiss during sex?", "used": false},
    {"type": "bedroom", "text": "What is the most intimate act?", "used": false},
    {"type": "bedroom", "text": "How many positions do you think you've tried?", "used": false},
    {"type": "bedroom", "text": "Sex with lights on, or sex with lights off?", "used": false},
    {"type": "bedroom", "text": "Do you like your partner to dirty talk?", "used": false},
    {"type": "bedroom", "text": "Do you dirty talk?", "used": false},
    {"type": "bedroom", "text": "Does phone sex do anything for you?", "used": false},
    {"type": "bedroom", "text": "Have you had sex in a car in the past five years?", "used": false},
    {"type": "bedroom", "text": "Do you think you are more dominant or more submissive?", "used": false},
    {"type": "bedroom", "text": "Have you ever had a one-night stand?", "used": false},
    {"type": "bedroom", "text": "Do you prefer top or bottom?", "used": false},
    {"type": "bedroom", "text": "What is your favorite time of day to have sex?", "used": false},
    {"type": "bedroom", "text": "Do you prefer rough or romantic?  Choose only one", "used": false},
    {"type": "bedroom", "text": "Do you prefer a quickie or marathon?  Choose only one", "used": false},
    {"type": "bedroom", "text": "Do you like to role play?", "used": false},
    {"type": "bedroom", "text": "What is your most unusual body part you like to be kissed?", "used": false},
    {"type": "bedroom", "text": "Do you like sexting?", "used": false},
    {"type": "bedroom", "text": "Besides the first few times you had sex, describe the shortest time it has ever taken for you to orgasm?", "used": false},
    {"type": "bedroom", "text": "Have you ever faked an orgasm?", "used": false},
    {"type": "bedroom", "text": "How would you make the person across from you orgasm?", "used": false},
    {"type": "bedroom", "text": "How old were you when you lost your viginity?", "used": false},
    {"type": "bedroom", "text": "If you were not currently in a relationship, would you do a one-night stand?", "used": false},
    {"type": "bedroom", "text": "How would you dominate your boss sexually if given the chance?", "used": false},
    {"type": "bedroom", "text": "What do you do when you get horny in public?", "used": false},
    {"type": "bedroom", "text": "Have you ever masturbated in a public bathroom?", "used": false},
    {"type": "bedroom", "text": "What is the strangest prop you have used to get yourself off?", "used": false},
    {"type": "bedroom", "text": "Do you remember your first orgasm? Where and why?", "used": false},
    {"type": "bedroom", "text": "In your opinion, what does it mean to be good in bed?", "used": false},
    {"type": "bedroom", "text": "What is the dirtiest thing someone has said to you during sex?", "used": false},
    {"type": "bedroom", "text": "Have you ever watched another couple have sex without them knowing?", "used": false},
    {"type": "bedroom", "text": "Have you ever watched another couple have sex with their permission?", "used": false},
    {"type": "bedroom", "text": "If you were not currently in a relationship, how would you respond if a couple approached you to be their 'third'?", "used": false},
    {"type": "bedroom", "text": "What is the most flattering thing someone has said about your naked body?", "used": false},
    {"type": "bedroom", "text": "Have you ever propositioned a total stranger in the first sentence you said to them?", "used": false},
    {"type": "bedroom", "text": "On average, how long does it take to get yourself off during masturbation?", "used": false},
    {"type": "bedroom", "text": "What's the weirdest thing that turns you on?", "used": false},
    {"type": "bedroom", "text": "When receiving oral, do you like your partner's hands and fingers to be involved?", "used": false},
    {"type": "bedroom", "text": "Do you enjoy penetration or oral better?", "used": false},
    {"type": "bedroom", "text": "Do you enjoy giving oral?", "used": false},
    {"type": "bedroom", "text": "Have you ever swallowed male ejaculate?", "used": false},
    {"type": "bedroom", "text": "Have you ever done it in your parents' bed?", "used": false},
    {"type": "bedroom", "text": "Have you had sexual intercourse while driving or your partner driving?", "used": false},
    {"type": "bedroom", "text": "Do you like to be watched during sex?", "used": false},
    {"type": "bedroom", "text": "Have ever masturbated at work?  What about other than the restroom?", "used": false},
    {"type": "bedroom", "text": "Describe the feeling you get when you are having an orgasm", "used": false},
    {"type": "bedroom", "text": "Do you like verbal feedback words from your partner?", "used": false},
    {"type": "bedroom", "text": "Have you ever made a video of yourself masturbating and then watched it later?", "used": false},
    {"type": "bedroom", "text": "What turns you off the most in the opposite sex?", "used": false},
    {"type": "bedroom", "text": "Would you touch the genitals of someone of the same sex (not counting medicinal or doctoral)?", "used": false},
    {"type": "bedroom", "text": "How do you feel about being nude around others?", "used": false},
    {"type": "bedroom", "text": "What do you like most about your own body?", "used": false},
    {"type": "bedroom", "text": "What body part of yours do you think turns others on the most?", "used": false},
    {"type": "bedroom", "text": "Are you wearing underwear now? If yes, what color or style", "used": false},
    {"type": "bedroom", "text": "Have you ever had sex where you or your partner wore nothing but boots?", "used": false},
    {"type": "bedroom", "text": "How long do you like foreplay to last?", "used": false},
    {"type": "bedroom", "text": "How long do you like penetration (sexual intercourse) to last?", "used": false},
    {"type": "bedroom", "text": "Have you ever had sex with two different partners in the same day without the other knowing about it?", "used": false},
    {"type": "bedroom", "text": "Have you had sex in the ocean?", "used": false},
    {"type": "bedroom", "text": "Have you had sex on a boat?", "used": false},
    {"type": "bedroom", "text": "Do you prefer music during sex? Favorite artist?", "used": false},
    {"type": "bedroom", "text": "Do you like the idea of getting caught by a stranger while you are having sex?", "used": false},
    {"type": "bedroom", "text": "If horny, what is the first article of clothing you would remove from the person across from you?", "used": false},
    {"type": "bedroom", "text": "Have you had sex with someone more than 20 years your senior?", "used": false},
    {"type": "bedroom", "text": "Have you had sex with someone more than 20 years your junior?", "used": false},
    {"type": "bedroom", "text": "Have you ever needed Viagra?", "used": false},



    {"type": "morals", "text": "Should terminally ill patients be allowed to end their lives via assisted suicide?", "used": false},
    {"type": "morals", "text": "Does it bother you when you see video of people burning the American flag?", "used": false},
    {"type": "morals", "text": "A grandfather dies. He leaves six million dollars to his daughter, who is the mother of his two grandkids. Grandfather leaves three million dollars to his grandson. Grandfather disagreed with his granddaughter's life decisions, therefore grandfather did not leave any inheritance to his granddaughter. The mother of the two kids decides to give three million dollars immediately to her daughter. Her son gets mad at his mother's decision.  Who is wrong?  The grandfather? The mother? The grandson?", "used": false},



    {"type": "current news", "text": "Should the government order schools to be closed in order to combat coronavirus?", "used": false},
    {"type": "current news", "text": "Should the President of the United States have the power to deploy military troops in order to stop protests?", "used": false},
    {"type": "current news", "text": "Should the police stand aside while Black Lives Matter protesters tear down Confederate statues?", "used": false},
    {"type": "current news", "text": "Do you believe Black Lives Matter?", "used": false},
    {"type": "current news", "text": "How do you feel about 'Defund the Police'?", "used": false},
    {"type": "current news", "text": "Should the US government grant immunity to Edward Snowden?", "used": false},
    {"type": "current news", "text": "Should the government use economic stimulus to aid the country during a pandemic?", "used": false},
    {"type": "current news", "text": "Should the government enforce a 'stay-at-home' order to combat the coronavirus?", "used": false},



    {"type": "politics", "text": "Is requiring an I.D. to vote a good idea?", "used": false},
    {"type": "politics", "text": "Would you consider yourself a Capitalist?", "used": false},
    {"type": "politics", "text": "Should America keep the Electoral College system, or move to popular vote?", "used": false},
    {"type": "politics", "text": "How do you feel about lobbyists?", "used": false},
    {"type": "politics", "text": "Should non-medicinal marijuana be federally legal?", "used": false},
    {"type": "politics", "text": "Do you support legalization of same sex marriage?", "used": false},
    {"type": "politics", "text": "Should gay couples have the same adoption rights as straight couples?", "used": false},
    {"type": "politics", "text": "What is your stance on abortion?", "used": false},
    {"type": "politics", "text": "Should the government continue to support Planned Parenthood?", "used": false},
    {"type": "politics", "text": "Should a business be able to deny service to a customer if the request conflicts with the religious beliefs of the owner?", "used": false},
    {"type": "politics", "text": "Should the federal government institute a mandatory buyback of assault weapons?", "used": false},
    {"type": "politics", "text": "Should marital rape be classified and punished as severely as non-marital rape?", "used": false},
    {"type": "politics", "text": "Should states be allowed to display the Confederate flag on government property?", "used": false},
    {"type": "politics", "text": "Should 'Gender Identity' be added to anti-discrimination laws?", "used": false},
    {"type": "politics", "text": "Should transgender athletes be allowed to compete in athletic events?", "used": false},
    {"type": "politics", "text": "Should the military allow women to serve in combat?", "used": false},
    {"type": "politics", "text": "Should health insurance providers be required to offer free birth control?", "used": false},
    {"type": "politics", "text": "Do you support the death penalty?", "used": false},
    {"type": "politics", "text": "Should businesses be required to have women on their board of directors?", "used": false},
    {"type": "politics", "text": "Should women be allowed to wear a face veil or other religious head garments to civic ceremonies?", "used": false},
    {"type": "politics", "text": "Should the government support a separation of church and state by removing references to God?", "used": false},
    {"type": "politics", "text": "Should there be more restrictions on the current process of purchasing a gun?", "used": false},
    {"type": "politics", "text": "Should teachers be allowed to carry guns at school?", "used": false},
    {"type": "politics", "text": "Are you in favor of decriminalizing drug use?", "used": false},
    {"type": "politics", "text": "Should there be term limits for members of Congress?", "used": false},
    {"type": "politics", "text": "Should the NSA (National Security Agency) be allowed to collect basic metadata of citizens' phone calls?", "used": false},
    {"type": "politics", "text": "Should local police increase surveillance and patrol of Muslim neighborhoods?", "used": false},
    {"type": "politics", "text": "Should people on the 'no-fly list' be banned from purchasing guns and ammunition?", "used": false},
    {"type": "politics", "text": "Should the redrawing of Congressional districts be controlled by an independent, non-partisan commission?", "used": false},
    {"type": "politics", "text": "Do you support Affirmative Action programs?", "used": false},
    {"type": "politics", "text": "Should internet service providers be allowed to speed up access to websites or services that pay higher rates at the expense of slowing down access to other sites that pay less?", "used": false},
    {"type": "politics", "text": "Should it be illegal to burn the American flag?", "used": false},
    {"type": "politics", "text": "Should victims of gun violence be allowed to sue firearms dealers and manufacturers?", "used": false},
    {"type": "politics", "text": "Should the government regulate social media sites as a means to prevent fake news and misinformation?", "used": false},
    {"type": "politics", "text": "Should the government pass laws that protect whistleblowers?", "used": false},
    {"type": "politics", "text": "Should the government be able to seize private property with reasonable compensation for public or civic use? Imminent Domain.", "used": false},
    {"type": "politics", "text": "Should the Supreme Court be reformed to include more seats and term limits on judges?", "used": false},
    {"type": "politics", "text": "Should the government raise retirement age for Social Security?", "used": false},
    {"type": "politics", "text": "Should social media sites ban political advertising?", "used": false},
    {"type": "politics", "text": "Should the military upgrade Air Force One?", "used": false},
    {"type": "politics", "text": "Should employers be required to pay men and women the same salary for the same job?", "used": false},
    {"type": "politics", "text": "Should the United States raise taxes on the rich?", "used": false},
    {"type": "politics", "text": "Should the government raise the federal minimum wage?", "used": false},
    {"type": "politics", "text": "Should businesses be required to provide paid leave for full-time employees during the birth of a child or sick family member?", "used": false},
    {"type": "politics", "text": "Should welfare recipients be tested for drugs?", "used": false},
    {"type": "politics", "text": "Do you support a universal basic income program?", "used": false},
    {"type": "politics", "text": "Should the government make cuts to public spending?", "used": false},
    {"type": "politics", "text": "Should the I.R.S. create a free electronic tax filing system?", "used": false},
    {"type": "politics", "text": "Should there be fewer or more restrictions on current welfare benefits?", "used": false},
    {"type": "politics", "text": "Should the government prevent 'mega mergers' of corporations that could potentially control a large percentage of market share within its industry?", "used": false},
    {"type": "politics", "text": "Do you believe Labor Unions help or hurt the economy?", "used": false},
    {"type": "politics", "text": "Should the government require businesses to pay salaried employees. making up to $46,000 per year. time-and-a-half for overtime hours?", "used": false},
    {"type": "politics", "text": "Should the government increase tariffs on imported products from China?", "used": false},
    {"type": "politics", "text": "Should the government break up Facebook, Amazon and Google?", "used": false},
    {"type": "politics", "text": "Should the government offer tax breaks to companies to keep jobs in the U.S.?", "used": false},
    {"type": "politics", "text": "Should the current estate tax be decreased?", "used": false},
    {"type": "politics", "text": "Should the government subsidize farmers?", "used": false},
    {"type": "politics", "text": "Should U.S. citizens be allowed to save or invest their money in offshore bank accounts?", "used": false},
    {"type": "politics", "text": "Should the government acquire equity stakes in companies it bails out during a recession?", "used": false},
    {"type": "politics", "text": "With regards to retirement, should the government get rid of pension plans, and operate more like private companies?", "used": false},
    {"type": "politics", "text": "Would you support increased sales tax in order to reduce property taxes?", "used": false},
    {"type": "politics", "text": "Should children of illegal immmigrants be granted legal citizenship?", "used": false},
    {"type": "politics", "text": "Should the U.S. build a wall along the southern border?", "used": false},
    {"type": "politics", "text": "Should illegal immigrants have access to government-subsidized healthcare?", "used": false},
    {"type": "politics", "text": "Should immigrants be deported if they commit a serious crime?", "used": false},
    {"type": "politics", "text": "Should sanctuary cities receive federal funding?", "used": false},
    {"type": "politics", "text": "Should working illegal immigrants be given temporary amnesty?", "used": false},
    {"type": "politics", "text": "Should illegal immigrants be offered in-state tuition rates within their residing state?", "used": false},
    {"type": "politics", "text": "Should immigrants be required to learn English?", "used": false},
    {"type": "politics", "text": "Should there be a limit to the amount of money a candidate can receive from a donor?", "used": false},
    {"type": "politics", "text": "Should the minimun voting age be lowered?", "used": false},
    {"type": "politics", "text": "Should corporations, unions, and non-profit organizations be allowed to donate to political parties?", "used": false},
    {"type": "politics", "text": "Should churches pay property taxes?", "used": false},
    {"type": "politics", "text": "Should there be a 5-year ban on White House and Congressional officials from becoming lobbyists after they leave the government?", "used": false},
    {"type": "politics", "text": "Should a politician who has been formerly convicted of a crime be allowed to run for office?", "used": false},
    {"type": "politics", "text": "Should political candidates be required to release their recent tax returns to the public? What about the President?", "used": false},
    {"type": "politics", "text": "Should the government regulate the prices of life-saving drugs?", "used": false},
    {"type": "politics", "text": "Should health insurance companies be allowed to deny coverage to individuals who have a pre-existing condition?", "used": false},
    {"type": "politics", "text": "Do you support Obamacare?", "used": false},
    {"type": "politics", "text": "Should the government increase funding for healthcare for low-income families (Medicaid)?", "used": false},
    {"type": "politics", "text": "Do you support a single-payer healthcare system?", "used": false},
    {"type": "politics", "text": "Should the federal government be allowed to negotiate drug prices for Medicare?", "used": false},
    {"type": "politics", "text": "Do you support increasing taxes on the rich in order to reduce interest rates for student loans?", "used": false},
    {"type": "politics", "text": "Should public college tuition be free?", "used": false},
    {"type": "politics", "text": "Do you support federal vouchers for charter schools?", "used": false},
    {"type": "politics", "text": "Should the federal government fund Universal preschool?", "used": false},
    {"type": "politics", "text": "Should the government increase environmental regulations to prevent climate change?", "used": false},
    {"type": "politics", "text": "Do you support the use of hydraulic fracking to extract oil and natural gas resources?", "used": false},
    {"type": "politics", "text": "Should the U.S. expand offshore oil drilling?", "used": false},
    {"type": "politics", "text": "Should the government give tax credits and subsidies to the wind power industry?", "used": false},
    {"type": "politics", "text": "Should disposable products (such as plastic cups, plates, and cutlery) that contain less than 50% of biodegradable material be banned?", "used": false},
    {"type": "politics", "text": "Should researchers be allowed to use animals in testing the safety of drugs, vaccines, medical devices, and cosmetics?", "used": false},
    {"type": "politics", "text": "Should cities be allowed to offer private companies economic incentives to relocate?", "used": false},
    {"type": "politics", "text": "Should the government require children to be vaccinated for preventable diseases?", "used": false},
    {"type": "politics", "text": "Should the government fund space travel?", "used": false},
    {"type": "politics", "text": "Do you support use of nuclear energy?", "used": false},
    {"type": "politics", "text": "Should every 18 year old citizen be required to provide at least one year of military service?", "used": false},
    {"type": "politics", "text": "Should the U.S. increase or decrease foreign aid spending?", "used": false},
    {"type": "politics", "text": "Should the U.S. accept refugees from Syria?", "used": false},
    {"type": "politics", "text": "Should the U.S. defend other NATO countries that maintain low military defense budgets relative to their G.D.P.?", "used": false},
    {"type": "politics", "text": "Should police officers be required to wear body cameras?", "used": false},
    {"type": "politics", "text": "Should convicted criminals have the right to vote?", "used": false},
    {"type": "politics", "text": "Should non-violent prisoners be released from jail in order to reduce overcrowding?", "used": false},
    {"type": "politics", "text": "Should the government increase spending on public transporation?", "used": false},

    {"type": "who", "text": "What gives your life meaning?", "used": false},
    {"type": "who", "text": "Why does the world need you?", "used": false},
    {"type": "who", "text": "What is missing from your life?", "used": false},
    {"type": "who", "text": "What verb best describes you?", "used": false},
    {"type": "who", "text": "What was your favorite thing to do as a kid?", "used": false},
    {"type": "who", "text": "When was the last time you cried?", "used": false},
    {"type": "who", "text": "What is something you would like to do that is impossible?", "used": false},
    {"type": "who", "text": "What makes you lose track of time?", "used": false},
    {"type": "who", "text": "What do other people often thank you for?", "used": false},
    {"type": "who", "text": "If you were a teacher, what subject would you likely teach?", "used": false},
    {"type": "who", "text": "What do people ask you for help with?", "used": false},
    {"type": "who", "text": "What makes you smile?", "used": false},
    {"type": "who", "text": "What makes you feel great about yourself?", "used": false},
    {"type": "who", "text": "What is a challenge you have overcome?", "used": false},
    {"type": "who", "text": "What is something about yourself that few people know?", "used": false},
    {"type": "who", "text": "Do you watch more than 6 hours of TV per week?", "used": false},
    {"type": "who", "text": "What tugs at your heartstrings?", "used": false},
    {"type": "who", "text": "Do you gossip?", "used": false},
    {"type": "who", "text": "Can you keep a secret?", "used": false},
    {"type": "who", "text": "Do you have a slogan or motto?  What is it?", "used": false},
    {"type": "who", "text": "Relative to others in your gender, are you more masculine or more feminine?", "used": false},
    {"type": "who", "text": "Are you comfortable going out to eat alone?", "used": false},
    {"type": "who", "text": "How many hours do you sleep at night?", "used": false},
    {"type": "who", "text": "Do you read at least one book every six months?", "used": false},
    {"type": "who", "text": "Do you care what others think of you?", "used": false},
    {"type": "who", "text": "Are you vain?", "used": false},
    {"type": "who", "text": "What do you notice as you walk through a crowded area?", "used": false},
    {"type": "who", "text": "What do you notice about others when in a deep conversation?", "used": false},
    {"type": "who", "text": "If you could have dinner with any three people, past or present, who would that be?", "used": false},
    {"type": "who", "text": "What is a job you never want to do?", "used": false},
    {"type": "who", "text": "Most everyone has thought of writing a book. What would you write a book about?", "used": false},
    {"type": "who", "text": "What is your favorite physical gift you have ever received?", "used": false},
    {"type": "who", "text": "What are you bored of?", "used": false},
    {"type": "who", "text": "What is the best compliment you ever received?", "used": false},
    {"type": "who", "text": "Would you die for your country?", "used": false},
    {"type": "who", "text": "What is success?", "used": false},
    {"type": "who", "text": "If your likeness and name were on a piece of money, which piece of money would you prefer?  Penny, nickle, $1 bill, $100 bill, etc", "used": false},
    {"type": "who", "text": "What are you avoiding doing because it is hard?", "used": false},
    {"type": "who", "text": "What has been the best part of your day so far today?", "used": false},
    {"type": "who", "text": "What are you pretending not to know?", "used": false},
    {"type": "who", "text": "What advice would you give yourself three years ago?", "used": false},
    {"type": "who", "text": "What advice would you give yourself twenty years ago?", "used": false},
    {"type": "who", "text": "What advice would you give your grandmother?", "used": false},
    {"type": "who", "text": "Which would you be more likely to turn your head towards: laughing, crying, or arguing? Why?", "used": false},

];

function speak( type ){ // type === 'random', 'politics', 'morals', 'who', 'bedroom', 'current news', 'repeat'
    let bAdult = false;
    if (type !== 'repeat') {

	let rbs = document.querySelectorAll('input[name="choice"]');
	if (rbs[0].checked)
	   bAdult = true;

	let startingNum = Math.floor(Math.random() * Math.floor(questions.length));
	found = false;

	if (currIdx === -1) {	// If first time in, determine totals for each
	    for (let i = 0; i < questions.length; i++) {
		if (questions[i].type === 'morals')
		    totalMorals++;
		else if (questions[i].type === 'politics')
		    totalPolitics++;
		else if (questions[i].type === 'who')
		    totalWho++;
		else if (questions[i].type === 'bedroom')
		    totalBedroom++;
		else if (questions[i].type === 'current news')
		    totalCurrentNews++;
	    }
	}

	if (!found) {
	    for (let i = startingNum; i < questions.length; i++) {
		if (!questions[i].used) {
		   if (questions[i].type === type) {
		      found = true;
		      currIdx = i;
		      break;
		   } else if (type === 'random') {
		      if (bAdult) {
			  found = true;
			  currIdx = i;
			  break;
		      } else if (questions[i].type !== 'bedroom') )) {
			  found = true;
			  currIdx = i;
			  break;
		      }
		   }
		}
	    }
	}
	if (!found) {	// if not found yet, start from beginning
	    for (let i = 0; i < startingNum; i++) {
		if (!questions[i].used && (questions[i].type === type || type === 'random')) {
		    found = true;
		    currIdx = i;
		    break;
		}
	    }
	}
	if (found) {
	    inputTxt = questions[currIdx].text;
	    questions[currIdx].used = true;

	    if (questions[currIdx].type === 'morals') {
		totalDoneMorals++;
		countUpText = "Morals: " + totalDoneMorals + " out of " + totalMorals;
	    } else if (questions[currIdx].type === 'politics') {
		totalDonePolitics++;
		countUpText = "Politics: " + totalDonePolitics + " out of " + totalPolitics;
	    } else if (questions[currIdx].type === 'who') {
		totalDoneWho++;
		countUpText = "WhoAmI: " + totalDoneWho + " out of " + totalWho;
	    } else if (questions[currIdx].type === 'bedroom') {
		totalDoneBedroom++;
		countUpText = "Bedroom: " + totalDoneBedroom + " out of " + totalBedroom;
	    } else if (questions[currIdx].type === 'current news') {
		totalDoneCurrentNews++;
		countUpText = "Current News: " + totalDoneCurrentNews + " out of " + totalCurrentNews;
	    } else {
		countUpText = "";
	    }
	} else {
	    if (type === 'random')
		inputTxt = "All questions have been asked";
	    else
		inputTxt = "All questions for '" + type + "' have been asked";
	    countUpText = "";
	}

	document.getElementById('myText').innerHTML = inputTxt;
	document.getElementById('countUpText').innerHTML = countUpText;
    }

    if (synth.speaking) {
	    synth.cancel();
    }
    if (inputTxt !== '') {
	var utterThis = new SpeechSynthesisUtterance(inputTxt);
	utterThis.onend = function (event) {
    };
    utterThis.onerror = function (event) {
    };

    synth.speak(utterThis);

  }
}



