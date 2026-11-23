'use strict';

/**
 * questions.js
 * Full question bank for the Guru Nanak Dev Ji Quiz.
 *
 * juniorQuestions : 25 questions — ages 15–18, easy / medium difficulty
 * seniorQuestions : 25 questions — ages 18+,  medium / hard difficulty
 *
 * Each question:
 *   id        : unique string
 *   question  : question text
 *   options   : array of 4 answer strings
 *   correct   : index (0–3) of the correct option
 *   timeLimit : seconds (20 for all)
 *   points    : base score (1000 for all; speed bonus applied by gameManager)
 */

// ─── JUNIOR QUESTIONS (Ages 15–18 — Easy / Medium) ───────────────────────────

const juniorQuestions = [
  {
    id: 'j1',
    question: 'Where was Guru Nanak Dev Ji born?',
    options: ['Nankana Sahib', 'Amritsar', 'Lahore', 'Anandpur Sahib'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j2',
    question: 'In which country is Nankana Sahib (birthplace of Guru Nanak Dev Ji) located today?',
    options: ['Pakistan', 'India', 'Afghanistan', 'Bangladesh'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j3',
    question: 'What is the name of the instrument Bhai Mardana played when he travelled with Guru Nanak Dev Ji?',
    options: ['Rabab', 'Sitar', 'Tabla', 'Harmonium'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j4',
    question: 'How many Udasis (long journeys) did Guru Nanak Dev Ji undertake to spread his message?',
    options: ['Four', 'Two', 'Three', 'Five'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j5',
    question: 'What is the community kitchen in Sikhism, introduced by Guru Nanak Dev Ji, called?',
    options: ['Langar', 'Ardas', 'Sangat', 'Dastar'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j6',
    question: 'What is the first word of the Mul Mantar, the opening verse of the Guru Granth Sahib?',
    options: ['Ik Onkar', 'Waheguru', 'Sat Nam', 'Nirbhau'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j7',
    question: 'Who were the parents of Guru Nanak Dev Ji?',
    options: ['Mehta Kalu and Mata Tripta', 'Mehta Ram and Mata Sulakhni', 'Bhai Lehna and Mata Khivi', 'Mehta Kalu and Mata Sulakhni'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j8',
    question: 'What is the name of Guru Nanak Dev Ji\'s sister who had a great influence on him?',
    options: ['Bibi Nanaki', 'Bibi Bhani', 'Mata Ganga', 'Bibi Amro'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j9',
    question: 'What did Guru Nanak Dev Ji mean when he said "Na koi Hindu, na Mussalman"?',
    options: ['God sees no religion — only the truth in your heart', 'He rejected all religions', 'Everyone should become a Sikh', 'Hindus and Muslims are enemies'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j10',
    question: 'What town in India did Guru Nanak Dev Ji move to after his marriage, where he worked as a storekeeper?',
    options: ['Sultanpur Lodhi', 'Kartarpur', 'Talwandi', 'Anandpur'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j11',
    question: 'Which sacred text contains the compositions of Guru Nanak Dev Ji?',
    options: ['Guru Granth Sahib', 'Dasam Granth', 'Ramayan', 'Quran'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j12',
    question: 'What is the name of Guru Nanak Dev Ji\'s wife?',
    options: ['Mata Sulakhni', 'Mata Tripta', 'Mata Gujri', 'Mata Khivi'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j13',
    question: 'How many sons did Guru Nanak Dev Ji have?',
    options: ['Two — Sri Chand and Lakhmi Das', 'One — Sri Chand', 'Three sons', 'No children'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j14',
    question: 'What town did Guru Nanak Dev Ji found near the end of his life where he set up a farming community?',
    options: ['Kartarpur', 'Nankana Sahib', 'Sultanpur Lodhi', 'Amritsar'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j15',
    question: 'Which of the following best describes the Sikh concept of "Seva"?',
    options: ['Selfless service to others', 'Daily prayer', 'Pilgrimage to a holy site', 'Fasting'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j16',
    question: 'What miracle is associated with Guru Nanak Dev Ji stopping a large boulder rolling down a hill?',
    options: ['At Hasan Abdal (Panja Sahib)', 'At Nankana Sahib', 'At the River Bein', 'At Kartarpur'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j17',
    question: 'Which river is linked to the spiritual experience where Guru Nanak Dev Ji disappeared for three days and received God\'s message?',
    options: ['River Bein', 'River Ravi', 'River Sutlej', 'River Ganges'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j18',
    question: 'Who did Guru Nanak Dev Ji choose as his successor?',
    options: ['Bhai Lehna (Guru Angad Dev Ji)', 'His son Sri Chand', 'Bhai Mardana', 'His son Lakhmi Das'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j19',
    question: 'What language did Guru Nanak Dev Ji mainly use to write his compositions?',
    options: ['Punjabi', 'Hindi', 'Sanskrit', 'Persian'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j20',
    question: 'What does "Ik Onkar" mean?',
    options: ['There is One God', 'God is great', 'Praise the Lord', 'The eternal truth'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j21',
    question: 'During which Udasi did Guru Nanak Dev Ji travel to Mecca?',
    options: ['Third Udasi', 'First Udasi', 'Second Udasi', 'Fourth Udasi'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j22',
    question: 'What did Guru Nanak Dev Ji teach about caste?',
    options: ['All people are equal regardless of caste', 'Caste determines your place in society', 'Only higher castes can reach God', 'Caste is important for order'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j23',
    question: 'Which of these describes "Sangat" as taught by Guru Nanak Dev Ji?',
    options: ['Holy congregation — gathering together to worship', 'A type of prayer bead', 'A festival of lights', 'The Sikh scripture'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j24',
    question: 'What number Guru was Guru Nanak Dev Ji in the line of ten Sikh Gurus?',
    options: ['First', 'Second', 'Fifth', 'Tenth'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 'j25',
    question: 'In which year did Guru Nanak Dev Ji pass away?',
    options: ['1539', '1469', '1520', '1499'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  }
];

// ─── SENIOR QUESTIONS (Ages 18+ — Medium / Hard) ──────────────────────────────

const seniorQuestions = [
  {
    id: 's1',
    question: 'What is the exact date of birth of Guru Nanak Dev Ji according to the Nanakshahi calendar?',
    options: ['Vaisakh 1, 1469 CE (April 14)', 'Kartik Purnima, 1469 CE', 'Chet 1, 1469 CE', 'Magh 1, 1469 CE'],
    correct: 1,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's2',
    question: 'What are the three core pillars of Sikhism as taught by Guru Nanak Dev Ji?',
    options: ['Naam Japo, Kirat Karni, Vand Chhako', 'Seva, Simran, Sangat', 'Ardas, Langar, Nitnem', 'Sach, Santokh, Vichar'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's3',
    question: 'The Japji Sahib is the opening composition of the Guru Granth Sahib. How many pauris (stanzas) does it contain?',
    options: ['38 pauris', '25 pauris', '52 pauris', '30 pauris'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's4',
    question: 'Which historical ruler invaded Punjab during Guru Nanak Dev Ji\'s lifetime and is mentioned in his bani?',
    options: ['Babur', 'Akbar', 'Aurangzeb', 'Sher Shah Suri'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's5',
    question: 'The composition describing Babur\'s invasion is known as:',
    options: ['Babur Vani', 'Baburnama', 'Zafarnama', 'Var Majh'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's6',
    question: 'What event at the River Bein preceded Guru Nanak Dev Ji\'s first Udasi?',
    options: ['He disappeared for three days, then emerged declaring "There is no Hindu, no Muslim"', 'He fasted for forty days', 'He had a vision while meditating at a mosque', 'He received a divine text from an angel'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's7',
    question: 'During his travels to Mecca, what incident demonstrated that God is present everywhere?',
    options: ['Guru Nanak\'s feet, pointed toward the Kaaba, miraculously caused the Kaaba to move as the qazi turned them', 'He recited Gurbani in Arabic inside the Kaaba', 'He made water flow uphill', 'He turned sand into food for pilgrims'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's8',
    question: 'Which Raag (musical mode) is Japji Sahib assigned to in the Guru Granth Sahib?',
    options: ['It is not assigned a Raag — it is placed before the Raags as the Nitnem prayer', 'Raag Asa', 'Raag Gauri', 'Raag Bilaval'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's9',
    question: 'What does "Kirat Karni" mean as one of the three pillars taught by Guru Nanak Dev Ji?',
    options: ['Earning an honest living through one\'s own efforts', 'Serving in the Langar', 'Reciting God\'s Name', 'Sharing earnings with the poor'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's10',
    question: 'What does "Vand Chhako" mean?',
    options: ['Share what you have with others before consuming it yourself', 'Recite God\'s name daily', 'Go on pilgrimage', 'Renounce worldly possessions'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's11',
    question: 'How many hymns (shabads) composed by Guru Nanak Dev Ji are included in the Guru Granth Sahib?',
    options: ['974 hymns', '500 hymns', '1430 hymns', '350 hymns'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's12',
    question: 'What is the name of the town where Guru Nanak Dev Ji set up a planned community with Langar, Sangat, and farming?',
    options: ['Kartarpur', 'Nankana Sahib', 'Sultanpur Lodhi', 'Talwandi'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's13',
    question: 'The first Udasi of Guru Nanak Dev Ji covered which regions?',
    options: ['Eastern India — including Hardwar, Ayodhya, Puri, Bengal, and Assam', 'Arabia and Iraq', 'Tibet and China', 'Sri Lanka and Burma'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's14',
    question: 'Which Sikh doctrine states that the light (jot) of Guru Nanak continued through all ten Gurus?',
    options: ['Jot Vigaas — the expansion of the divine light across all Gurus', 'Guruship by bloodline', 'The Khalsa doctrine', 'The Panj Pyare doctrine'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's15',
    question: 'Which philosopher-saint is credited as a companion of Guru Nanak Dev Ji who was a Muslim musician?',
    options: ['Bhai Mardana', 'Bhai Bala', 'Sheikh Farid', 'Kabir Das'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's16',
    question: 'The story of Guru Nanak Dev Ji feeding a merchant named Malik Bhago plain bread instead of his lavish food teaches what lesson?',
    options: ['Honestly earned simple food is spiritually pure; food earned through exploitation is impure', 'Vegetarianism is essential', 'Fasting is virtuous', 'Wealth is sinful'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's17',
    question: 'What term describes the mystical experience where one\'s ego dissolves and the soul merges with God, as described in Guru Nanak\'s bani?',
    options: ['Sahaj — a state of effortless spiritual equilibrium', 'Mukti', 'Nirvana', 'Samadhi'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's18',
    question: 'In which Raag did Guru Nanak Dev Ji compose Asa Di Var, sung every morning in Gurdwaras?',
    options: ['Raag Asa', 'Raag Ramkali', 'Raag Maru', 'Raag Suhi'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's19',
    question: 'What is the significance of the Patti composition by Guru Nanak Dev Ji?',
    options: ['It uses the Gurmukhi alphabet to teach spiritual lessons', 'It describes the five prayers', 'It is a lament for the Babur invasion', 'It is a dialogue with Brahma'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's20',
    question: 'Which four concept-doors (duaras) must a soul pass through on its journey to God according to Guru Nanak\'s Japji Sahib?',
    options: ['Dharam Khand, Gian Khand, Saram Khand, Karam Khand — leading to Sach Khand', 'Birth, Life, Death, Rebirth', 'Earth, Sky, Heaven, God\'s Throne', 'Desire, Action, Knowledge, Liberation'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's21',
    question: 'Which Hindu priest attempted to give Guru Nanak Dev Ji the sacred thread (janeu) at age 11, which Guru Ji refused? What reason did he give?',
    options: ['Pandit Hardyal — Guru Nanak refused, saying a thread of compassion, contentment, and truth was the true janeu', 'He accepted it but then gave it away', 'He said only Brahmins deserved the thread', 'He tore the thread to protest caste'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's22',
    question: 'What is the concept of "Haumai" in Guru Nanak Dev Ji\'s teachings and why is it considered the root of suffering?',
    options: ['Haumai is ego/self-centredness; it separates the individual from God and leads to spiritual blindness', 'Haumai is desire for material wealth', 'Haumai is the fear of death', 'Haumai is attachment to family'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's23',
    question: 'Which scripture did Guru Nanak Dev Ji encounter Sheikh Sharaf during the fourth Udasi, and in which city?',
    options: ['Multan — Guru Nanak debated with Sheikh Sharaf and other Muslim scholars', 'Baghdad — he left a memorial (takhta) still present today', 'Mecca — at the Kaaba', 'Delhi — at the court of Ibrahim Lodi'],
    correct: 1,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's24',
    question: 'The Sikh principle of "Naam Japo" refers to:',
    options: ['Meditating on God\'s name to cleanse the mind and connect with the divine', 'Reciting the names of all ten Gurus daily', 'Chanting mantras at sunrise only', 'Learning the names of all 1430 pages of the Guru Granth Sahib'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  },
  {
    id: 's25',
    question: 'According to tradition, when Guru Nanak Dev Ji passed away in 1539 at Kartarpur, both Hindus and Muslims claimed his body for different funeral rites. What is said to have happened?',
    options: ['When the sheet was lifted, there were only flowers — Hindus took half for cremation, Muslims took half for burial', 'He ascended to heaven in front of all', 'His body was taken to Nankana Sahib', 'Only Sikhs were present at his passing'],
    correct: 0,
    timeLimit: 20,
    points: 1000
  }
];

module.exports = { juniorQuestions, seniorQuestions };
