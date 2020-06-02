const memes = [
  {
    id: "1_road_work",
    stub: "road_work",
    title: "Road Work Ahead",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1588045049/Guessy/memes/i_sure_hope.jpg",
    origin: "https://knowyourmeme.com/memes/road-work-ahead",
    alt: "",
  },
  {
    id: "2_is_pigeon",
    stub: "is_pigeon",
    title: "Is this a pigeon?",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1588044932/Guessy/memes/is_this_a_pigeon.jpg",
    origin: "https://knowyourmeme.com/memes/is-this-a-pigeon",
    alt: "",
  },
  {
    id: "3_pikachu",
    stub: "pikachu",
    title: "Shocked Pikachu",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1588959076/Guessy/memes/image0.png",
    origin: "https://knowyourmeme.com/memes/surprised-pikachu",
    alt: "",
  },
  {
    id: "4_then_perish",
    stub: "then_perish",
    title: "Then Perish",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589822516/Guessy/memes/perish.jpg",
    origin: "https://knowyourmeme.com/memes/then-perish",
    alt: "",
  },
  {
    id: "5_real_estate",
    stub: "real_estate",
    title: "It's Free Real Estate",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589828289/Guessy/memes/download_1.jpg",
    origin: "https://knowyourmeme.com/memes/its-free-real-estate",
    alt: "",
  },
  {
    id: "6_woman_yelling_cat",
    stub: "woman_yelling_cat",
    title: "Woman Yelling At Cat",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589844095/Guessy/memes/womanyellingcat.jpg",
    origin: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
    alt: "",
  },
  {
    id: "7_this_is_fine",
    stub: "this_is_fine",
    title: "This Is Fine",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589850523/Guessy/memes/Screen_Shot_2020-05-18_at_6.09.39_PM.png",
    origin: "https://knowyourmeme.com/memes/this-is-fine",
    alt: "",
  },
  {
    id: "8_evil_kermit",
    stub: "evil_kermit",
    title: "Evil Kermit",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589852447/Guessy/memes/evil_kermit.jpg",
    origin: "https://knowyourmeme.com/memes/evil-kermit",
    alt: "",
  },
  {
    id: "9_steel_feathers",
    stub: "steel_feathers",
    title: "But Steel is Heavier Than Feathers...",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589852807/Guessy/memes/steel_feathers.png",
    origin: "https://knowyourmeme.com/memes/steel-is-heavier-than-feathers",
    alt: "",
  },
  {
    id: "10_kermit_tea",
    stub: "kermit_tea",
    title: "But That's None of My Business",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589934935/Guessy/memes/kermit_tea.png",
    origin: "https://knowyourmeme.com/memes/but-thats-none-of-my-business",
    alt: "",
  },
  {
    id: "11_old_spice",
    stub: "old_spice",
    title: "I'm On A Horse",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589935138/Guessy/memes/old_spice.jpg",
    origin: "https://knowyourmeme.com/memes/events/isaiah-mustafa-old-spice",
    alt: "A shirtless black man riding a white horse and holding up a bottle of old spice",
  },
  {
    id: "12_mordor",
    stub: "mordor",
    title: "One Does Not Simply Walk Into Mordor",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589935255/Guessy/memes/mordor.jpg",
    origin:
      "https://knowyourmeme.com/memes/one-does-not-simply-walk-into-mordor",
    alt: "",
  },
  {
    id: "13_pointing_spider-man",
    stub: "pointing_spider-man",
    title: "Spider-Man Pointing At Spider-Man",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589935584/Guessy/memes/spider-man.jpg",
    origin: "https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man",
    alt: "",
  },
  {
    id: "14_good_for_her",
    stub: "good_for_her",
    title: "Good For Her",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589935959/Guessy/memes/Screen_Shot_2020-05-19_at_5.53.14_PM.png",
    origin: "",
    alt: "",
  },
  {
    id: "15_arthur_fist",
    stub: "arthur_fist",
    title: "Arthur's Fist",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1589936087/Guessy/memes/arthur_fist.jpg",
    origin: "https://knowyourmeme.com/memes/arthurs-fist",
    alt: "",
  },
  {
    id: "16_expensive_worse",
    stub: "expensive_worse",
    title: "Sometimes... Things That Are Expensive... Are Worse",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590772419/Guessy/memes/Expensive_Worse.jpg",
    origin:
      "https://knowyourmeme.com/memes/sometimes-things-that-are-expensive-are-worse",
    alt: "Sometimes... Things That Are Expensive... Are Worse",
  },
  {
    id: "17_distracted_boyfriend",
    stub: "distracted_boyfriend",
    title: "Distracted Boyfriend",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590772549/Guessy/memes/distracted_boyfriend.jpg",
    origin: "https://knowyourmeme.com/memes/distracted-boyfriend",
    alt:
      "Distracted Boyfriend Template of the original stock photo that went viral and became a meme",
  },
  {
    id: "18_marge_potato",
    stub: "marge_potato",
    title: "I Just Think They're Neat!",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590772934/Guessy/memes/marge_potato.png",
    origin: "https://knowyourmeme.com/memes/marge-simpsons-neat-potato",
    alt:
      "Marge Simpson holding up a potato with the subtitles 'I just think they're neat' ",
  },
  {
    id: "19_knife_cat",
    stub: "knife_cat",
    title: "Knife Cat",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590773078/Guessy/memes/knife_cat.png",
    origin: "https://knowyourmeme.com/memes/knife-cat",
    alt:
      "A white cat making a smug expression as a cooking knife is pointed at it",
  },
  {
    id: "20_no_take",
    stub: "no_take",
    title: "No Take, Only Throw",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590773287/Guessy/memes/no_take.png",
    origin: "https://knowyourmeme.com/memes/no-take-only-throw",
    alt:
      "A simple black and white comic of a dog by Tumblr user cupcakelogic. First panel it asks 'pls throw?', but when a hand appears to try to take the toy, it says 'no take! only throw'",
  },
  {
    id: "21_because_reasons",
    stub: "because_reasons",
    title: "I Want This Because of Reasons",
    img:
      "https://res.cloudinary.com/dwfqeeh5f/image/upload/v1590773639/Guessy/memes/because_reasons.jpg",
    origin: "",
    alt:
      "A Panel from the comic Three Word Phrase, by Ryan Pequin, depicting a man with a tophat, monacle and mustache and a speech bubble that says 'I want this because of reasons.' ",
  },
];

module.exports = memes;

// granny with a gun
// spiderverse thinking peter b
// DW this can't stop me cus I can't read
// whatcha got there? ... a smoothie
// I was there Gandalf
// I did my waiting 12 years of it in azkaban
