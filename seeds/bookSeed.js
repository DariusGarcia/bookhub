const { Book } = require('../models/')

const bookData = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Novel',
    publishingDate: 'April 10, 1925',
    description:
      'The Great Gatsby is a novel by F. Scott Fitzgerald, published in 1925. The story is narrated by a young man named Nick Carraway, who becomes drawn into the opulent world of his mysterious neighbor, Jay Gatsby.',
  },
  {
    title: 'Javascript Crash Course',
    author: 'Harper Lee',
    genre: 'Novel',
    publishingDate: 'July 11, 1960',
    description:
      'Javascript Crash Course is a novel by Harper Lee, published in 1960. The story is told from the perspective of a young girl named Scout Finch, who lives with her brother Jem and their father Atticus in a small town in Alabama during the Great Depression.',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Novel',
    publishingDate: 'January 28, 1813',
    description:
      'Pride and Prejudice is a novel by Jane Austen, published in 1813. The story follows the lives of the five Bennett sisters, who must navigate the complexities of love and marriage in the early 19th century.',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Novel',
    publishingDate: 'July 16, 1951',
    description:
      'The Catcher in the Rye is a novel by J.D. Salinger, published in 1951. The story follows the experiences of Holden Caulfield, a teenage boy who has been expelled from prep school, as he wanders around New York City.',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Novel',
    publishingDate: 'July 16, 1934',
    description:
      'The Alchemist is a novel by Paulo Coelho, first published in 1988. The story follows a young shepherd named Santiago on a journey to fulfill his personal legend, as he travels from his homeland in Spain to the Egyptian desert in search of a hidden treasure.',
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    genre: 'Novel',
    publishingDate: 'June 20, 1890',
    description:
      'The Picture of Dorian Gray is a novel by Oscar Wilde, published in 1890. The story follows the life of Dorian Gray, a young man who makes a Faustian bargain to remain youthful and beautiful forever, while a portrait of him ages in his place.',
  },
  {
    title: 'Batman',
    author: 'F. Scott Fitzgerald',
    genre: 'Novel',
    publishingDate: 'April 10, 1925',
    description:
      'Batman is a novel by F. Scott Fitzgerald, published in 1925. The story is narrated by a young man named Nick Carraway, who becomes drawn into the opulent world of his mysterious neighbor, Jay Gatsby, and the decadent lifestyle of the Roaring Twenties. As Nick gets to know Gatsby, he uncovers the dark secrets of his past and the corrupt dealings that have made',
  },
  {
    title: 'Spiderman',
    author: 'Harper Lee',
    genre: 'Novel',
    publishingDate: 'July 11, 1960',
    description:
      'Spiderman is a novel by Harper Lee, published in 1960. The story is told from the perspective of a young girl named Scout Finch, who lives with her brother Jem and their father Atticus in a small town in Alabama during the Great Depression. As Scout and Jem become friends .',
  },
  {
    title: 'DarkNight',
    author: 'Jane Austen',
    genre: 'Novel',
    publishingDate: 'January 28, 1813',
    description:
      'DarkNight is a novel by Jane Austen, published in 1813. The story follows the lives of the five Bennett sisters, who must navigate the complexities of love and marriage in the early 19th century. As they interact with the wealthy and eligible bachelors of their social circle, the sisters are faced with difficult choices and must decide what is most important to them in life. The novel is a satirical commentary on the societal expectations of women and the nature of relationships in the Regency era.',
  },
  {
    title: 'Ant Man',
    author: 'J.D. Salinger',
    genre: 'Novel',
    publishingDate: 'July 16, 1951',
    description:
      'Ant Man is a novel by J.D. Salinger, published in 1951. The story follows the experiences of Holden Caulfield, a teenage boy who has been expelled from prep school, as he wanders around New York City. As Holden grapples with the loss of his younger brother and the phoniness of the adult world, he searches for a place to belong and for something genuine to hold onto. The novel is a coming-of-age story that explores themes of identity, alienation, and the transition from adolescence to adulthood.',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: 'Psychology',
    publishingDate: '2011',
    description:
      'In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation—each of these can be understood only by knowing how the two judgments and decisions.',
  },
  {
    title: 'The Right Stuff',
    author: 'Tom Wolfe',
    genre: 'History',
    publishingDate: '1979',
    description:
      'The Right Stuff is a 1979 book by Tom Wolfe about the pilots engaged in U.S. postwar experiments with experimental rocket-powered, high-speed aircraft as well as documenting the stories of the first Project Mercury astronauts selected for the NASA space program. The book was written in the 1970s and published in 1979. Wolfe presents a highly idealized portrayal of the Mercury Seven astronauts and their families, but also portrays the organizational and political aspects of the space the Soviet Union.',
  },
  {
    title:
      'The Innovators: How a Group of Inventors, Hackers, Geniuses, and Geeks Created the Digital Revolution',
    author: 'Walter Isaacson',
    genre: 'Technology',
    publishingDate: '2014',
    description:
      'The Innovators is a book about the people who created the computer and the Internet. It is a history of the digital revolution, told through the lives of the inventors and entrepreneurs who made it happen. The Innovators is a must-read for anyone interested in the history of technology or the future of innovation. Isaacson tells the story of the inventors and entrepreneurs who created the computer and the Internet, from Ada Lovelace and Charles Babbage to Steve Jobs and Bill Gates. Along the way, he examines the impact of their creations on learn from them.',
  },
  {
    title:
      "The Ghost Map: The Story of London's Most Terrifying Epidemic—and How It Changed Science, Cities, and the Modern World",
    author: 'Steven Johnson',
    genre: 'Science',
    publishingDate: '2006',
    description:
      'In the summer of 1854, a devastating outbreak of cholera swept through London, killing thousands of people. The Ghost Map is the story of that outbreak and the two men who tracked it down and helped bring about the major changes that came in its wake. The Ghost Map is a tale of science, technology, and the birth of modern cities, but it is also a story about people: about the lives and deaths of the ordinary men and women who lived through that terrible time, and about the heroes who fought to save them.',
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    genre: 'Novel',
    publishingDate: 'April 14, 1939',
    description:
      "A story of the Joad family's migration from Oklahoma to California during the Dust Bowl era",
  },
  {
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    genre: 'Novel',
    publishingDate: 'September 1, 1952',
    description:
      "A story of an aging Cuban fisherman's struggle with a giant marlin",
  },
  {
    title: 'The Death of Ivan Ilyich',
    author: 'Leo Tolstoy',
    genre: 'Novel',
    publishingDate: '1886',
    description: 'A story about the life and death of a Russian lawyer',
  },
  {
    title: 'The Forbidden Forest',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    publishingDate: 'July 31, 1997',
    description: 'A tale of magic and adventure set in the wizarding world',
  },
  {
    title: "The Time Traveler's Wife",
    author: 'Audrey Niffenegger',
    genre: 'Science Fiction',
    publishingDate: 'September 5, 2003',
    description: 'A love story about a man who travels through time',
  },
  {
    title: 'The Island of Dr. Moreau',
    author: 'H.G. Wells',
    genre: 'Science Fiction',
    publishingDate: '1896',
    description:
      'A story about a scientist who creates human-animal hybrids on a remote island',
  },
  {
    title: 'The Witch of Willow Lane',
    author: 'Nancy Holder',
    genre: 'Horror',
    publishingDate: 'October 31, 2007',
    description: 'A tale of a cursed family and the witch who haunts them',
  },
  {
    title: 'The Book of Lost Things',
    author: 'John Connolly',
    genre: 'Fantasy',
    publishingDate: 'September 19, 2006',
    description:
      'A story about a boy who finds his way to a magical world through the books in his library',
  },
  {
    title: 'The Red Tent',
    author: 'Anita Diamant',
    genre: 'Historical Fiction',
    publishingDate: 'January 1, 1997',
    description:
      'A retelling of the story of Dinah from the Bible set in ancient times',
  },
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    genre: 'Fantasy',
    publishingDate: 'September 13, 2011',
    description:
      'A story about two young magicians who compete in a mysterious circus',
  },
  {
    title: 'The Bronze Horseman',
    author: 'Paulo Coelho',
    genre: 'Historical Fiction',
    publishingDate: '2001',
    description:
      'A love story set during the Siege of Leningrad in World War II',
  },
  {
    title: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafón',
    genre: 'Mystery',
    publishingDate: '2001',
    description:
      'A story about a young man searching for the truth about a mysterious author in post-war Barcelona',
  },
  {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fantasy',
    publishingDate: 'March 27, 2007',
    description:
      'A tale of a young orphan who grows up to be the greatest magician of his time',
  },
  {
    title: 'The Golden Compass',
    author: 'Philip Pullman',
    genre: 'Fantasy',
    publishingDate: '1995',
    description:
      'A story about a young girl who travels through parallel universes',
  },
  {
    title: 'The House on Mango Street',
    author: 'Sandra Cisneros',
    genre: 'Realistic Fiction',
    publishingDate: '1984',
    description:
      'A coming-of-age story about a young Latina girl growing up in Chicago',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    publishingDate: '2003',
    description:
      'A mystery about a secret society and a conspiracy surrounding the works of Leonardo da Vinci',
  },
  {
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    genre: 'Autobiographical Fiction',
    publishingDate: 'January 14, 1963',
    description:
      "A semi-autobiographical novel about a young woman's descent into mental illness",
  },
]

const createBookTable = () => Book.bulkCreate(bookData)

module.exports = createBookTable
